<script>
    import { fade } from 'svelte/transition';

    import * as animateScroll from "svelte-scrollto";

    import Icon from 'svelte-awesome';
    import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

    let y;
</script>

<svelte:window bind:scrollY={y}/>

<style lang="scss">
@import '../styles/variables';

div {
    right: 2rem;
    bottom: 2rem;
    height: 3rem;
    width: 3rem;
    display: block;
    z-index: 100;
    border-radius: 100%;
    color: $black;
    background-color: $white;
    position: fixed;
    span{
        width: 100%;
        text-align: center;
        margin: 0;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
}
</style>

{#if (y > 0)}
    <div 
        transition:fade="{{ duration: 200 }}"
        on:click={() => animateScroll.scrollToTop()}>
        <span>
            <Icon scale=2 data={faChevronUp} />
        </span>
    </div>
{/if}