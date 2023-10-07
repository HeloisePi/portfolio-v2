<script>
	import About from "./component/About.svelte";
	import Headers from "./component/Headers.svelte";
	import Hero from "./component/Hero.svelte";

</script>

<svelte:head>
	<title>Héloïse Pingitore</title>
	<meta name="description" content="Project" />
</svelte:head>
<Headers />
<img class="background" src="src/lib/images/background.png" alt="background"/>
<img class="stain1" src="src/lib/images/stain/stain1.png" alt="stain"/>

<section>
	<Hero />
	<About />	
</section>
<style lang="scss">
	.background{
		position: absolute;
		top: 0%;
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
        padding-left: 4vw;
        padding-right: 4vw;
	}
</style>
