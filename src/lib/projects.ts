export type Forge = "github" | "codeberg";

export interface Project {
    slug: string;
    name: string;
    description: string;
    language: string;
    stars: number;
    repo: string; // "org/repo"
    forge?: Forge; // default "github"
    status?: string; // shown as a chip; only set when the repo states it
    why: string; // the problem it solves; must not restate `description`
    detail: string; // what it actually does, handles, and does not do
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
            "Reproducible dev environments defined as code. One command provisions the same toolchain, package managers, editor extensions, and environment variables on any machine.",
        language: "TypeScript",
        stars: 1,
        repo: "ossl-dev/genesis",
        docsUrl: "https://genesis-docs.vercel.app",
        why: "Setup instructions rot as soon as one machine differs from another, and the person who finds out is whoever joins next. Genesis keeps the environment definition in the repo, so a laptop, a fresh container, and a teammate's machine end up with the same tools.",
        detail: "Genesis installs dev tools, package managers, VS Code extensions and settings, environment variables, shell aliases, and git config, then clones the repos the project expects. A separate validate command checks a machine against the same definition, which is what stops fifty developers from drifting apart. It runs on macOS on Intel and Apple Silicon, Linux, Windows natively and under WSL2, and inside Docker containers.",
        topics: ["developer-tools", "devops", "dx"],
    },
    {
        slug: "zinc",
        name: "zinc",
        description:
            "Cross-language shared memory in Rust. Processes map the same physical pages, so a value written in one language is read in another with no serialization and no copies.",
        language: "Rust",
        stars: 62,
        repo: "ossl-dev/zinc",
        docsUrl: "https://zinc.ossl.dev",
        why: "SharedArrayBuffer shares memory between worker threads inside one process. Nothing does that across processes or languages, so moving a large dataset usually means serializing it, pushing it through a socket, and rebuilding it on the far side. Zinc maps the same RAM pages into every process, so there is nothing left to transfer.",
        detail: "A Rust core compiles to a shared library and exposes eight C functions; each language adapter is a thin FFI wrapper over that same ABI rather than a reimplementation. Regions are reference-counted through a 64-byte header, only the creator may unlink a segment, and handles unmap themselves when dropped. Adapters cover Python, Go, Node, Bun, Deno, C++, Java, and C#. It builds on POSIX shared memory, so Linux and macOS only, with no Windows support.",
        topics: ["memory", "systems", "cross-language"],
    },
    {
        slug: "pylon",
        name: "pylon",
        description:
            "API versioning without forking your codebase. Pylon upgrades each request to the current version, runs the handler, and downgrades the response back to whatever the caller asked for.",
        language: "TypeScript",
        stars: 0,
        repo: "ossl-dev/pylon",
        why: "Every API eventually breaks its contract, and the two usual answers both hurt: maintain N parallel forks, where one bug has to be fixed N times, or push every customer through a migration window on the product team's schedule. Stripe, Twilio, and Shopify each built an internal versioning layer for this. Pylon is that layer, released.",
        detail: "You keep one codebase on the current version. Pylon detects the caller's version, transforms the request upward, fills in defaults, validates against the current schema, runs the handler, then transforms the response back down. Requests already on the current version pay nothing because the identity transform inlines; legacy versions cost roughly 0.1ms per hop. Version naming is pluggable, with presets for semantic, numeric, date-based, CalVer, and Stripe-style versions, plus custom parsers and comparators.",
        topics: ["api", "versioning", "backend"],
    },
    {
        slug: "differens",
        name: "differens",
        description:
            "A diff engine that tells you what actually happened to your code: renamed, moved, extracted, reformatted, rather than which lines changed.",
        language: "TypeScript",
        stars: 0,
        repo: "ossl-dev/differens",
        docsUrl: "https://differens.ossl.dev",
        why: "Line diffs date back to the 1974 Unix diff and still do not know what the lines mean. Rename a function and you get a deletion plus an addition. Move a block across files and you get two unrelated chunks of noise. Reformat a file and the whole thing reads as changed, which leaves the thinking to you.",
        detail: "Differens parses both sides into trees with tree-sitter, matches nodes using a GumTree-lineage algorithm, and emits a typed edit script of insert, delete, update, and move. The pipeline is deterministic and runs no model anywhere, so the same inputs give the same narration every time. When something will not parse it degrades rather than failing: structural tree diff, then line diff, then changed or unchanged. Adapters cover JSON, YAML, TOML, INI, env files, and sixteen languages. It reads git history or two plain directories, so a repository is not required.",
        packageUrl: "https://www.npmjs.com/package/differens",
        packageLabel: "npm",
        topics: ["diff", "analysis", "developer-tools"],
    },
    {
        slug: "carrot",
        name: "carrot",
        description:
            "Document engine for Rust applications. Records with stable IDs, validated transactions, undo/redo history, verified project files, and crash recovery for diagram editors, drawing tools, and map editors.",
        language: "Rust",
        stars: 0,
        repo: "oss-labs/carrot",
        forge: "codeberg",
        status: "prerelease",
        why: "Diagram editors, drawing tools, and map editors all need the same things underneath: records with stable IDs, edits that apply completely or not at all, history that does not copy the whole document, saves that cannot corrupt the previous file, and a way back after a crash. Carrot supplies that layer. You define what your records mean; Carrot stores them and checks the relationships you declare.",
        detail: "Transactions are validated as a whole before they publish, and snapshots share unchanged data, so keeping history does not duplicate the document. An optional query crate caches derived results and tracks which records they read, so a changed input invalidates only its dependents: on a 1,000-record workload that cut cold allocation from 8.5 MB to 51 KB. An optional geometry crate does exact integer predicates, polygon booleans, and spatial queries with no fixed vertex ceiling. Documents on disk are content-addressed archives with SHA-256 verified revisions and named checkpoints, and large assets stream through a block store instead of loading into memory. It is prerelease, and durable saving is qualified on Unix only.",
        topics: ["documents", "editor", "crash-recovery"],
    },
];
