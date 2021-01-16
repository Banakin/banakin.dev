<script>
    import * as animateScroll from "svelte-scrollto";

    import Icon from 'svelte-awesome';
    import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

    let y;
</script>

<svelte:window bind:scrollY={y}/>

<style lang="scss">

</style>

<div on:click={() => animateScroll.scrollToTop()}><Icon scale=2.5 data={faChevronUp} /></div>