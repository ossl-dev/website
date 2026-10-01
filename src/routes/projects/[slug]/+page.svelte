<script lang="ts">
    import { repoUrls, type Project } from "$lib/projects";

    let { data } = $props();
    const project: Project = $derived(data.project);
    const repo = $derived(repoUrls(project));
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

    <div class="title">
        <h1>{project.name}</h1>
        {#if project.status}
            <span class="status">{project.status}</span>
        {/if}
    </div>

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
        <span class="lang-dot" aria-hidden="true"></span>
        <span>{project.language}</span>
        {#if project.stars > 0}
            <span class="sep" aria-hidden="true">·</span>
            <span>{project.stars} stars</span>
        {/if}
        <span class="sep" aria-hidden="true">·</span>
        <span>{project.repo}</span>
    </p>
</header>

<div class="page-body">
    <section class="block" aria-labelledby="why-heading">
        <h2 id="why-heading">Why it exists</h2>
        <p>{project.why}</p>
    </section>

    <section class="block" aria-labelledby="detail-heading">
        <h2 id="detail-heading">What it does</h2>
        <p>{project.detail}</p>
    </section>
</div>

<style>
    .page-head {
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 7rem 1.5rem 3.5rem;
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

    /* name and status share a baseline so the chip sits on the display type,
       not floating in the middle of it */
    .title {
        display: flex;
        align-items: baseline;
        gap: 1rem;
        flex-wrap: wrap;
        margin-bottom: 1.125rem;
    }

    h1 {
        font-family: var(--font-display);
        font-size: clamp(2.75rem, 6vw, 4.25rem);
        font-weight: 500;
        letter-spacing: -0.03em;
        line-height: 1.05;
        color: var(--text-primary);
    }

    .status {
        font-size: 0.75rem;
        line-height: 1;
        letter-spacing: 0.01em;
        padding: 0.3125rem 0.6875rem;
        border-radius: 100px;
        color: var(--accent);
        background: var(--accent-soft);
        border: 1px solid rgba(212, 165, 116, 0.28);
        white-space: nowrap;
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

    /* one hairline per block, prose held to a readable measure */
    .page-body {
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 0 1.5rem var(--section-gap);
    }

    .block {
        max-width: 68ch;
        border-top: 1px solid var(--border-subtle);
        padding-top: 2rem;
    }

    .block + .block {
        margin-top: 3.5rem;
    }

    .block h2 {
        font-family: var(--font-display);
        font-size: 1.25rem;
        font-weight: 550;
        letter-spacing: -0.01em;
        color: var(--text-primary);
        margin-bottom: 0.875rem;
    }

    .block p {
        font-size: 1rem;
        line-height: 1.75;
        color: var(--text-secondary);
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

    @media (max-width: 640px) {
        .page-head {
            padding-top: 5.5rem;
        }
    }
</style>
