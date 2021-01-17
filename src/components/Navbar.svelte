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

    $nav-width: 40rem;
    $indicator-height: 0.5rem;
    $link-padding: 1rem;
    $nav-font-size: 1.25rem;

    .navbar {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        z-index: 100;
        position: fixed;
        width: 100%;
        background-color: $black;

        .scroll-indicator {
            width: $nav-width;
            height: $indicator-height;
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
            width: $nav-width;
            font-size: $nav-font-size;
            align-items: center;
            text-align: center;
            
            @media (max-width: $breakpoint-md) {
                // flex-direction: column;
                display: none;
            }

            div {
                text-align: center;
                padding: 0;
                padding-top: $link-padding;
                padding-bottom: $link-padding + $indicator-height;
                flex-grow: 1;
                flex-basis: 0;
                cursor: pointer;
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