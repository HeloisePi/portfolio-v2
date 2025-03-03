<script>
  import "../app.scss";
  import Headers from "./component/Headers.svelte";
  import "./styles.css";

</script>
  <Headers />
<div class="app">


  <main data-lenis-prevent>
    <slot />
  </main>

  <footer>
   <div class="links">
     <a class="underline" href="https://github.com/HeloisePi"><p>Github</p></a>
     <a class="underline" href="https://www.behance.net/heloisepingito"><p>Behance</p></a>
     <a class="underline" href="https://www.linkedin.com/in/heloise-p-2b8539252/"><p>LinkedIn</p></a>
     <a class="underline" href="HeloisePingitore.pdf"><p>Curriculum vitae</p></a>
     <a class="underline" href="tel:+33782774442"><p>07 82 77 44 42</p></a>
     <a class="underline" href="mailto:heloise.pingitore@mmibordeaux.com"><p>heloise.pingitore@mmibordeaux.com</p></a>
   </div>
   <div class="site">
    <p>Site Map -</p>
    <a href="#"><p>Home</p></a>
    <a href="#"><p>Legal Notice</p></a>
   </div>
  </footer>
</div>

<style>
  footer{
    background-color: #ECECEC;
    padding-left: 8vw;
    padding-right: 8vw;
    display: flex;
    flex-direction: column;
    align-items: end;

  }

  footer .links p{
    font-family: "SuisseIntl";
    color: black;
    white-space: nowrap;
    
    
  }
.links{
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: #B5B5B5 solid 1px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  gap: 2rem;
}

.site{
  display: flex;
  gap: 1rem;
  padding: 1rem;
  padding-right: 0;

}
.site p{
  color: #525252;
}

@media screen and (max-width: 1100px) {
  footer .links{
    flex-wrap: wrap;

  }
}




  main{
		background-image:url(/images/line.svg);
    background-size: contain;
    background-color: #ECECEC;
    padding-bottom: 10rem;
	}
  @media screen and (max-width: 500px) {
        footer p {
            font-size: 14px;
        }
    }


    html{
      background-color: #ECECEC;
    }
    
</style>
