<script lang="ts">
    import ProjectCard from "$lib/components/ProjectCard.svelte";

    const projects = [
        {
            name: "genesis",
            description:
                "Declarative, cross-platform developer environment provisioning. Define your toolchain, SDKs, and config as code. One command to recreate the exact same environment everywhere.",
            language: "TypeScript",
            url: "https://github.com/ossl-dev/genesis",
            topics: ["developer-tools", "devops", "dx", "cross-platform"],
        },
        {
            name: "zinc",
            description:
                "Universal Shared Memory. A high-performance shared memory library in Rust with bindings for C, Python, Node, and Go. Zero-copy data sharing across language boundaries.",
            language: "Rust",
            url: "https://zinc.ossl.dev",
            topics: ["memory", "systems", "cross-language", "ffi"],
        },
        {
            name: "pylon",
            description:
                "Dead simple API versioning. Works with Express, Fastify, Hono, and anything middleware-shaped. Clean routing, minimal overhead, no codebase restructuring required.",
            language: "TypeScript",
            url: "https://github.com/ossl-dev/pylon",
            topics: ["api", "versioning", "backend", "http"],
        },
    ];
</script>

<svelte:head>
    <title>Projects - OSS Labs</title>
    <meta
        name="description"
        content="Open source developer tools built and maintained by the OSS Labs community."
    />
    <meta property="og:title" content="Projects - OSS Labs" />
    <meta
        property="og:description"
        content="Open source developer tools built and maintained by the OSS Labs community."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://ossl.dev/projects" />
    <meta property="og:site_name" content="OSS Labs" />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Projects - OSS Labs" />
    <meta
        name="twitter:description"
        content="Open source developer tools built and maintained by the OSS Labs community."
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://ossl.dev/projects" />
    <meta
        property="og:image"
        content="https://ossl.dev/og-images/projects.png"
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta
        name="twitter:image"
        content="https://ossl.dev/og-images/projects.png"
    />
</svelte:head>

<section class="page-hero" aria-labelledby="projects-heading">
    <h1 id="projects-heading">Our <span class="accent">projects</span></h1>
    <p class="page-sub">
        Each project tackles a specific problem. No sprawling frameworks. No
        unnecessary abstractions.
    </p>
</section>

<section class="section" aria-labelledby="project-list-heading">
    <h2 id="project-list-heading" class="sr-only">Project list</h2>
    <div class="projects-grid" role="list">
        {#each projects as project}
            <div role="listitem">
                <ProjectCard {...project} />
            </div>
        {/each}
    </div>
</section>

<section
    class="section section-narrow contribute"
    aria-labelledby="contribute-heading"
>
    <h2 id="contribute-heading">Your turn</h2>
    <p>
        All projects welcome contributors. First timers and experienced
        maintainers alike. Find an issue that interests you, start a discussion,
        or propose something new.
    </p>
    <a
        href="https://github.com/ossl-dev"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary"
    >
        Start contributing
    </a>
</section>

<style>
    .page-hero {
        text-align: center;
        padding: 10rem 1.5rem 3rem;
    }

    .page-hero h1 {
        font-family: var(--font-display);
        font-size: clamp(2.25rem, 5vw, 3.25rem);
        font-weight: 500;
        letter-spacing: -0.03em;
        color: var(--text-primary);
        margin-bottom: 0.625rem;
    }

    .accent {
        color: var(--accent);
    }

    .page-sub {
        color: var(--text-secondary);
        font-size: 1.0625rem;
        max-width: 540px;
        margin: 0 auto;
    }

    .section {
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 3rem 1.5rem 0;
    }

    .section-narrow {
        max-width: var(--content-narrow);
        text-align: center;
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }

    .contribute {
        padding-top: var(--section-gap);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
    }

    .contribute h2 {
        font-family: var(--font-display);
        font-size: 1.75rem;
        font-weight: 550;
        letter-spacing: -0.015em;
        color: var(--text-primary);
    }

    .contribute p {
        color: var(--text-secondary);
        font-size: 0.96875rem;
        line-height: 1.6;
        max-width: 480px;
        margin-bottom: 0.5rem;
    }

    .btn-primary {
        display: inline-flex;
        align-items: center;
        gap: 0.375rem;
        padding: 0.5625rem 1.25rem;
        border-radius: var(--radius-sm);
        background: var(--text-primary);
        color: var(--bg-base);
        font-weight: 550;
        font-size: 0.875rem;
        transition: background 0.2s;
    }

    .btn-primary:hover,
    .btn-primary:focus-visible {
        background: #e0d8cf;
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

    @media (max-width: 768px) {
        .projects-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 540px) {
        .projects-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
