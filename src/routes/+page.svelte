<script>
	import Hero from "./component/Hero.svelte";
	import About from "./component/About.svelte";
  	import Contact from "./component/Contact.svelte";
	  import Project from "./component/Project.svelte";
  	import Professionalex from "./component/Professionalex.svelte";
  	import Tag from "./component/Tag.svelte";


</script>

<svelte:head>
	<title>Héloïse Pingitore</title>
	<meta name="description" content="Project" />
</svelte:head>

<img class="stain1" src="images/stain/stain1.webp" alt="stain"/>
<section>
	<Hero />
	<About />
	<div class="experience">
		<h3>Mes Expériences <br> Professionnelles  </h3>
		<Professionalex 
		company ="Multimédia SOLUTIONS à Cestas "
    	date="Du 06/06/2023 Au 10/07/2023"
    	postTitle="Stage, Junior Développement"
    	description="J'ai créé une application de prise de commandes 
		sur smartphone pour une entreprise 
		dans le BTP, tout en rédigeant sa documentation complète."
		/>
		<img class="stain4" src="images/stain/stain4.webp" alt="stain">
		<Professionalex
		company="Fondation John Bost"
		date= "2018"
		postTitle="Stage, Graphiste"
		description="J'ai conçu une affiche promotionnelle
		 pour une vente de vin visant à collecter des fonds pour une fondation."
		 />
		 <img class="stain5" src="images/stain/stain5.webp" alt="stain">
	</div>
	<div class="projects" id="projects">
		<h3>Mes projets</h3>
		<Project 
		title ="Bild"
		imgSrc ="images/project/bild.webp"
    	description ="Au cours de ma formation, j'ai eu l'occasion de collaborer avec PtitDOm, une association dédiée au soutien des enfants atteints de Troubles du Spectre Autistique (TSA). J'ai contribué à la création d'une application web visant à simplifier et numériser les jeux d'images utilisés dans l'approche A.B.A. (Analyse Comportementale Appliquée). L'objectif était de faciliter l'apprentissage du vocabulaire et de renforcer la communication.
		Au cours de ce projet de deux semaines, j'ai joué un rôle clé en intégrant et en participant à la conception de la maquette à l'aide des technologies Svelte et Tailwind. Les choix d'outils étaient orientés vers la simplicité d'utilisation, permettant ainsi d'accélérer le développement du projet. 
		"
     	techno ="Svelte, Tailwind, Ts, Js"
    	projectSrc ="https://bild.ptitdom.fr/"
    	githubSrc= "https://github.com/EmmaGuillaume/ptitdom">
		<Tag color = #BD00FF text="Design "/>
		<Tag color = #3300FF text="Développement " ></Tag>
	</Project>
	<Project 
		title ="Animation front-end"
		imgSrc ="images/project/animation.webp"
    	description ="On m'a lancé le défi de coder un portfolio en une semaine. Pour accomplir cette mission, j'ai fait le choix du framework Astro, que je considérais comme étant le plus optimisé pour ce type de site. Par ailleurs, j'ai intégré la bibliothèque GSAP pour les animations, une décision qui s'est avérée extrêmement bénéfique en termes d'efficacité. Grâce à ce projet, j'ai pu acquérir de nouvelles compétences dans l'utilisation de bibliothèques et la création d'animations, enrichissant ainsi mon bagage technique de manière significative."
     	techno ="Astro, Scss, Gsap"
    	projectSrc ="https://challengethrive.netlify.app/"
    	githubSrc= "https://github.com/HeloisePi/challenge">
		<Tag color = #BD00FF text="Design " ></Tag>
		<Tag color = #3300FF text="Développement " ></Tag>
	</Project>
	<Project 
		title ="Interactive Card"
		imgSrc ="images/project/card.webp"
    	description ="Par pur esprit d'auto-apprentissage, j'ai choisi de relever un défi sur MentorChallenge. Cette expérience m'a offert une opportunité précieuse pour approfondir ma compréhension de JavaScript et affiner mes compétences en matière d'organisation de code. Guidé par les enseignements du livre 'Coder proprement' de Robert C. Martin, j'ai revu et optimisé les noms de mes variables, classes et fonctions, entre autres. En repensant la structure de mes fonctions, j'ai créé une organisation plus efficace, me permettant ainsi d'ajouter ou de supprimer des fonctionnalités avec une flexibilité accrue."
     	techno ="Html, Css, JS"
    	projectSrc ="https://interactive-card-heloisepi.netlify.app/"
    	githubSrc= "https://github.com/HeloisePi/interactive-card-details-form-main">
		<Tag color = #3300FF text="Développement " ></Tag>
	</Project>
	<Project 
		title ="Refonte Musée de L'imprimerie"
		imgSrc ="images/project/musee.webp"
    	description ="Voici mon tout premier site web, fruit d'une collaboration au sein d'un groupe de 4 personnes, visant la refonte d'un site de musée. Cette expérience m'a permis d'acquérir les fondamentaux du HTML, du CSS, et même du JavaScript. En outre, j'ai pu explorer les subtilités du responsive design en utilisant les media queries, élargissant ainsi mes compétences pour assurer une expérience utilisateur optimale sur différentes plateformes et dispositifs."
     	techno ="Html, Css, JS"
    	projectSrc ="https://vrai-musee-imprimerie-nantes.netlify.app/"
    	githubSrc= "https://github.com/Safirl/imprimerie">
		<Tag color = #BD00FF text="Design " ></Tag>
		<Tag color = #3300FF text="Développement " ></Tag>
	</Project>
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
		animation-duration: 6s;
        animation-name: semiScrollBottom;
        animation-iteration-count: infinite;
        transition: ease-out;
		
	}
	section{
		display: flex;
		flex-direction: column;
		gap: 30vh;
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
		animation-duration: 6s;
        animation-name: semiScrollLeft;
        animation-iteration-count: infinite;
        transition: ease-out;
	}
	.stain5{
		position: absolute;
		z-index: -2;
		left: 0;
		transform: translateY(-40vh);
		height: 90vh;
		animation-duration: 6s;
        animation-name: semiScrollRight;
        animation-iteration-count: infinite;
        transition: ease-out;
	}

	.projects{
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}
</style>
