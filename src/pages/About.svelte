<script>
    import ProgressBar from '../components/ProgressBar.svelte';

    import Inview from 'svelte-inview';

    import Icon from 'svelte-awesome';
    import { faGithub, faDribbble, faCodepen, faTwitter, faYoutube, faDev } from '@fortawesome/free-brands-svg-icons';

    const pageTitle = "about";

    const progress = [
        ["HTML & CSS"            , 92],
        ["JavaScript/TypeScript" , 85],
        ["PHP"                   , 30],
        ["Flutter/Dart"          , 76],
        ["Python"                , 65],
        ["C/C++"                 , 35],
    ]

    const links = {
        "github"   : "https://github.com/Banakin",
        "dribbble" : "https://dribbble.com/Banakin",
        "codepen"  : "https://codepen.io/Banakin",
        "twitter"  : "https://twitter.com/Banakin9",
        "youtube"  : "https://youtube.com/c/Banakin",
        "dev"      : "https://dev.to/banakin",
    }

    const iconScale = "3.5";
    let ref;
</script>

<style lang="scss">
    @import '../styles/variables';
    @import '../styles/section';

    section {
        font-weight: 500 !important;
        padding: 0;

        @media (max-width: $breakpoint-md) {
            padding: 2rem 0;
        }
            
        h1 {
            font-weight: inherit;
            font-size: 4rem;
            font-style: normal;

            margin: 0;
            margin-bottom: 1rem;
            padding: 0;
        }

        .page-section {
            width: 100%;
            margin-bottom: 5rem;

            &:last-child {
                margin-bottom: 0;
            }

            p {
                font-size: 1.75rem;
                margin: 0;
                margin-bottom: 1rem;
                padding: 0;
            }

            .grid-container {
                column-count: 2;
                column-gap: 10%;

                @media (max-width: $breakpoint-md) {
                    column-count: 1;
                }
            }
        }

        .icon-group {
            grid-area: social;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
            flex-wrap: wrap;

            @media (max-width: $breakpoint-md) {
                justify-content: center;
            }

            a {
                margin: 0 10px;
            }
        }        
    }
</style>


<section id={pageTitle}>
    <h1>About Me</h1>
    <div class="page-section">
        <p>My confidence with languages</p>
        <Inview
            let:inView
            wrapper={ref}
            unobserveOnEnter={true}>
            <div class="grid-container"
                bind:this={ref}>
                
                {#each progress as bar, i}
                    {#if i < Math.round(progress.length/2)}
                        <ProgressBar completion={bar[1]} color="orange" isInView={inView} label={bar[0]} />
                    {:else}
                        <ProgressBar completion={bar[1]} color="purple" isInView={inView} label={bar[0]} />
                    {/if}
                {/each}

            </div>
        </Inview>
    </div>
    <div class="page-section">
        <p>Tools im familiar with</p>
        <div class="icon-group">
            <a href={links.github}>   <Icon scale={iconScale} data={faGithub} />   </a>
            <a href={links.dribbble}> <Icon scale={iconScale} data={faDribbble} /> </a>
            <a href={links.codepen}>  <Icon scale={iconScale} data={faCodepen} />  </a>
            <a href={links.twitter}>  <Icon scale={iconScale} data={faTwitter} />  </a>
            <a href={links.youtube}>  <Icon scale={iconScale} data={faYoutube} />  </a>
            <a href={links.dev}>      <Icon scale={iconScale} data={faDev} />      </a>
            <a href={links.github}>   <Icon scale={iconScale} data={faGithub} />   </a>
            <a href={links.dribbble}> <Icon scale={iconScale} data={faDribbble} /> </a>
            <a href={links.codepen}>  <Icon scale={iconScale} data={faCodepen} />  </a>
            <a href={links.twitter}>  <Icon scale={iconScale} data={faTwitter} />  </a>
            <a href={links.youtube}>  <Icon scale={iconScale} data={faYoutube} />  </a>
            <a href={links.dev}>      <Icon scale={iconScale} data={faDev} />      </a>
            <a href={links.github}>   <Icon scale={iconScale} data={faGithub} />   </a>
            <a href={links.dribbble}> <Icon scale={iconScale} data={faDribbble} /> </a>
            <a href={links.codepen}>  <Icon scale={iconScale} data={faCodepen} />  </a>
            <a href={links.twitter}>  <Icon scale={iconScale} data={faTwitter} />  </a>
            <a href={links.youtube}>  <Icon scale={iconScale} data={faYoutube} />  </a>
        </div>
    </div>
</section>
