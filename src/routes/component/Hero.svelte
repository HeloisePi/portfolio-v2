<script>
</script>
<section>
    <div class="title">
        <div class="portfolio">
            <h1 class="p">P</h1>
            <img class="o" src="images/o.svg" alt="o">
            <h1>rtfolio</h1>
        </div>
        <h2>
        Dev front junior
        </h2>
    </div>

    <img class="stain2" src="images/stain/stain2.webp" alt="stain" />
</section>
<style lang="scss" >
    @import '../../variables.scss';

    section{
        width: 100vw;
        overflow: hidden;
    }
    .title{
        z-index: -1;
        margin-left: 50%;
        transform: translateX(-50%);
        padding-top: 35vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        animation-duration: 2s;
        animation-name: appear;
        animation-iteration-count: 1;
        transition: ease;
        
        .portfolio{
            display: flex;

            .p{
                transform: translate(0.3vw);
            }

            .o{
                width: 8vw;
                transform: translateY(0.6vw);
            }
        }
        h2{
            transform: translateX(6vw);
        }
    }

    .stain2{
        position: absolute;
        right: 0;
        top:60vh;
        transform: translateY(-25vh);
        z-index: -1;
        width: 50%;
        animation: semiScrollLeft 6s ease-in-out  infinite;
    }

    @media screen and (max-width: 500px) {
        .stain2{
            width: 125%;
        }
        }

    @keyframes appear {
        0% {
            opacity: 0;
        }
       
        100% {
            opacity: 100%;

        }
    }
 
   
</style>

