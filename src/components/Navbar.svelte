<script>
    import * as animateScroll from "svelte-scrollto";

    let pageY, pageHeight;

    const pages = [
        ['Home'      , '#home'],
        ['About Me'  , '#about'],
        ['Projects'  , '#projects'],
        ['Pricing'   , '#pricing'],
        ['Contact'   , '#contact'],
    ]
</script>

<svelte:window bind:scrollY={pageY} bind:innerHeight={pageHeight}/>

<style lang="scss">
    @import '../styles/variables';

    .navbar {
        right: 0;
        display: block;
        z-index: 100;
        position: fixed;

        .scroll-indicator {
            width: 100%;
            height: 0.5rem;
            margin: 0;
            padding: 0;

            @media (max-width: $breakpoint-md) {
                display: none;
            }

            span {
                margin: 0;
                padding: 0;
                display: block;
                height: 100%;
                background-image: linear-gradient(90deg, $orange 0%, $purple 100%);;
            }
        }

        .nav-links {
            display: flex;
            flex-direction: row;
            width: 45rem;
            font-size: 24px;
            line-height: 28px;
            align-items: center;
            text-align: center;
            
            @media (max-width: $breakpoint-md) {
                // flex-direction: column;
                display: none;
            }

            div {
                text-align: center;
                padding: 1rem 0;
                flex-grow: 1;
                flex-basis: 0;
            }
        }
    }
</style>

<div class="navbar">
    <div class="scroll-indicator">
        <span
            style="width: {(1/pages.length)*100}%; margin-left: {(pageY/pageHeight)*(100-((1/pages.length)*100))}%;">
        </span>
    </div>
    <div class="nav-links">
        {#each pages as page}
        <div on:click={() => animateScroll.scrollTo({element: page[1]})}>{page[0]}</div>
        {/each}
    </div>
</div>