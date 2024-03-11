<script>
  import "../app.scss";
  import Headers from "./component/Headers.svelte";
  import "./styles.css";
  // import Lenis from '@studio-freight/lenis';
  // import { lenisStore as lenis, setLenisStore } from '$lib/stores/lenis.ts';

  // $: if (browser && $lenis && hash) {
	// 	const target = document.querySelector(hash);
	// 	$lenis.scrollTo(target, { offset: 0 });
	// }

	// onMount(async () => {

	// 	window.history.scrollRestoration = 'manual';
	// 	window.scrollTo(0, 0);

	// 	const lenisInstance = new Lenis();
	// 	setLenisStore(lenisInstance);


	// 		$lenis?.destroy();
	// 		// setLenisStore(null);

  // });

	// useFrame((time) => {
	// 	$lenis?.raf(time);
	// });
</script>
  <Headers />
<div class="app">


  <main data-lenis-prevent>
    <slot />
  </main>

  <footer>
    <p>
      © 2023 Héloïse Pingitore - Tous droits réservés
    </p>
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
		background-image:url(/images/background.webp);
    background-size: unset;
    background-repeat: repeat;
	}
  @media screen and (max-width: 500px) {
        footer p {
            font-size: 14px;
        }
    }
    
</style>
