<script>
</script>

<div class="blur"></div>
<div class="header">
    <a href="#" class="title"><h3>PINGITORE Héloïse</h3></a>
    <div class="link">
        <a href="#projects"><h4>
            Project
        </h4>
    </a>
        <a href="#contacts"><h4>
            Contact
        </h4>
    </a>
        <a href="HéloïsePingitore.pdf"><h4>
            Curriculum Vitae
        </h4>
    </a>
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

    .title{
        text-decoration: none;
        &:hover{
            text-decoration: none;
        }
    }
    a{
        color: black;
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

    @media screen and (max-width: 660px) {
        .header{
            padding-top: 0.5rem;
            padding-top: 0.5rem;
            flex-direction: column;
            align-items: center;
        }
    }
    @media screen and (max-width: 450px) {
        h4{
            font-size: 15px;
        }
    }
    

    


      
    
  
</style>