<script lang="ts">
    import ProjectCard from "$lib/components/ProjectCard.svelte";

    const projects = [
        {
            name: "genesis",
            description:
                "Reproducible dev environments defined as code. One command to provision the exact same toolchain, SDKs, and config across any machine.",
            language: "TypeScript",
            stars: 1,
            url: "https://github.com/ossl-dev/genesis",
            topics: ["developer-tools", "devops", "dx"],
        },
        {
            name: "zinc",
            description:
                "Cross-language shared memory in Rust. Zero-copy data sharing between processes with bindings for C, Python, Node, and Go.",
            language: "Rust",
            stars: 62,
            url: "https://zinc.ossl.dev",
            topics: ["memory", "systems", "cross-language"],
        },
        {
            name: "pylon",
            description:
                "API versioning that does not require restructuring your codebase. Works with Express, Fastify, Hono, and anything shaped like middleware.",
            language: "TypeScript",
            stars: 0,
            url: "https://github.com/ossl-dev/pylon",
            topics: ["api", "versioning", "backend"],
        },
        {
            name: "differens",
            description:
                "A diff engine that tells you what actually happened to your code — moved, renamed, extracted, reformatted — instead of which lines changed. Algorithm-first, AI-optional.",
            language: "TypeScript",
            stars: 0,
            url: "https://github.com/ossl-dev/differens",
            topics: ["diff", "analysis", "developer-tools"],
        },
    ];
</script>

<svelte:head>
    <title>OSS Labs - Open Source Engineering Community</title>
    <meta
        name="description"
        content="A community of open source engineers building developer tools together."
    />
    <meta
        property="og:title"
        content="OSS Labs - Open Source Engineering Community"
    />
    <meta
        property="og:description"
        content="A community of open source engineers building developer tools together."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://ossl.dev" />
    <meta property="og:site_name" content="OSS Labs" />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
        name="twitter:title"
        content="OSS Labs - Open Source Engineering Community"
    />
    <meta
        name="twitter:description"
        content="A community of open source engineers building developer tools together."
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://ossl.dev" />
    <meta property="og:image" content="https://ossl.dev/og-images/home.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content="https://ossl.dev/og-images/home.png" />
    <script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'OSS Labs',
      url: 'https://ossl.dev',
      description: 'A community of open source engineers building developer tools together.',
      sameAs: ['https://github.com/ossl-dev'],
    })}
    </script>
</svelte:head>

<section class="hero" aria-labelledby="hero-heading">
    <div class="hero-content">
        <h1 id="hero-heading">
            We build developer tools
            <span class="accent">in the open</span>.
        </h1>
        <p class="hero-desc">
            A community of open source engineers building projects together. We
            focus on problems we understand deeply.
        </p>
        <div class="hero-actions">
            <a href="/projects" class="btn-primary">See our work</a>
            <a href="/about" class="btn-ghost">About the community</a>
        </div>
    </div>
</section>

