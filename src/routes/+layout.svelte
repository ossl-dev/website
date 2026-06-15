<script lang="ts">
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <meta name="description" content="OSS Labs is a community of open source engineers building developer tools together." />
</svelte:head>

<a href="#main-content" class="skip-link">Skip to main content</a>
<Nav />
<main id="main-content">{@render children()}</main>
<Footer />
