<script>
    import Icon from 'svelte-awesome';
    import { faGithub, faDribbble, faCodepen, faTwitter, faYoutube, faDev } from '@fortawesome/free-brands-svg-icons';

    const pageTitle = "home";

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

    $logo-width: 12.5rem;

    .grid-container {
        width: 100%;
        margin: 3rem 0;
        padding: 0;

        display: grid;
        column-gap: 3rem;
        
        grid-template-columns: $logo-width auto;
        grid-template-rows: 1.5fr 0.5fr;
        grid-template-areas:
        'logo title'
        'logo social';

        @media (max-width: $breakpoint-md) {
            row-gap: 3rem;

            grid-template-columns: auto;
            grid-template-rows: auto;
            grid-template-areas:
            'logo'
            'title'
            'social';
        }

        .logo {
            grid-area: logo;
            width: 100%;

            @media (max-width: $breakpoint-md) {
                width: $logo-width;
                margin: 0 auto;
            }
        }

        .title {
            grid-area: title;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            @media (max-width: $breakpoint-md) {
                align-items: center;
            }

            p {
                margin: 0;
                padding: 0;
                font-size: 2.25rem;
                @media (max-width: $breakpoint-md) {
                    font-size: 1.75rem;
                }
            }
            
            h1 {
                margin: 0;
                margin-top: -0.5rem;
                padding: 0;
                font-size: 5rem;
                @media (max-width: $breakpoint-md) {
                    font-size: 4rem;
                }
            }
        }

        .icon-group {
            grid-area: social;
            display: flex;
            flex-direction: row;
            justify-content: left;
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
    <div class="grid-container">
        <img class="logo" src="/images/logo.svg" alt="Banakin Logo" />
        <div class="title">
            <p>Hey, I'm</p>
            <h1>Banakin</h1>
        </div>
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
