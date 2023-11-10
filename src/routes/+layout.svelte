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
      © 2023 Héloïse Pingitore - Tous droits réservés
    </p>
    <div id="wcb" class="carbonbadge"></div>
    <script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer></script>
  </footer>
</div>

<style>
  footer{
    padding: 1rem;
    border-top: 1px solid black;
    height: fit-content;
    gap: 1rem;
    display: flex;
    flex-direction: column;
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