<section class="section" aria-labelledby="projects-heading">
    <div class="section-header">
        <p class="section-label">What we build</p>
        <h2 id="projects-heading">Featured projects</h2>
    </div>
    <div class="projects-grid" role="list">
        {#each projects as project}
            <div role="listitem">
                <ProjectCard {...project} />
            </div>
        {/each}
    </div>
    <div class="section-cta">
        <a href="/projects" class="link-arrow">All projects</a>
    </div>
</section>

<section class="section" aria-labelledby="values-heading">
    <h2 id="values-heading" class="sr-only">How we work</h2>
    <div class="values-row">
        <div class="value">
            <span class="value-number" aria-hidden="true">01</span>
            <h3>Correct first, fast later</h3>
            <p>
                We prefer getting the API right over shipping quickly. Breaking
                changes are expensive. We take the time to think through edge
                cases before cutting a release.
            </p>
        </div>
        <div class="value">
            <span class="value-number" aria-hidden="true">02</span>
            <h3>Small surface area</h3>
            <p>
                Each project solves one problem well. We resist feature creep
                and scope expansion. A small, focused library beats a sprawling
                framework every time.
            </p>
        </div>
        <div class="value">
            <span class="value-number" aria-hidden="true">03</span>
            <h3>Contribution drives ownership</h3>
            <p>
                Write good code, review PRs thoughtfully, help triage issues. Do
                that consistently and you earn maintainer access. No
                gatekeeping, no politics.
            </p>
        </div>
    </div>
</section>

<section class="section section-narrow" aria-labelledby="cta-heading">
    <div class="cta-card">
        <h2 id="cta-heading">Come build with us</h2>
        <p>
            Star the projects that interest you. Open an issue. Submit a PR.
            Every contribution moves the community forward.
        </p>
        <a
            href="https://github.com/ossl-dev"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary"
        >
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                ><path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                /></svg
            >
            Join us on GitHub
        </a>
    </div>
</section>

<style>
    .hero {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 6rem 1.5rem 4rem;
    }

    .hero-content {
        max-width: 680px;
        text-align: center;
    }

    .hero h1 {
        font-family: var(--font-display);
        font-size: clamp(2.5rem, 5.5vw, 4rem);
        font-weight: 500;
        line-height: 1.12;
        letter-spacing: -0.025em;
        margin-bottom: 1.25rem;
        color: var(--text-primary);
    }

    .accent {
        color: var(--accent);
    }

    .hero-desc {
        font-size: 1.125rem;
        color: var(--text-secondary);
        line-height: 1.65;
        max-width: 520px;
        margin: 0 auto 1.75rem;
    }

    .hero-actions {
        display: flex;
        gap: 1.25rem;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
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
        font-family: var(--font-body);
        transition: background 0.2s;
        border: none;
        cursor: pointer;
    }

    .btn-primary:hover,
    .btn-primary:focus-visible {
        background: #e0d8cf;
    }

    .btn-ghost {
        display: inline-flex;
        align-items: center;
        color: var(--text-secondary);
        font-weight: 500;
        font-size: 0.875rem;
        transition: color 0.2s;
    }

    .btn-ghost:hover,
    .btn-ghost:focus-visible {
        color: var(--text-primary);
    }

    .section {
        max-width: var(--content-width);
        margin: 0 auto;
        padding: var(--section-gap) 1rem 0;
    }

    .section-narrow {
        max-width: var(--content-narrow);
    }

    .section-header {
        margin-bottom: 2.5rem;
    }

    .section-label {
        font-family: var(--font-mono);
        font-size: 0.71875rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--text-muted);
        margin-bottom: 0.375rem;
    }

    .section-header h2 {
        font-family: var(--font-display);
        font-size: 2rem;
        font-weight: 550;
        letter-spacing: -0.02em;
        color: var(--text-primary);
    }

    .section-cta {
        margin-top: 2rem;
        text-align: center;
    }

    .link-arrow {
        color: var(--accent);
        font-weight: 500;
        font-size: 0.875rem;
        transition: opacity 0.2s;
    }

    .link-arrow:hover,
    .link-arrow:focus-visible {
        opacity: 0.75;
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }

    .values-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 2rem;
    }

    .value-number {
        font-family: var(--font-mono);
        font-size: 0.71875rem;
        color: var(--accent);
        opacity: 0.7;
        display: block;
        margin-bottom: 0.5rem;
    }

    .value h3 {
        font-family: var(--font-display);
        font-size: 1.25rem;
        font-weight: 550;
        letter-spacing: -0.01em;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
    }

    .value p {
        font-size: 0.90625rem;
        color: var(--text-secondary);
        line-height: 1.6;
    }

    .cta-card {
        text-align: center;
        padding: 3rem 2rem;
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-lg);
        background: var(--bg-surface);
    }

    .cta-card h2 {
        font-family: var(--font-display);
        font-size: 1.75rem;
        font-weight: 550;
        letter-spacing: -0.015em;
        color: var(--text-primary);
        margin-bottom: 0.625rem;
    }

    .cta-card p {
        color: var(--text-secondary);
        max-width: 480px;
        margin: 0 auto 1.25rem;
        font-size: 0.9375rem;
        line-height: 1.6;
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
    @media (max-width: 640px) {
        .hero h1 {
            font-size: clamp(2rem, 8vw, 3rem);
        }
        .hero-desc {
            font-size: 1rem;
        }
        .values-row {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
        .projects-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
