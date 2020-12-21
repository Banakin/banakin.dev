<script>
    import ProgressBar from '../components/ProgressBar.svelte';

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

    const iconScale = "3.5"
</script>

<style lang="scss">
    @import '../styles/variables';
    @import '../styles/section';

    section {
        font-weight: 600;

        div {
            width: 100%;
            
            &.grid-container {
                column-count: 2;
                column-gap: 10%;

                @media (max-width: $breakpoint-md) {
                    column-count: 1;
                }
            }
        }
    }
</style>


<section id={pageTitle}>
    <h1>About Me</h1>
    <div>
        <p>My confidence with languages</p>
        <div class="grid-container">
            {#each progress as bar, i}
                {#if i < Math.round(progress.length/2)}
                    <ProgressBar completion={bar[1]} color="orange" label={bar[0]} />
                {:else}
                    <ProgressBar completion={bar[1]} color="purple" label={bar[0]} />
                {/if}
            {/each}
        </div>
    </div>
    <div>
        <p>Tools im familiar with</p>
        <div class="icon-group">
            <a href={links.github}>   <Icon scale={iconScale} data={faGithub} />   </a>
            <a href={links.dribbble}> <Icon scale={iconScale} data={faDribbble} /> </a>
            <a href={links.codepen}>  <Icon scale={iconScale} data={faCodepen} />  </a>
            <a href={links.twitter}>  <Icon scale={iconScale} data={faTwitter} />  </a>
            <a href={links.youtube}>  <Icon scale={iconScale} data={faYoutube} />  </a>
            <a href={links.dev}>      <Icon scale={iconScale} data={faDev} />      </a>
        </div>
    </div>
</section>
