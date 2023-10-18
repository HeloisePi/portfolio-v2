<script>
  import "../app.scss";
  import Headers from "./component/Headers.svelte";
  import "./styles.css";
</script>
  <Headers />
<div class="app">


  <main>
    <slot />
  </main>

  <footer>
    <p>
      © 2023 Héloïse Pingitore - Tout droit réservés
    </p>
  </footer>
</div>

<style>
  footer{
    border-top: 1px solid black;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  main{
		background-image:url(/images/background.png);
		background-size: cover;
    background-size: unset;
    background-repeat: repeat;
	}
  @media screen and (max-width: 500px) {
        footer p {
            font-size: 14px;
        }
    }
    
</style>
