<script lang="ts">
  interface Props {
    name: string;
    description: string;
    language: string;
    stars: number;
    url: string;
    topics?: string[];
  }

  let { name, description, language, stars, url, topics = [] }: Props = $props();

  const langColors: Record<string, string> = {
    TypeScript: '#3178c6',
    Rust: '#dea584',
    JavaScript: '#f7df1e',
    Python: '#3572A5',
    Go: '#00ADD8',
    Zig: '#f7a41d',
  };
</script>

<a href={url} target="_blank" rel="noopener noreferrer" class="card">
  <div class="card-top">
    <h3>{name}</h3>
    {#if stars > 0}
      <span class="stars" aria-label="{stars} stars on GitHub">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        {stars}
      </span>
    {/if}
  </div>
  <p>{description}</p>
  <div class="card-meta">
    <span class="lang">
      <span class="lang-dot" style="background-color: {langColors[language] || '#8b8b8b'}" aria-hidden="true"></span>
      {language}
    </span>
    {#if topics.length > 0}
      <span class="topics">
        {#each topics.slice(0, 3) as topic}
          <span class="topic">{topic}</span>
        {/each}
      </span>
    {/if}
  </div>
</a>

<style>
  .card {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 0.625rem;
    padding: 1.5rem;
    background: var(--bg-elevated);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-lg);
    transition: border-color 0.25s, background 0.25s;
  }

  .card:hover,
  .card:focus-visible {
    border-color: var(--border-default);
    background: var(--bg-highlight);
  }

  .card-top {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
  }

  .card h3 {
    font-family: var(--font-mono);
    font-size: 0.9375rem;
    font-weight: 550;
    letter-spacing: -0.01em;
    color: var(--text-primary);
  }

  .stars {
    margin-left: auto;
    display: inline-flex;
    align-items: center;
    gap: 0.2rem;
    font-family: var(--font-mono);
    font-size: 0.78125rem;
    color: var(--text-secondary);
    flex-shrink: 0;
  }

  .stars svg {
    color: var(--accent);
    opacity: 0.8;
  }

  .card p {
    font-size: 0.875rem;
    color: var(--text-secondary);
    line-height: 1.55;
    flex: 1;
  }

  .card-meta {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    flex-wrap: wrap;
  }

  .lang {
    display: inline-flex;
    align-items: center;
    gap: 0.3125rem;
    font-size: 0.71875rem;
    color: var(--text-muted);
    font-family: var(--font-mono);
  }

  .lang-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    display: inline-block;
  }

  .topics {
    display: flex;
    gap: 0.3125rem;
    flex-wrap: wrap;
  }

  .topic {
    font-size: 0.65625rem;
    padding: 0.09375rem 0.4375rem;
    border-radius: 100px;
    background: rgba(245, 240, 235, 0.08);
    color: var(--text-secondary);
    font-family: var(--font-mono);
  }
</style>
