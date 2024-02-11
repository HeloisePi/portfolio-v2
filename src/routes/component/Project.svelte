<script>
    export let title;
    export let imgSrc;
    export let description;
    export let techno;
    export let projectSrc;
    export let githubSrc;

    let constrain = 100;
    let imgProjectContainer;

  function transforms(x, y, imgProject) {
    let calcX = -(y - imgProject.top - (imgProject.height / 2)) / constrain;
    let calcY = (x - imgProject.left - (imgProject.width / 2)) / constrain;
    return "perspective(150px) " +
        "rotateX(" + calcX + "deg) " +
        "rotateY(" + calcY + "deg) ";
  }

  function transformElement(el, xyEl) {
    let x = xyEl[0];
    let y = xyEl[1];
    let imgProject = xyEl[2];

    el.style.transform = transforms(x, y, imgProject);
  }

  let handleMouseMove = (e) => {
    let xy = [e.clientX, e.clientY];
    let imgProject = imgProjectContainer.getBoundingClientRect();
    let position = xy.concat([imgProject]);

    window.requestAnimationFrame(() => {
      transformElement(imgProjectContainer, position);
    });
  };

  let handleMouseLeave = () => {
    // Réinitialiser la transformation lorsque la souris quitte imgProjectContainer
    console.log('patrique')
    imgProjectContainer.style.transform = "rotateX(0) rotateY(0)";

    
}

  
</script>

<div class="contenaire">
    <div class="titleTag">
        <h4>{title}</h4>
        <div class="tags">
            <slot></slot>
        </div>
    </div>
    <div class="imgDescription">
        <a class="imgProject" href="{projectSrc}" bind:this={imgProjectContainer}  on:mousemove="{handleMouseMove}" on:mouseleave={handleMouseLeave}><img src="{imgSrc}" alt="Project"></a>
        <div class="description">
            <p class="text">{description}</p>
            <div class="technoLink">
                <p>Technologie utilisé : {techno}</p>
                <a class="underline" href="{projectSrc}"><p>Voir le projet > </p></a>
                { #if githubSrc }
                <a class="underline" href="{githubSrc}"><p>Lien vers le Github > </p></a>
                {/if}
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
            }
        }
        .imgDescription{
            display: grid;
            grid-template-columns: 50% 50%;
            padding: 2vw;

            .imgProject:hover{
                 transform: scale(105%);
            }
            .imgProject{
                transition: 500ms;
            }

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