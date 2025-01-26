<script></script>
<div class="contacts"  id="contacts">
    <h3>Contact</h3>
    <p class="sentence">If you're interested in collaborating, feel free to reach out. We can discuss it further at your convenience.</p>
     <div class="allContact">
        <div class="contact">
            <a href="tel:+33782774442"><img src="images/logo/phone.svg" alt="phone"></a>
            <a class="underline" href="tel:+33782774442"><p>07 82 77 44 42</p></a>
        </div>
        <div class="contact">
            <a href="mailto:heloise.pingitore@mmibordeaux.com"><img src="images/logo/mail.svg" alt="mail"></a>
            <a class="underline" href="mailto:heloise.pingitore@mmibordeaux.com"><p>heloise.pingitore@mmibordeaux.com</p></a>
            
        </div>
        <div class="contact">
            <a href="https://github.com/HeloisePi"><img src="images/logo/github.svg" alt="github"></a>
            <a class="underline" href="https://github.com/HeloisePi"><p>HeloisePi > </p></a>
        </div>
        <div class="contact">
            <a href="https://www.linkedin.com/in/heloise-p-2b8539252/"><img src="images/logo/linkedin.svg" alt="linkedin"></a>
            <a class="underline" href="https://www.linkedin.com/in/heloise-p-2b8539252/"><p>Héloïse P > </p></a>
        </div>
        <div class="contact">
            <a href="https://www.behance.net/heloisepingito"><img src="images/logo/behance.svg" alt="linkedin"></a>
            <a class="underline" href="https://www.behance.net/heloisepingito"><p>Héloïse Pingitore > </p></a>
        </div>
     </div>
</div>

<style lang="scss">
    .contacts{
        padding-bottom: 20vh;
        overflow: hidden;
        width: 100vw;
    }
    img{
        width: 40px;
        transition: 0.5s ease;
    }
    img:hover{
        transform: scale(120%);
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

    .contacts{
        position: relative;
    }
    a{
        color: black;
    }

    .stain{
        position: absolute;
        top: 0;
        width: 50%;
        right: -12vw;
        animation: semiScrollLeft 4s infinite ease-in-out;
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