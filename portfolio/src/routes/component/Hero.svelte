<script>
</script>

<div class="title">
    <div class="portfolio">
        <h1 class="p">P</h1>
        <img class="o" src="src/lib/images/o.svg" alt="o">
        <h1>rtfolio</h1>
    </div>
    <h2>
        Junior dev front
    </h2>
</div>

<img class="stain2" src="src/lib/images/stain/stain2.png" alt="stain" :>

<style lang="scss" >
    .title{
        z-index: -1;
        margin-left: 50vw;
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
        height: 100vw;
        transform: translateY(-25vh);
        z-index: -1;
    }
</style>