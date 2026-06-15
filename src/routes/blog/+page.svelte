<svelte:head>
    <title>Blog - OSS Labs</title>
    <meta
        name="description"
        content="Technical deep dives, project updates, and reflections from the OSS Labs community. Writing about building open source developer tools."
    />
    <meta property="og:title" content="Blog - OSS Labs" />
    <meta
        property="og:description"
        content="Technical deep dives, project updates, and reflections from the OSS Labs community."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://ossl.dev/blog" />
    <meta property="og:site_name" content="OSS Labs" />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Blog - OSS Labs" />
    <meta
        name="twitter:description"
        content="Technical deep dives, project updates, and reflections from the OSS Labs community."
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://ossl.dev/blog" />
</svelte:head>

<section class="page-hero" aria-labelledby="blog-heading">
    <h1 id="blog-heading" class="animate-in">Writing</h1>
    <p class="page-sub animate-in stagger-1">
        Deep dives, project updates, and reflections on building open source
        infrastructure.
    </p>
</section>

<section class="section section-narrow">
    <div class="placeholder animate-in stagger-2">
        <p class="placeholder-mark" aria-hidden="true">*</p>
        <h2>Coming soon</h2>
        <p>
            We are gathering our thoughts. Expect technical deep dives, project
            retrospectives, and honest reflections on what it means to build
            software in the open.
        </p>
        <a
            href="https://github.com/ossl-dev"
            target="_blank"
            rel="noopener noreferrer"
            class="link-arrow"
        >
            Follow along on GitHub
        </a>
    </div>
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

    .page-sub {
        color: var(--text-secondary);
        font-size: 1.0625rem;
        max-width: 520px;
        margin: 0 auto;
    }

    .section {
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 3rem 1.5rem 0;
    }

    .section-narrow {
        max-width: var(--content-narrow);
    }

    .placeholder {
        text-align: center;
        padding: 4rem 2rem;
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-lg);
        background: var(--bg-surface);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.625rem;
    }

    .placeholder-mark {
        font-family: var(--font-display);
        font-size: 2.5rem;
        color: var(--accent);
        opacity: 0.45;
        margin-bottom: 0.25rem;
    }

    .placeholder h2 {
        font-family: var(--font-display);
        font-size: 1.5rem;
        font-weight: 550;
        color: var(--text-primary);
    }

    .placeholder p {
        color: var(--text-secondary);
        max-width: 460px;
        line-height: 1.6;
        margin-bottom: 0.5rem;
        font-size: 0.9375rem;
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

    @media (prefers-reduced-motion: reduce) {
        .animate-in {
            animation: none;
            opacity: 1;
        }
    }
</style>
