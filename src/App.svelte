<script lang='typescript'>
  // Import components
  import Navbar       from './pages/Navbar.svelte';
  import ScrollToTop  from './pages/ScrollToTop.svelte';

  // Import pages
  import Home      from './pages/Home.svelte';
  import About     from './pages/About.svelte';
  import Projects  from './pages/Projects.svelte';
  import Pricing   from './pages/Pricing.svelte';
  import Contact   from './pages/Contact.svelte';

//   import * as data from './data/About.json';
//   const test = data.languages.TypeScript;
</script>
  
<style lang="scss">
  // Import SCSS
  @import './styles/variables.scss';
</style>
  
<!-- <h1>{test}</h1> -->

<Navbar />
<ScrollToTop />

<Home />
<About />
<Projects />
<Pricing />
<Contact />
