<script>
    export let title;
    export let imgSrc;
    export let description;
    export let techno;
    export let projectSrc;
    export let githubSrc;

//     let constrain = 100;
//     let imgProjectContainer;

//   function transforms(x, y, imgProject) {
//     let calcX = -(y - imgProject.top - (imgProject.height / 2)) / constrain;
//     let calcY = (x - imgProject.left - (imgProject.width / 2)) / constrain;
//     return "perspective(150px) " +
//         "rotateX(" + calcX + "deg) " +
//         "rotateY(" + calcY + "deg) ";
//   }

//   function transformElement(el, xyEl) {
//     let x = xyEl[0];
//     let y = xyEl[1];
//     let imgProject = xyEl[2];

//     el.style.transform = transforms(x, y, imgProject);
//   }

//   let handleMouseMove = (e) => {
//     let xy = [e.clientX, e.clientY];
//     let imgProject = imgProjectContainer.getBoundingClientRect();
//     let position = xy.concat([imgProject]);

//     window.requestAnimationFrame(() => {
//       transformElement(imgProjectContainer, position);
//     });
//   };

//   let handleMouseLeave = () => {
//     // Réinitialiser la transformation lorsque la souris quitte imgProjectContainer
//     imgProjectContainer.style.transform = "rotateX(0) rotateY(0)";

    
// }

  
</script>

<article class="contenaire" appear>
    <div class="titleTag">
        <h4 class="bold">{title}</h4>
        <div class="tags">
            <slot></slot>
        </div>
    </div>
    <div class="imgDescription">
        <a class="imgProject" target="blank" href="{projectSrc}"><img src="{imgSrc}" alt="Project"></a>
        <!--  bind:this={imgProjectContainer}  on:mousemove="{handleMouseMove}" on:mouseleave={handleMouseLeave} -->
        <div class="description">
            <p class="text">{description}</p>
            <div class="technoLink">
                <p class="bold">Technologie utilisé : {techno}</p>
                <a class="underline" href="{projectSrc}"><p>Voir le projet > </p></a>
                { #if githubSrc }
                <a class="underline" target="blank" href="{githubSrc}"><p>Lien vers le Github > </p></a>
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
</style>