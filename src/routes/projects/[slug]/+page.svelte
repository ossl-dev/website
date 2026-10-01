<script lang="ts">
    import { tick } from "svelte";
    import { repoUrls, type Project } from "$lib/projects";

    let { data } = $props();
    const project: Project = $derived(data.project);
    const repo = $derived(repoUrls(project));
    const readmeHtml = $derived(data.readmeHtml);
    const headings = $derived(data.headings);

    let activeId = $state("");
    let observer: IntersectionObserver | undefined;

    // scroll spy on README headings; highlight current section in the rail
    // ponytail: last intersecting entry wins — fine for short READMEs
    $effect(() => {
        if (!readmeHtml) return;
        tick().then(() => {
            observer = new IntersectionObserver(
                (entries) => {
                    for (const e of entries) {
                        if (e.isIntersecting) activeId = e.target.id;
                    }
                },
                { rootMargin: "-15% 0px -75% 0px" }
            );
            document
                .querySelectorAll(".readme h2[id], .readme h3[id]")
                .forEach((el) => observer!.observe(el));
        });
        return () => observer?.disconnect();
    });
</script>

<svelte:head>
    <title>{project.name} - OSS Labs</title>
    <meta name="description" content={project.description} />
    <meta property="og:title" content="{project.name} - OSS Labs" />
    <meta property="og:description" content={project.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`https://ossl.dev/projects/${project.slug}`} />
    <meta property="og:site_name" content="OSS Labs" />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{project.name} - OSS Labs" />
    <meta name="twitter:description" content={project.description} />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href={`https://ossl.dev/projects/${project.slug}`} />
    <meta property="og:image" content="https://ossl.dev/og-images/projects.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content="https://ossl.dev/og-images/projects.png" />
</svelte:head>

