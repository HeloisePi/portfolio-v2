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
        <p>Hi there! I'm Héloïse.
             <br> I am a student in the Bachelor's in Multimedia and Internet Professions.
             <span class="">I am currently doing a work-study program at seg2inov.</span></p>
             <p>I enjoy drawing, playing the violin, and kick boxing. I am known to be serious, curious, and creative.</p>
              <p>The tools I use in programming: <br> Svelte, React, Astro, Tailwind, Scss, Ruby on Rails</p>
               <p>I am also looking for a work-study program starting in September 2025.</p>
    </div>
</div>

<style lang="scss">

    @import '../styles.css';
    
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