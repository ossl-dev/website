<script lang="ts">
    const currentYear: number = new Date().getFullYear();
</script>

<footer>
    <div class="footer-inner">
        <div class="footer-brand">
            <a href="/" class="footer-logo" aria-label="OSS Labs home">
                <img
                    src="/logo.svg"
                    width="24"
                    height="24"
                    alt=""
                    aria-hidden="true"
                />
                <span>OSS Labs</span>
            </a>
            <p class="footer-tagline">
                A community of open source engineers building projects together.
            </p>
        </div>

        <div class="footer-grid">
            <div class="footer-col">
                <h4>Site</h4>
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
                <a href="/about">About</a>
            </div>
            <div class="footer-col">
                <h4>Community</h4>
                <a
                    href="https://github.com/Open-Vanguard"
                    target="_blank"
                    rel="noopener">GitHub</a
                >
                <a href="/llms.txt">llms.txt</a>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <span>&copy; {currentYear} OSS Labs</span>
    </div>
</footer>

<style>
    footer {
        border-top: 1px solid var(--border-subtle);
        background: var(--bg-surface);
        padding: 4rem 1.5rem 2rem;
        margin-top: var(--section-gap);
    }

    .footer-inner {
        max-width: var(--content-width);
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        gap: 3rem;
        flex-wrap: wrap;
    }

    .footer-brand {
        max-width: 260px;
    }

    .footer-logo {
        display: inline-flex;
        align-items: center;
        gap: 0.4375rem;
        font-weight: 500;
        font-size: 0.9375rem;
        margin-bottom: 0.625rem;
    }

    .footer-logo span {
        color: var(--text-primary);
    }

    .footer-tagline {
        color: var(--text-secondary);
        font-size: 0.84375rem;
        line-height: 1.55;
    }

    .footer-grid {
        display: flex;
        gap: 3rem;
    }

    .footer-col {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        min-width: 100px;
    }

    .footer-col h4 {
        font-size: 0.6875rem;
        font-weight: 550;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--text-muted);
        margin-bottom: 0.125rem;
    }

    .footer-col a {
        font-size: 0.84375rem;
        color: var(--text-secondary);
        transition: color 0.15s;
    }

    .footer-col a:hover,
    .footer-col a:focus-visible {
        color: var(--text-primary);
    }

    .footer-bottom {
        max-width: var(--content-width);
        margin: 0 auto;
        padding-top: 1.75rem;
        margin-top: 2.5rem;
        border-top: 1px solid var(--border-subtle);
        font-size: 0.78125rem;
        color: var(--text-muted);
    }

    @media (max-width: 640px) {
        .footer-inner {
            flex-direction: column;
            gap: 2rem;
        }
        .footer-grid {
            gap: 2rem;
        }
    }
</style>
