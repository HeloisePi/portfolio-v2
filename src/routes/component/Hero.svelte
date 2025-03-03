<script>
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
            <img class="stain" src="/images/stain.webp" alt="tache violette">
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
        padding-top: 10vh;
        height: 100%;

        .portraitImg {
            z-index: 1;
            position: relative;
            height: 50vh;
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
                height: auto;
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
