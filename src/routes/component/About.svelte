<script>
</script>

<div class="about">
    <div class="portrait">
        <h3>Qui suis-je ? </h3>
        <img class="picture" src="images/portrait.webp" alt="Protrait">
        <div class="rotateStain">
            <img class="stain3" src="images/stain/stain3.webp" alt="Stain">
        </div>
    </div>
    <div class="description">
        <p>Salut ! Moi, c’est Héloïse. <br> 
            Je suis étudiante en But des Métiers du Multimédia et de l'Internet. 
            Et je suis à la recherche d'une alternance dans le développement web.</p>
        
        <p>J’aime le dessin, le violon, l’escalade. On dit de moi
             que je suis sérieuse, curieuse et créative. </p>
        <p>
            Les outils que j’utilise en programmation : <br>
            Svelte, React, Astro, Tailwind, Scss
        </p>
    </div>
</div>

<style lang="scss">
    
    .about{
        display: grid;
        grid-template-columns: 40vw 1fr;
        align-items: center;

        .picture{

            width: 20vw;
        }
        h3{
                margin-bottom: 1rem;
            }
            .portrait{
            .rotateStain{
                position: absolute;
                transform: translate(-13vw, -35vw);
                width: 55%;
                z-index: -6;



                .stain3{
                    width: 50vw;
                    animation: scroll 15s  infinite;

                }
                @keyframes scroll {
                    0% {
                    transform: rotate(0deg);
                    }
                    100% {
                    transform: rotate(360deg);
                    }

                }
            }

        @media screen and (max-width: 1360px) {
            .rotateStain{
                transform: translate(-15vw, -35vw);
        }
    }
    @media screen and (max-width: 1240px) {
            .rotateStain{
                transform: translate(-15vw, -40vw);
                .stain3{
                width: 60vw;
            }
        }
    }
        .description{
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 2rem;
        }
    }
}
@media screen and (max-width: 660px) {
        .about {
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr;
            justify-items: center;
        }
        .rotateStain{
                z-index: -1;
                transform: translate(-20vw, -40vw);
                .stain3{
                     width: 68vw;
            }
        }
        .portrait{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
        }
        
    }

    @media screen and (max-width: 900px) {
        .portrait .picture{
            width: 25vw;
        }

    }
    .portrait .rotateStain{
                .stain3{
                    width: 25vw;

                }
            }
</style>