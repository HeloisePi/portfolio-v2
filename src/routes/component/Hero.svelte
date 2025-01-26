<script>
    import { onMount } from "svelte";

    onMount(() => {
         if (typeof Blotter !== "undefined") {
        //     // Sélectionner le texte à distordre
        //     const textElement = document.getElementById("distorted-text");
        //     const textContent = textElement.innerText;
        //     const isSmallScreen = window.innerWidth < 580;
        //     const textSize = isSmallScreen ? 24 : 48; // Taille conditionnelle


        //     // Créer un objet Blotter.Text avec le contenu du texte sélectionné
        //     const text = new Blotter.Text("- Dev Fullstack", {
        //         family: "SuisseIntl-Light",
        //         size: textSize,
        //         fill: "#868686",
        //         paddingLeft: 0,
        //         paddingRight: 0
        //     });

        //     const material = new Blotter.SlidingDoorMaterial();
        //     material.uniforms.uSpeed.value = 0.25;

        //     const blotter = new Blotter(material, {
        //         texts: text
        //     });

            // // Remplacer le contenu de l'élément avec l'effet Blotter
            // const scope = blotter.forText(text);
            // scope.appendTo(textElement);

            // Arrêter l'animation après 2 secondes
            // setTimeout(() => {
            //     material.uniforms.uSpeed.value = 0; // Met la vitesse à 0 pour arrêter l'animation
            // }, 2000);

            // Sélectionner les éléments <mark> à observer
            const markers = [...document.querySelectorAll('mark')];

            // Créer un nouvel Intersection Observer
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio > 0) {
                        // Activer l'animation de surlignage
                        entry.target.style.animationPlayState = 'running';
                        observer.unobserve(entry.target); // Ne plus observer une fois surligné
                    }
                });
            }, {
                threshold: 0.8
            });

            // Observer chaque élément <mark>
            markers.forEach(mark => {
                observer.observe(mark);
            });
        } else {
            console.error("Blotter is not defined. Ensure the CDN is properly loaded.");
        }
    });
</script>

<section>
    <div class="titlte">
        <div class="">
            <h1>P</h1>
            <img class="o" src="/images/o.svg" alt="o">
            <h1 class="rtfolio">rtfolio</h1>
        </div>
        <h2 class="hidden-text"> - Dev Fullstack</h2>
        <!--  id="distorted-text" -->
    </div>

    <div class="imgDescp">
        <div class="portrait">
            <img class="portraitImg" src="/images/portrait.webp" alt=" photographie de Héloïse Pingitore">
            <img class="stain" src="/images/stain.png" alt="tache violette">
        </div>

        <div class="description">
            <p>I am a student in a <mark>Bachelor's in Multimedia and Internet Professions</mark>, currently doing a <mark>work-study program at seg2inov</mark>. I am known to be serious, curious, and creative. I am also looking for an apprenticeship starting in September 2025.</p>
        </div>
    </div>
</section>

<style lang="scss">
    @import '../../variables.scss';

    mark {
        --color1: #E8D7FF;
        --color2: #E8D7FF;
        --bg-height: 40%;
        
        all: unset; /* Réinitialiser le style par défaut */
        background-image: linear-gradient(var(--color1), var(--color2));
        background-position: 0 100%;
        background-repeat: no-repeat;
        background-size: 0 var(--bg-height);
        animation: highlight 1000ms ease-out paused; /* Animation initialement en pause */
        animation-fill-mode: forwards; /* Conserve l'état final de l'animation */
        animation-play-state: paused; /* État initial de l'animation */
    }

    @keyframes highlight {
        to {
            background-size: 100% var(--bg-height); /* Étendre le fond surligné */
        }
    }

    .titlte div {
        display: flex;

        .o {
            transform: translate(-6%, 9%);
        }
        .rtfolio {
            transform: translate(-7%, 0%);
        }
    }

    h2 {
        // left: -70px;
         position: absolute;
        // // color: transparent;
        // transform: translate(0rem, -1rem);
        color: #868686;
        transform: translate(8rem, -0.5rem);
    }

    section {
        padding-top: 6rem;
    }

    .portrait {
        position: relative;
        padding-top: 5rem;
        height: 100%;

        .portraitImg {
            z-index: 1;
            position: relative;
        }
        .stain {
            position: absolute;
            top: 0%;
            left: -40%;
            z-index: 0;
            width: 178%;
        }
    }

    .imgDescp {
        display: flex;
        align-items: end;
        gap: 4rem;
    }

    .description p {
        max-width: 464px;
        font-size: 24px;
    }

    @media screen and (max-width: 1110px) {
        section {
            flex-direction: column;
        }

        .portrait {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;

            .portraitImg {
                z-index: 1;
            }

            .stain {
                top: 25%;
                left: -58%;
                width: 100%;
            }
        }
    }
    @media screen and (max-width: 1110px) {
        .imgDescp{
            flex-direction: column;
            align-items: center;
        }
        .portraitImg{
            width: 60%;
        }
        .portrait .stain{
            left: -3%;
        }
    }

    @media screen and (max-width: 580px) {
        .portraitImg{
            width: 40%;
        }

        .portrait .stain{
            left: 15%;
            width: 68%;
        }
        .titlte{
            h1{
                font-size: 14vw;
            }
            .o{
                width: 14vw;
            }

            h2{
                font-size: 5vw;
                transform: translate(4rem, -0.5rem);
            }
        }
    }
</style>