<header class="page-head">
    <a href="/projects" class="back">← All projects</a>
    <h1>{project.name}</h1>
    <p class="desc">{project.description}</p>

    <div class="links">
        <a
            href={repo.page}
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary"
        >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"
                ><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg
            >
            {repo.label}
        </a>
        {#if project.docsUrl}
            <a
                href={project.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-ghost"
            >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"
                    ><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg
                >
                Docs
            </a>
        {/if}
        {#if project.packageUrl}
            <a
                href={project.packageUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-ghost"
            >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"
                    ><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg
                >
                {project.packageLabel ?? "Package"}
            </a>
        {/if}
    </div>

    <p class="meta">
        <span class="lang">
            <span class="lang-dot" aria-hidden="true"></span>
            {project.language}
        </span>
        {#if project.stars > 0}
            <span class="sep" aria-hidden="true">·</span>
            <span>{project.stars} stars</span>
        {/if}
        <span class="sep" aria-hidden="true">·</span>
        <span>{project.repo}</span>
    </p>
</header>

<div class="layout">
    <article class="readme" aria-label={`${project.name} README`}>
        {#if readmeHtml}
            {@html readmeHtml}
        {:else}
            <div class="error">
                <h2>Couldn't load the README</h2>
                <p>
                    The README lives on {repo.label} and it didn't come through
                    at build time. Read it there instead.
                </p>
                <a
                    href={repo.page}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-primary"
                >
                    Read it on {repo.label}
                </a>
            </div>
        {/if}
    </article>

    {#if headings.length > 1}
        <aside class="toc" aria-label="README sections">
            <p class="toc-label">Readme</p>
            <nav>
                {#each headings as h}
                    <a
                        href={`#${h.id}`}
                        class:active={activeId === h.id}
                        class:sub={h.level === 3}
                    >
                        {h.text}
                    </a>
                {/each}
            </nav>
        </aside>
    {/if}
</div>

<style>
    .page-head {
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 7rem 1.5rem 3rem;
    }

    .back {
        display: inline-block;
        font-family: var(--font-mono);
        font-size: 0.78125rem;
        color: var(--text-muted);
        margin-bottom: 1.5rem;
        transition: color 0.2s;
    }

    .back:hover,
    .back:focus-visible {
        color: var(--accent);
    }

    h1 {
        font-family: var(--font-display);
        font-size: clamp(2.75rem, 6vw, 4.25rem);
        font-weight: 500;
        letter-spacing: -0.03em;
        line-height: 1.05;
        color: var(--text-primary);
        margin-bottom: 1rem;
    }

    .desc {
        font-size: 1.125rem;
        color: var(--text-secondary);
        line-height: 1.65;
        max-width: 640px;
        margin-bottom: 1.75rem;
    }

    .links {
        display: flex;
        gap: 0.625rem;
        flex-wrap: wrap;
        margin-bottom: 1.5rem;
    }

    .btn {
        display: inline-flex;
        align-items: center;
        gap: 0.375rem;
        padding: 0.5rem 1rem;
        border-radius: var(--radius-sm);
        font-family: var(--font-mono);
        font-size: 0.8125rem;
        font-weight: 500;
        transition: background 0.2s, color 0.2s, border-color 0.2s;
    }

    .btn-primary {
        background: var(--text-primary);
        color: var(--bg-base);
    }

    .btn-primary:hover,
    .btn-primary:focus-visible {
        background: #e0d8cf;
    }

    .btn-ghost {
        color: var(--text-secondary);
        border: 1px solid var(--border-default);
    }

    .btn-ghost:hover,
    .btn-ghost:focus-visible {
        color: var(--text-primary);
        border-color: var(--text-secondary);
    }

    .meta {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-wrap: wrap;
        font-family: var(--font-mono);
        font-size: 0.78125rem;
        color: var(--text-muted);
    }

    .lang {
        display: inline-flex;
        align-items: center;
        gap: 0.375rem;
    }

    .lang-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--accent);
        opacity: 0.8;
    }

    .sep {
        opacity: 0.5;
    }

    .layout {
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 0 1.5rem var(--section-gap);
        display: grid;
        grid-template-columns: minmax(0, 1fr) 220px;
        gap: 3rem;
        align-items: start;
    }

    .toc {
        position: sticky;
        top: 6rem;
        max-height: calc(100vh - 9rem);
        overflow-y: auto;
        padding-left: 1.25rem;
        border-left: 1px solid var(--border-subtle);
    }

    .toc-label {
        font-family: var(--font-mono);
        font-size: 0.65625rem;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        color: var(--text-muted);
        margin-bottom: 0.75rem;
    }

    .toc a {
        display: block;
        font-family: var(--font-mono);
        font-size: 0.71875rem;
        line-height: 1.45;
        color: var(--text-secondary);
        padding: 0.25rem 0 0.25rem 0.625rem;
        border-left: 2px solid transparent;
        transition: color 0.15s, border-color 0.15s;
    }

    .toc a.sub {
        padding-left: 1.375rem;
        font-size: 0.6875rem;
        color: var(--text-muted);
    }

    .toc a:hover,
    .toc a:focus-visible {
        color: var(--text-primary);
    }

    .toc a.active {
        color: var(--accent);
        border-left-color: var(--accent);
    }

    /* --- rendered README prose --- */
    .readme {
        min-width: 0;
        font-size: 0.96875rem;
    }

    .readme :global(h1),
    .readme :global(h2),
    .readme :global(h3),
    .readme :global(h4) {
        color: var(--text-primary);
        scroll-margin-top: 6rem;
    }

    .readme :global(h2) {
        font-family: var(--font-display);
        font-size: 1.625rem;
        font-weight: 550;
        letter-spacing: -0.015em;
        border-top: 1px solid var(--border-subtle);
        padding-top: 2.5rem;
        margin: 3.5rem 0 1rem;
    }

    .readme :global(h2:first-child) {
        border-top: none;
        padding-top: 0;
        margin-top: 0;
    }

    .readme :global(h3) {
        font-size: 1.1875rem;
        font-weight: 600;
        margin: 2.25rem 0 0.75rem;
    }

    .readme :global(h4) {
        font-size: 1rem;
        font-weight: 600;
        margin: 1.5rem 0 0.5rem;
    }

    .readme :global(p) {
        color: var(--text-secondary);
        line-height: 1.75;
        margin: 0 0 1rem;
    }

    .readme :global(ul),
    .readme :global(ol) {
        color: var(--text-secondary);
        line-height: 1.7;
        margin: 0 0 1rem;
        padding-left: 1.5rem;
    }

    .readme :global(li) {
        margin: 0.25rem 0;
    }

    .readme :global(li > p) {
        margin: 0;
    }

    .readme :global(a) {
        color: var(--accent);
        text-decoration: underline;
        text-underline-offset: 3px;
        text-decoration-color: rgba(212, 165, 116, 0.4);
        transition: text-decoration-color 0.2s;
    }

    .readme :global(a:hover),
    .readme :global(a:focus-visible) {
        text-decoration-color: var(--accent);
    }

    .readme :global(code) {
        font-family: var(--font-mono);
        font-size: 0.8125rem;
        background: var(--bg-elevated);
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-sm);
        padding: 0.125rem 0.375rem;
        color: #e8dfd4;
    }

    .readme :global(pre) {
        background: #14100c;
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-md);
        padding: 1rem 1.125rem;
        overflow-x: auto;
        margin: 0 0 1.25rem;
        max-width: 100%;
    }

    .readme :global(pre code) {
        background: none;
        border: none;
        padding: 0;
        font-size: 0.8125rem;
        line-height: 1.65;
        color: #d8d2c9;
    }

    .readme :global(blockquote) {
        border-left: 2px solid var(--accent);
        opacity: 0.85;
        padding: 0.125rem 0 0.125rem 1rem;
        margin: 0 0 1rem;
    }

    .readme :global(blockquote p) {
        margin: 0;
    }

    .readme :global(table) {
        width: 100%;
        border-collapse: collapse;
        margin: 0 0 1.25rem;
        font-size: 0.875rem;
    }

    .readme :global(th) {
        font-family: var(--font-mono);
        font-size: 0.71875rem;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        text-align: left;
        color: var(--text-muted);
        border-bottom: 1px solid var(--border-default);
        padding: 0.5rem 0.75rem;
    }

    .readme :global(td) {
        color: var(--text-secondary);
        border-bottom: 1px solid var(--border-subtle);
        padding: 0.5rem 0.75rem;
    }

    .readme :global(img) {
        max-width: 100%;
        height: auto;
        border-radius: var(--radius-md);
        border: 1px solid var(--border-subtle);
        margin: 0.5rem 0;
    }

    .readme :global(hr) {
        border: none;
        border-top: 1px solid var(--border-subtle);
        margin: 2.5rem 0;
    }

    .readme :global(strong) {
        color: var(--text-primary);
        font-weight: 600;
    }

    /* --- error state --- */
    .error {
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-lg);
        background: var(--bg-surface);
        padding: 2.5rem;
        text-align: center;
    }

    .error h2 {
        font-family: var(--font-display);
        font-size: 1.5rem;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
    }

    .error p {
        color: var(--text-secondary);
        max-width: 400px;
        margin: 0 auto 1.5rem;
    }

    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }

    @media (max-width: 1000px) {
        .layout {
            grid-template-columns: 1fr;
        }

        .toc {
            display: none;
        }
    }

    @media (max-width: 640px) {
        .page-head {
            padding-top: 5.5rem;
        }
    }
</style>
