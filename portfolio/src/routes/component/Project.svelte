<script>
    export let title;
    export let imgSrc;
    export let description;
    export let techno;
    export let projectSrc;
    export let githubSrc;

</script>

<div class="contenaire">
    <div class="titleTag">
        <h4>{title}</h4>
        <div class="tags">
            <slot></slot>
        </div>
    </div>
    <div class="imgDescription">
        <img src="{imgSrc}" alt="Project">
        <div class="description">
            <p class="text">{description}</p>
            <div class="technoLink">
                <p>Technologie utilisé : {techno}</p>
                <a href="{projectSrc}"><p>Voir le projet > </p></a>
                <a href="{githubSrc}"><p>lien vers le Github > </p></a>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .contenaire{
        border: 1px solid black;
        border-radius: 10px;
        background: linear-gradient(180deg, rgba(238,255,215,0.6769301470588236) 0%, rgba(0,0,0,0) 100%);

        .titleTag{
            padding-left: 2vw;
            padding-right: 2vw;
            border-bottom: 1px solid black;
            height: 3rem;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .tags{
                display: flex;
                gap: 1rem;
            }
        }
        .imgDescription{
            display: grid;
            grid-template-columns: 50% 50%;
            padding: 2vw;

            img{
                border: 1px solid black;
                width: 37vw;
            }

            .description{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 99%;
                width: 100%;
                .text{
                    margin-bottom: 1rem;
                }
            }
            .technoLink{
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }

        }
    }

    @media screen and (max-width: 650px) {  
        .contenaire .imgDescription {
            grid-template-columns: 1fr;
            grid-template-rows: 1/5fr 1fr;
            justify-items: center;

            img{
                width: 80%;
            }
        }
    }
</style>