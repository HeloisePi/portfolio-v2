<script>
</script>

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

<img class="stain2" src="images/stain/stain2.png" alt="stain" :>

<style lang="scss" >
    .title{
        z-index: -1;
        margin-left: 47vw;
        transform: translateX(-50%);
        padding-top: 35vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        
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
        animation-duration: 6s;
        animation-name: semiScrollLeft;
        animation-iteration-count: infinite;
        transition: ease-out;

        
    }
 
   
</style>