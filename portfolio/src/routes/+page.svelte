<script>
	import About from "./component/About.svelte";
  import Contact from "./component/Contact.svelte";
	import Headers from "./component/Headers.svelte";
	import Hero from "./component/Hero.svelte";
  	import Professionalex from "./component/Professionalex.svelte";


</script>

<svelte:head>
	<title>Héloïse Pingitore</title>
	<meta name="description" content="Project" />
</svelte:head>
<Headers />
<img class="background" src="src/lib/images/background.png" alt="background"/>
<img class="background2" src="src/lib/images/background.png" alt="background"/>
<img class="stain1" src="src/lib/images/stain/stain1.png" alt="stain"/>
<section>
	<Hero />
	<About />
	<div class="experience">
		<h3>Mes Expériences <br> Professionnelles  </h3>
		<Professionalex 
		company= "Multimédia SOLUTIONS à Cestas "
		date="( Du 06/06/2023 Au 10/07/2023 )"
		postTitle="Stage, Junior Développement "
		description="J'ai créé une application de prise de commandes 
		sur smartphone pour une entreprise 
		dans le BTP, tout en rédigeant sa documentation complète."
		/>
		<img class="stain4" src="/src/lib/images/stain/stain4.png" alt="stain">
		<Professionalex
		company="Fondation John Bost"
		date="(2018)"
		postTitle="Stage, Graphiste"
		description="J'ai conçu une affiche promotionnelle
		 pour une vente de vin visant à collecter des fonds pour une fondation."
		 />
		 <img class="stain5" src="/src/lib/images/stain/stain5.png" alt="stain">
	</div>
	<Contact />
</section>
<style lang="scss">
	.background{
		position: absolute;
		top: 0%;
		width: 100vw;
	}
	.background2{
		position: absolute;
		top: 12vh;
		width: 100vw;
	}


	.stain1{
		position: absolute;
		z-index: -1;
		height: 40vw;
	}
	section{
		display: flex;
		flex-direction: column;
		gap: 40vh;
        padding-left: 8vw;
        padding-right: 8vw;
	}
	.experience{
		border-bottom: solid 1px black;
	}
	h3{
		margin-bottom: 1rem;
	}

	.stain4{
		position: absolute;
		z-index: -2;
		right: 0;
		transform: translateY(-40vh);
		height: 90vh;
	}
	.stain5{
		position: absolute;
		z-index: -2;
		left: 0;
		transform: translateY(-40vh);
		height: 90vh;
	}
</style>
