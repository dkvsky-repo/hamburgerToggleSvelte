<script>
  // import component here
  import Hamburger from "@components/Hamburger.svelte";
</script>

<main>
  <h1>Hamburger Toggle</h1>
  <!-- place component here -->
  <Hamburger />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  :global(html) {
    background-color: var(--gray-9);
    color: var(--blue-1);
  }

  main {
    display: grid;
    place-items: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    text-align: center;
  }
</style>
