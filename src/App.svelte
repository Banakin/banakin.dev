<script lang='typescript'>
  // Import components
  // import Navbar       from './pages/Navbar.svelte';
  // import ScrollToTop  from './pages/ScrollToTop.svelte';

  // // Import pages
  import Home      from './pages/Home.svelte';
  import About     from './pages/About.svelte';
  // import Projects  from './pages/Projects.svelte';
  // import Pricing   from './pages/Pricing.svelte';
  // import Contact   from './pages/Contact.svelte';

  // import * as data from './data/About.json';
  // const test = data.languages.TypeScript;
  const test = "test";
</script>
  
<style lang="scss" global>
  // Import SCSS
  @import './styles/variables';

  html{
    scroll-snap-type: y proximity;
  }

  body{
    font-family: 'Roboto', sans-serif;
    background-color: $black;
    color: $white;
    margin: 0;
    padding: 0;
  }

  a{
    color: unset;
    text-decoration: none;
  }
</style>

<!-- <Navbar />
<ScrollToTop /> -->

<Home />
<About />

<!-- <Projects />
<Pricing />
<Contact /> -->