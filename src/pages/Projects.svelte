
<script>
    import Icon from 'svelte-awesome';
    import { faGithub } from '@fortawesome/free-brands-svg-icons';
    import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

    const pageTitle = "projects";

    const projects = [
        {
            image: "https://via.placeholder.com/317x223",
            name: "Project Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icons: [
                [faExternalLinkAlt, "https://banakin.dev/"],
                [faGithub, "https://github.com/Banakin/Banakin.dev"],
            ]
        },
        {
            image: "https://via.placeholder.com/317x223",
            name: "Project Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icons: [
                [faExternalLinkAlt, "https://banakin.dev/"],
                [faGithub, "https://github.com/Banakin/Banakin.dev"],
            ]
        },
        {
            image: "https://via.placeholder.com/317x223",
            name: "Project Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icons: [
                [faExternalLinkAlt, "https://banakin.dev/"],
                [faGithub, "https://github.com/Banakin/Banakin.dev"],
            ]
        },
        {
            image: "https://via.placeholder.com/317x223",
            name: "Project Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icons: [
                [faExternalLinkAlt, "https://banakin.dev/"],
                [faGithub, "https://github.com/Banakin/Banakin.dev"],
            ]
        },
        {
            image: "https://via.placeholder.com/317x223",
            name: "Project Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icons: [
                [faExternalLinkAlt, "https://banakin.dev/"],
                [faGithub, "https://github.com/Banakin/Banakin.dev"],
            ]
        },
        {
            image: "https://via.placeholder.com/317x223",
            name: "Project Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icons: [
                [faExternalLinkAlt, "https://banakin.dev/"],
                [faGithub, "https://github.com/Banakin/Banakin.dev"],
            ]
        },
    ]

    const iconScale = "3";
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

        .gallery {            
            display: grid;
            
            width: 100%;

            grid-template-rows: auto auto;
            grid-auto-flow: column;
            overflow-x: scroll;
            
            gap: 2rem 2rem;

            @media (max-width: $breakpoint-md) {
                row-gap: 3rem;
                
                width: 100%;

                grid-template-rows: auto;
                grid-auto-flow: row;
                grid-template-areas:
                'image'
                'title'
                'desc'
                'icons';
            }

            .project {
                display: grid;
                grid-template-columns: auto auto;
                grid-template-rows: auto auto auto;
                gap: 10px 20px;

                width: max-content;

                grid-template-areas:
                'image title'
                'image desc'
                'image icons';

                @media (max-width: $breakpoint-md) {
                    row-gap: 3rem;

                    grid-template-columns: auto;
                    grid-template-rows: auto;
                    grid-template-areas:
                    'image'
                    'title'
                    'desc'
                    'icons';
                }

                img {
                    grid-area: image;
                    border-radius: 20px;
                    width: 375px;
                    
                    @media (max-width: $breakpoint-md) {
                        width: 100%;
                    }
                }

                h1 {
                    grid-area: title;

                    font-weight: inherit;
                    font-size: 2rem;
                    font-style: normal;

                    margin: 0;
                    margin-bottom: 0;
                    padding: 0;
                }

                p {
                    grid-area: desc;

                    font-weight: 300;
                    font-size: 1.5rem;
                    font-style: normal;

                    max-width: 20rem;

                    margin: 0;
                    margin-bottom: 0;
                    padding: 0;
                }

                .icon-group {
                    grid-area: icons;
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
        }
    }
</style>


<section id={pageTitle}>
    <h1>Project Gallery</h1>
    <div class="gallery">
        {#each projects as project}
            <div class="project">
                <img src={project.image} alt={project.name} />
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <div class="icon-group">
                    {#each project.icons as icon}
                        <a href={icon[1]}><Icon scale={iconScale} data={icon[0]} /></a>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</section>
