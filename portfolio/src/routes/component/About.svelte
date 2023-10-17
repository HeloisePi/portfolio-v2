<script>
</script>

<div class="about">
    <div class="portrait">
        <h3>Qui suis-je ? </h3>
        <img class="picture" src="images/portrait.png" alt="Protrait">
        <img class="stain3" src="images/stain/stain3.png" alt="Stain">
    </div>
    <div class="description">
        <p>Salut ! Moi c’est Héloïse. <br> 
            Je suis étudiante en But des Métiers du Multimédia et de l'Internet. 
            Et je suis en recherche d’alternance dans le développement web.</p>
        
        <p>J’aime le développement web, le dessin, le violon, l’escalade. On dit de moi
             que je suis sérieuse, curieuse et créative. </p>
        <p>
            Mes outils que j’utilise en programmation : <br>
            Svelte, Astro, Tailwin, Scss
        </p>
    </div>
</div>

<style lang="scss">
    
    .about{
        display: grid;
        grid-template-columns: 40vw 1fr;

        .portrait{


            h3{
                margin-bottom: 1rem;
            }

            .stain3{
                position: absolute;
                transform: translate(-48vw, -4vw);
                width: 70%;
                z-index: -6;
            }
            .picture{
                width: 25vw;
            }
        }

        .description{
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 2rem;
        }
    }

    @media screen and (max-width: 600px) {
        .about {
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr;
            justify-items: center;

            .portrait{
                .picture{
                    width: 15rem;
                }
            }
        }
        

}
</style>