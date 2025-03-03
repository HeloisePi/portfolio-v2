<script>
    import { onMount } from 'svelte';
    import Swiper from 'swiper';
    import 'swiper/css';
    import Tag from './Tag.svelte';


    export let title;

    export let istagFrontend = false;
    export let istagBackend = false;
    export let istagPrototype = false;
    export let istaguserTest  = false;

    export let description;
    export let techno;
    export let projectSrc;
    export let githubSrc  = false;

    let swiper;

    onMount(() => {
        swiper = new Swiper(".mySwiper", {
            effect: "cards",
            grabCursor: true,
        });
    });
</script>

<article class="contenaire" appear>
    <div class="titleTag">
        <h4 class="bold">{title}</h4>
        <div class="tags ">
            { #if istagBackend }
                <Tag color = #3300FF text="Backend " ></Tag>
            {/if}
            { #if istagFrontend }
                <Tag color = #FF6BEB text="Frontend" ></Tag>
            {/if}
            { #if istagPrototype }
                <Tag color = #B8FF6B text="Prototype " ></Tag>
            {/if}
            { #if istaguserTest }
                <Tag color = #FDFF6B text="User Test " ></Tag>
            {/if}
        </div>
    </div>
    <div class="imgDescription">
        <div class="contenaireswiperText">
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                <slot></slot>
                </div>
            </div>
            <p class="testSwiper">  Swipe right to see more > </p>
        </div>
        <div class="description">
            <p class="text">{description}</p>
            <div class="technoLink">
                <p class="bold">Technologies used: {techno}</p>
                <a class="underline" href="{projectSrc}"><p>See the project > </p></a>
                { #if githubSrc }
                <a class="underline" target="blank" href="{githubSrc}"><p>Link to Github > </p></a>
                {/if}
            </div>
        </div>
    </div>
</article>


<style lang="scss">

    @import '../styles.css';
    
    .contenaire{
        border: 1px solid black;
        border-radius: 10px;
        background: linear-gradient(180deg, rgba(219, 255, 215, 0.052) 0%, rgba(252, 252, 252, 0.065) 100%);
        transition: opacity 0.7s ease-in-out ;

        .titleTag{
            padding-left: 2vw;
            padding-right: 2vw;
            padding-top: 1rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid black;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .tags{
                display: flex;
                gap: 1rem;
                flex-wrap: wrap;
                justify-content: end;
                flex-direction: row;
                flex-wrap: nowrap;
            }
        }
        .imgDescription{
            display: grid;
            grid-template-columns: 50% 50%;
            padding: 2vw;

            // .imgProject:hover{
            //      transform: scale(105%);
            // }
            .imgProject{
                transition: 500ms;
            }

            img{
                border: 1px solid black;
                width: 37vw;
                border-radius: 5px;
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
    a{
        color: #3300FF;
    }
    .underline, a{
        &::after{
            border-bottom: #3300FF 1px solid;
        }
    }


    @media screen and (max-width: 1300px) {  
        .contenaire .imgDescription {
            grid-template-columns: 1fr;
            grid-template-rows: 1/5fr 1fr;
            justify-items: center;

            img{
                width: 20rem;
                margin-bottom: 2rem;
                margin-top: 1rem;
            }
        }

    }
    @media screen and (max-width: 460px) {  
        .contenaire .imgDescription img{
             width: 74vw; 
        }
    }

    .contenaireswiperText{
        width: fit-content;
        height: fit-content;
    }



    .swiper {
      width: 100%;
      max-width: 1007.18px;
      height: 651.65px;
  }

  .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .swiper .swiper-slide img {
    width: 100% !important;
    object-fit: fill;
    height: auto;

  }

  .testSwiper{
    width: 100%;
    text-align: end;
    margin-bottom: Orem;
  }

  @media screen and (max-width: 2058px) {  
            .swiper, .swiper-slide img {
            max-width: 750px;
            height: 500px;

        }
    }
    @media screen and (max-width: 1903px) {  
            .swiper {
            max-width: 700px;

        }
    }
    @media screen and (max-width: 1903px) {  
            .swiper {
            max-width: 650px;

        }
    }

    @media screen and (max-width: 1649px) {  
            .swiper {
            max-width: 600px;

        }
    }
    @media screen and (max-width: 1530px) {  
            .swiper {
            max-width: 550px;

        }
    }

    @media screen and (max-width: 1431px) {  
            .swiper {
            max-width: 500px;

        }
    }

    @media screen and (max-width: 1300px) {  
            .swiper {
            max-width: 700px;

        }
        .testSwiper{
        margin-bottom: 2rem;
        }
    }

    @media screen and (max-width: 874px) {  
            .swiper {
            max-width: 600px;

        }
    }
    @media screen and (max-width: 774px) {  
            .swiper {
            max-width: 500px;
            height: 350px;

        }
    }
    @media screen and (max-width: 625px) {  
            .swiper {
            max-width: 400px;
            height: 250px;

        }
    }
    @media screen and (max-width: 500px) {  
            .swiper {
            max-width: 350px;

        }
    }
    @media screen and (max-width: 440px) {  
            .swiper {
            max-width: 300px;
            height: 200px;

        }
    }
    @media screen and (max-width: 380px) {  
            .swiper {
            max-width: 250px;
            height: 100px;

        }
    }
    @media screen and (max-width: 320px) {  
            .swiper {
            max-width: 200px;

        }
    }
    @media screen and (max-width: 260px) {  
            .swiper {
            max-width: 150px;

        }
    }
    

</style>