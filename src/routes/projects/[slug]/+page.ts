import { error } from "@sveltejs/kit";
import { Marked } from "marked";
import { projects, repoUrls, type RepoUrls } from "$lib/projects";
import type { PageLoad } from "./$types";

export const entries = () => projects.map((p) => ({ slug: p.slug }));

export interface Heading {
    id: string;
    text: string;
    level: number;
}

function slugify(text: string, used: Map<string, number>): string {
    const base =
        text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "") || "section";
    const n = used.get(base) ?? 0;
    used.set(base, n + 1);
    return n === 0 ? base : `${base}-${n + 1}`;
}

function escapeAttr(s: string): string {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

// Raw HTML in READMEs (e.g. <img src="logo.png">) bypasses the markdown
// link/image renderers. Rewrite its relative src/href to absolute so it
// renders and the prerender crawler doesn't treat it as an internal page.
function rewriteRawHtml(html: string, urls: RepoUrls): string {
    return html.replace(
        /\b(src|href)=(["'])([^"']+)\2/g,
        (m, attr, _q, val) => {
            if (/^(?:[a-z][a-z0-9+.-]*:|#|\/)/i.test(val)) return m;
            const base = attr === "src" ? urls.rawBase : urls.blobBase;
            return `${attr}="${base}/${val.replace(/^\.\//, "")}"`;
        }
    );
}

// Render README markdown to HTML at build time. Relative links point back to the
// repo's file view, relative images to its raw base, and h2/h3 get slugged ids
// for the TOC rail. Runs in node during prerender, not in the browser.
function renderReadme(md: string, urls: RepoUrls) {
    const headings: Heading[] = [];
    const used = new Map<string, number>();

    const marked = new Marked();
    marked.use({
        renderer: {
            html({ text }) {
                return rewriteRawHtml(text, urls);
            },
            link({ href, title, tokens }) {
                const text = this.parser.parseInline(tokens);
                const h = href ?? "";
                let out = h;
                let attrs = "";
                if (/^(https?:|mailto:|#)/.test(h)) {
                    if (/^https?:/.test(h)) {
                        attrs = ' target="_blank" rel="noopener noreferrer"';
                    }
                } else {
                    const [path, ...frag] = h.split("#");
                    out = `${urls.blobBase}/${path}${frag.length ? `#${frag.join("#")}` : ""}`;
                    attrs = ' target="_blank" rel="noopener noreferrer"';
                }
                const enc = encodeURI(out).replace(/%25/g, "%");
                return `<a href="${enc}"${attrs}${title ? ` title="${escapeAttr(title)}"` : ""}>${text}</a>`;
            },
            image({ href, title, text }) {
                const src = href ?? "";
                const out = /^https?:/.test(src)
                    ? src
                    : `${urls.rawBase}/${src.replace(/^\.\//, "")}`;
                const enc = encodeURI(out).replace(/%25/g, "%");
                const alt = escapeAttr(text ?? "");
                return `<img src="${enc}" alt="${alt}"${title ? ` title="${escapeAttr(title)}"` : ""}>`;
            },
            heading({ tokens, depth, text }) {
                const id = slugify(text ?? "", used);
                headings.push({ id, text: text ?? "", level: depth });
                return `<h${depth} id="${id}">${this.parser.parseInline(tokens)}</h${depth}>`;
            },
        },
    });

    const html = marked.parse(md) as string;
    return { html, headings };
}

export const load: PageLoad = async ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) {
        throw error(404, `No project named "${params.slug}"`);
    }
    const urls = repoUrls(project);

    let readmeHtml = "";
    let headings: Heading[] = [];
    try {
        // global fetch, not SvelteKit's injected one: the injected fetch enforces
        // CORS during prerender, and Codeberg's raw endpoint sends no CORS headers
        const res = await globalThis.fetch(`${urls.rawBase}/README.md`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const md = await res.text();
        // the page header owns the title; drop the README's first h1
        const body = md.replace(/^#\s+[^\n]+/, "");
        ({ html: readmeHtml, headings } = renderReadme(body, urls));
    } catch (e) {
        console.error(`[readme] ${project.slug}:`, e);
        readmeHtml = "";
        headings = [];
    }

    return { project, readmeHtml, headings };
};
