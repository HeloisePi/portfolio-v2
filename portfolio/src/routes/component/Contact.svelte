<script></script>
<div class="contacts" >
    <h3>Contact</h3>
    <p class="sentence">Horem ipsum dolor sit amet, consectetur adipiscing elit.
     Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
     <div class="allContact">
        <div class="contact">
            <img src="src/lib/images/logo/phone.svg" alt="phone">
            <p>07 82 77 44 42</p>
        </div>
        <div class="contact">
            <img src="src/lib/images/logo/mail.svg" alt="mail">
            <p>heloise.pingitore@mmibordeaux.com</p>
        </div>
        <div class="contact">
            <img src="src/lib/images/logo/github.svg" alt="github">
            <a href="#"><p>HeloisePi</p></a>
        </div>
        <div class="contact">
            <img src="src/lib/images/logo/linkedin.svg" alt="linkedin">
            <a href="#"><p>Héloïse P</p></a>
        </div>
     </div>
</div>

<style lang="scss">
    .contacts{
        margin-bottom: 20vh;
    }
    img{
        width: 40px;
    }
    h3{
        margin-bottom: 1rem;
    }

    .sentence{
        margin-bottom: 3rem;
        width: 80vw;
    }
    .allContact{
        margin-left: 4rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .contact{
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    @media screen and (max-width: 650px) {
        .allContact {
            margin-left: 0rem;
        }
        .sentence{
            width: 90vw;
        }
        .contact {

            img{
                width: 25px;
            }
            gap: 1rem;
            p {
                
                font-size: 18px;
            }
        }
        
    }

    @media screen and (max-width: 450px) {
        .contact {

            img{
                width: 20px;
            }
            gap: 1rem;
            p {
                font-size: 14px;
            }
            }
    }
</style>