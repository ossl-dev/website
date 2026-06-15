<script lang="ts">
    let scrolled = $state(false);

    $effect(() => {
        const onScroll = () => {
            scrolled = window.scrollY > 20;
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    });
</script>

<header class:scrolled>
    <div class="nav-inner">
        <a href="/" class="logo" aria-label="OSS Labs home">
            <img
                src="/logo.svg"
                width="32"
                height="32"
                alt=""
                aria-hidden="true"
                class="logo-mark"
                fetchpriority="high"
            />
            <span class="logo-text">OSS Labs</span>
        </a>

        <nav class="nav-links" aria-label="Main navigation">
            <a href="/projects">Projects</a>
            <a href="/about">About</a>
        </nav>

        <div class="nav-actions">
            <a
                href="https://github.com/ossl-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OSS Labs on GitHub"
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    ><path
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                    /></svg
                >
            </a>
        </div>
    </div>
</header>

<style>
    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        padding: 0 1.5rem;
        transition:
            background 0.35s ease,
            border-color 0.35s ease;
    }

    header.scrolled {
        background: rgba(11, 8, 6, 0.85);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border-bottom: 1px solid var(--border-subtle);
    }

    .nav-inner {
        max-width: var(--content-width);
        margin: 0 auto;
        display: flex;
        align-items: center;
        height: 72px;
        gap: 2rem;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 0.625rem;
        font-weight: 550;
        font-size: 1.125rem;
        letter-spacing: -0.015em;
        color: var(--text-primary);
        flex-shrink: 0;
    }

    .logo-mark {
        flex-shrink: 0;
    }

    .nav-links {
        display: flex;
        gap: 0.25rem;
        margin-left: auto;
    }

    .nav-links a {
        padding: 0.4375rem 0.875rem;
        border-radius: var(--radius-sm);
        font-size: 0.90625rem;
        font-weight: 450;
        color: var(--text-secondary);
        transition: color 0.2s;
    }

    .nav-links a:hover,
    .nav-links a:focus-visible {
        color: var(--text-primary);
    }

    .nav-actions {
        display: flex;
        align-items: center;
        color: var(--text-secondary);
    }

    .nav-actions a {
        display: flex;
        transition: color 0.2s;
    }

    .nav-actions a:hover,
    .nav-actions a:focus-visible {
        color: var(--text-primary);
    }

    @media (max-width: 480px) {
        .logo-text {
            display: none;
        }
        .nav-inner {
            height: 60px;
            gap: 1rem;
        }
        header {
            padding: 0 1rem;
        }
    }
</style>
