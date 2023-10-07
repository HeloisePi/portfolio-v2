<script>
  import "../app.scss";
  import "./styles.css";
</script>

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
  @media screen and (max-width: 500px) {
        footer p {
            font-size: 14px;
        }
    }
</style>
