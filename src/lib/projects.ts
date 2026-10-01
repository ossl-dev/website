export type Forge = "github" | "codeberg";

export interface Project {
    slug: string;
    name: string;
    description: string;
    language: string;
    stars: number;
    repo: string; // "org/repo"
    forge?: Forge; // default "github"
    docsUrl?: string;
    packageUrl?: string;
    packageLabel?: string;
    topics: string[];
}

export interface RepoUrls {
    label: string;
    page: string;
    rawBase: string;
    blobBase: string;
}

export function repoUrls(p: Project): RepoUrls {
    if ((p.forge ?? "github") === "codeberg") {
        return {
            label: "Codeberg",
            page: `https://codeberg.org/${p.repo}`,
            rawBase: `https://codeberg.org/${p.repo}/raw/branch/main`,
            blobBase: `https://codeberg.org/${p.repo}/src/branch/main`,
        };
    }
    return {
        label: "GitHub",
        page: `https://github.com/${p.repo}`,
        rawBase: `https://raw.githubusercontent.com/${p.repo}/main`,
        blobBase: `https://github.com/${p.repo}/blob/main`,
    };
}

export const projects: Project[] = [
    {
        slug: "genesis",
        name: "genesis",
        description:
            "Reproducible dev environments defined as code. One command to provision the exact same toolchain, SDKs, and config across any machine.",
        language: "TypeScript",
        stars: 1,
        repo: "ossl-dev/genesis",
        docsUrl: "https://genesis-docs.vercel.app",
        topics: ["developer-tools", "devops", "dx"],
    },
    {
        slug: "zinc",
        name: "zinc",
        description:
            "Cross-language shared memory in Rust. Zero-copy data sharing between processes with bindings for C, Python, Node, and Go.",
        language: "Rust",
        stars: 62,
        repo: "ossl-dev/zinc",
        docsUrl: "https://zinc.ossl.dev",
        topics: ["memory", "systems", "cross-language"],
    },
    {
        slug: "pylon",
        name: "pylon",
        description:
            "API versioning that does not require restructuring your codebase. Works with Express, Fastify, Hono, and anything shaped like middleware.",
        language: "TypeScript",
        stars: 0,
        repo: "ossl-dev/pylon",
        topics: ["api", "versioning", "backend"],
    },
    {
        slug: "differens",
        name: "differens",
        description:
            "A diff engine that tells you what actually happened to your code, moved, renamed, extracted, reformatted, instead of which lines changed. Algorithm-first, AI-optional, works with or without git.",
        language: "TypeScript",
        stars: 0,
        repo: "ossl-dev/differens",
        docsUrl: "https://differens.ossl.dev",
        packageUrl: "https://www.npmjs.com/package/differens",
        packageLabel: "npm",
        topics: ["diff", "analysis", "developer-tools"],
    },
    {
        slug: "carrot",
        name: "carrot",
        description:
            "Document engine for Rust applications. Manages editable data, undo/redo history, project files, and crash recovery for diagram editors, drawing tools, and map editors.",
        language: "Rust",
        stars: 0,
        repo: "oss-labs/carrot",
        forge: "codeberg",
        topics: ["documents", "editor", "crash-recovery"],
    },
];
