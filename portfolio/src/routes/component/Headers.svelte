<script>
</script>

<div class="blur"></div>
<div class="header">
    <h3>PINGITORE Héloïse</h3>
    <div class="link">
        <h4>
            Project
        </h4>
        <h4>
            Contact
        </h4>
        <h4>
            Curriculum Vitae
        </h4>
    </div>
</div>

<style lang="scss" >
    .header{
        z-index: 2;
        position: fixed;
        top: 0;
        width: 100vw;
        height: 70px;
        padding-left: 4vw;
        padding-right: 4vw;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .link{
            display: flex;
            gap: 2rem;

            
        }
    }

    h4, h3{
        text-wrap: nowrap;
    }

    .blur{
        z-index: 01;
        position: fixed;
        top: 0;
        width: 100vw;
        height: 70px;
        -webkit-filter: blur(10px);
        -moz-filter: blur(10px);
        -o-filter: blur(10px);
        -ms-filter: blur(10px);
        filter: blur(10px);
        backdrop-filter: blur(10px);
    }
</style>