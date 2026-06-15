<svelte:head>
    <title>About - OSS Labs</title>
    <meta
        name="description"
        content="Learn about OSS Labs, a community of open source engineers. How we work, what we believe, and how to get involved."
    />
    <meta property="og:title" content="About - OSS Labs" />
    <meta
        property="og:description"
        content="Learn about OSS Labs, a community of open source engineers. How we work and how to get involved."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://ossl.dev/about" />
    <meta property="og:site_name" content="OSS Labs" />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="About - OSS Labs" />
    <meta
        name="twitter:description"
        content="Learn about OSS Labs, a community of open source engineers."
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://ossl.dev/about" />
    <meta property="og:image" content="https://ossl.dev/og-images/about.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content="https://ossl.dev/og-images/about.png" />
</svelte:head>

<section class="page-hero" aria-labelledby="about-heading">
    <h1 id="about-heading">About <span class="accent">OSS Labs</span></h1>
</section>

<section class="section section-narrow">
    <div class="prose">
        <p class="lead">
            We are a small group of engineers who build and maintain open source
            developer tools. No investors, no growth targets, no enterprise
            sales pipeline. Just good work, done carefully, in public.
        </p>
        <p>
            Each project starts from a real problem we encountered while
            building software. We keep scope tight, review code thoroughly, and
            bring on contributors who demonstrate good judgment. If that sounds
            like how you like to work, come take a look at the repos.
        </p>
    </div>
</section>

<section class="section" aria-labelledby="principles-heading">
    <h2 id="principles-heading" class="sr-only">How we work</h2>
    <div class="principles">
        <div class="principle">
            <h3>Solve real problems</h3>
            <p>
                Every project here exists because someone needed it badly enough
                to build it. We do not chase trends or rewrite things because a
                new framework dropped.
            </p>
        </div>
        <div class="principle">
            <h3>Small is a feature</h3>
            <p>
                We prefer libraries that do one thing well over frameworks that
                do everything adequately. Less code means fewer bugs, faster
                reviews, and simpler upgrades.
            </p>
        </div>
        <div class="principle">
            <h3>Review is where the work happens</h3>
            <p>
                The best code comes from patient, thorough review. We treat PR
                feedback as collaboration, not criticism. Good reviewers are as
                valuable as good authors.
            </p>
        </div>
        <div class="principle">
            <h3>Earn the keys</h3>
            <p>
                Write code, review PRs, help with issues. Do that consistently
                and thoughtfully, and you get commit access. No hiring
                committee, no politics.
            </p>
        </div>
    </div>
</section>

<section class="section section-narrow" aria-labelledby="join-heading">
    <div class="cta">
        <h2 id="join-heading">Join us</h2>
        <p>
            Star the repos, open an issue, submit a PR. Good contributions get
            noticed, and good contributors get commit access.
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
            Contribute on GitHub
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
    }

    .accent {
        color: var(--accent);
    }

    .section {
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 3rem 1.5rem 0;
    }

    .section-narrow {
        max-width: var(--content-narrow);
    }

    .prose .lead {
        font-family: var(--font-display);
        font-size: 1.25rem;
        line-height: 1.55;
        color: var(--text-primary);
        font-weight: 450;
        font-style: italic;
        margin-bottom: 1.5rem;
    }

    .prose p {
        color: var(--text-secondary);
        font-size: 1rem;
        line-height: 1.7;
        margin-bottom: 1rem;
    }

    .principles {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 1.25rem;
        padding-top: var(--section-gap);
    }

    .principle {
        padding: 1.5rem;
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-lg);
        background: var(--bg-elevated);
    }

    .principle h3 {
        font-family: var(--font-display);
        font-size: 1.125rem;
        font-weight: 550;
        letter-spacing: -0.01em;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
    }

    .principle p {
        color: var(--text-secondary);
        font-size: 0.84375rem;
        line-height: 1.55;
    }

    .cta {
        text-align: center;
        padding: 3rem 2rem;
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-lg);
        background: var(--bg-surface);
        margin-top: var(--section-gap);
    }

    .cta h2 {
        font-family: var(--font-display);
        font-size: 1.75rem;
        font-weight: 550;
        letter-spacing: -0.015em;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
    }

    .cta p {
        color: var(--text-secondary);
        max-width: 480px;
        margin: 0 auto 1.25rem;
        line-height: 1.6;
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
</style>
