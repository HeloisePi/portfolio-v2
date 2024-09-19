<script>
	import Hero from "./component/Hero.svelte";
	import About from "./component/About.svelte";
  	import Contact from "./component/Contact.svelte";
	import Project from "./component/Project.svelte";
  	import Professionalex from "./component/Professionalex.svelte";
  	import Tag from "./component/Tag.svelte";



	  import { onMount } from 'svelte';

let scrolled = false; // Variable de statut pour vérifier si le scroll a déjà eu lieu

// Fonction pour gérer l'effet d'apparition des éléments
function handleAppearance() {
	const elements = document.querySelectorAll('[appear]'); // Sélectionne tous les éléments avec l'attribut 'appear'

	elements.forEach(element => {
		const elementTop = element.getBoundingClientRect().top; // Position de l'élément par rapport au haut de la fenêtre
		const windowHeight = window.innerHeight; // Hauteur de la fenêtre visible

		if (!scrolled || elementTop < windowHeight) {
			element.style.opacity = '1'; // Si le scroll n'a pas eu lieu ou si l'élément est dans la fenêtre visible, le rend visible
		} else {
			element.style.opacity = '0'; // Sinon, masque l'élément
		}
	});
}

// Appel de la fonction lors du montage du composant
onMount(() => {
	handleAppearance(); // Appel initial pour afficher les éléments déjà visibles
	window.addEventListener('scroll', () => {
		scrolled = true; // Marque que le scroll a eu lieu
		handleAppearance(); // Appel de la fonction pour appliquer l'effet d'apparition
	});
});
</script>

<svelte:head>
	<title>Portfolio | Héloïse PINGITORE</title>
</svelte:head>


<section>
	<img class="stain1" src="images/stain/stain1.webp" alt="stain"/>
	<Hero />
	<About />
	<div class="experience">
		<h3>Mes Expériences <br> Professionnelles  </h3>
		<Professionalex
		company ="Seg2Inov"
    	date="Du 9/09/2024 Au 11/07/2025"
    	postTitle="Alternante Développement Fullstack"
    	description="Actuellement en alternance, je suis en charge de la gestion des sites web ainsi que de la programmation des écrans pour S2cash en Windev. Cette expérience me permet de développer mes compétences techniques en gestion de contenu web et en programmation, tout en contribuant à l'évolution d'une solution logicielle complexe."
		/>
		<Professionalex
		company ="Seg2Inov"
    	date="Du 05/2024 Au 18/08/2024"
    	postTitle="Stagiére Développement / UI Design"
    	description="Durant mon stage chez Seg2inov, j'ai eu l'occasion de concevoir de nombreux designs pour les écrans de la version web de S2cash. J'ai également fait mes premiers pas sur WordPress et Windev, acquérant ainsi une première expérience dans le développement web et la gestion de contenu. Cette expérience m'a permis de renforcer mes compétences en design et de découvrir de nouveaux outils de développement."
		/>
		<Professionalex
		company ="MMI"
    	date="Du 22/01/2024 Au 26/01/2024"
    	postTitle="Police, Cybersécurité"
    	description="Au cours d'un projet au sein de ma formation, j'ai eu l'opportunité de collaborer avec la police pour le développement d'une application visant à les assister dans leurs interventions. J'ai été responsable de la sécurisation de l'hébergement ainsi que du développement de la partie front-end. Cette expérience m'a permis de mettre en pratique mes compétences en matière de sécurité informatique et de développement d'interfaces utilisateur, tout en contribuant à un projet ayant un impact concret dans le domaine de la sécurité publique."
		/>
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
		<img class="stain5 bis" src="images/stain/stain5.webp" alt="stain">
		<img class="stain4 bis" src="images/stain/stain4.webp" alt="stain">

		<img class="stain5 bis2" src="images/stain/stain5.webp" alt="stain">
		<img class="stain4 bis2" src="images/stain/stain2.webp" alt="stain" />

		<Project
		title = "Silver Geek"
		imgSrc = 'images/project/silvergeek.webp'
		description = "Lors d'un projet au cours de ma formation, j'ai eu la chance de collaborer avec une association nommée Silver Geek. Cette organisation lutte contre la fracture numérique en aidant les personnes âgées à s'intégrer dans le monde du jeu vidéo. Avec l'équipe composée de six autres personnes, nous avons travaillé sur une application visant à gérer les structures et les ateliers. Mon rôle a été polyvalent : j'ai participé à la conception de la structure de la base de données, géré l'extraction des données, et contribué à une partie du développement front-end. Cette expérience m'a offert l'opportunité de mettre en pratique mes compétences dans le développement web mobile tout en contribuant à une initiative significative pour l'inclusion numérique des personnes âgées."
		techno ="Ruby on rails, Tailwind"
		projectSrc="https://silvergeek.osc-fr1.scalingo.io/"
		githubSrc="https://github.com/groupe-1-silver-geek/silvergeek" >
		<Tag color = #3300FF text="Développement " ></Tag>
		</Project>


		<Project 
		title = "Re:Naissance"
		imgSrc = 'images/project/renaissance.webp'
		description = "
		J'ai eu l'opportunité de travailler sur une expérience web captivante : la décoration de portraits de la Renaissance italienne. Cette expérience devait être exposée au musée lors de la Baccanight. Dans le cadre de ce projet, j'ai travaillé en binôme pour le développement. J'ai pris en charge la partie back-end, incluant la gestion des API, des bases de données et de l'hébergement, ainsi que la partie front-end en créant des filtres pour les tableaux."
		techno ="Express, NodeJs, pg-promisse"
		projectSrc="https://bacchanight.osc-fr1.scalingo.io/"
		githubSrc="https://github.com/DrissDL/Bacchanight" >
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
		title ="Portfolio"
		imgSrc ="images/project/hugo.webp"
    	description ="J'ai eu l'occasion de développer le portfolio d'un camarade de classe. Le défi ? Intégrer de multiples animations, des carrousels et des filtres. J'ai donc dû intégrer ces éléments à partir de sa maquette sur Figma. Cette expérience m'a permis de mettre en pratique mes compétences en développement web tout en répondant aux besoins spécifiques de mon camarade en matière de design et d'interactivité."
     	techno ="Svelte, Scss, Gsap, Lenis"
    	projectSrc ="https://hugomensah.fr/"
    	githubSrc= "https://github.com/HeloisePi/Hugo-Portfolio">
		<Tag color = #3300FF text="Développement " ></Tag>
	</Project>


	<Project 
		title ="Épopée Graphique"
		imgSrc ="images/project/epopeegraphique.webp"
    	description ="Épopée Graphique, c'est bien plus qu'un simple projet au Prime à Bord. Derrière cette page anodine, se cachent mes premiers pas dans le 'back du front'. J'ai mis les bouchées doubles pour automatiser l'affichage des images. Dès qu'elles atterrissent dans le dossier dédié, elles s'affichent sans qu'on ait à les appeler. Ce n'est pas juste une page, c'est une expérience dynamique où la magie opère sans effort. Bienvenue dans l'univers de L'Épopée Graphique, là où la simplicité rencontre l'automatisation pour un résultat qui parle de lui-même."
     	techno ="Svelte, Js"
    	projectSrc ="https://epopeegraphique.fr/"
    	githubSrc= "https://github.com/HeloisePi/teamPinpin">
		<Tag color = #BD00FF text="Design "/>
		<Tag color = #3300FF text="Développement " ></Tag>
	</Project>
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
		title ="Frynge"
		imgSrc ="images/project/frynge.webp"
    	description ="J'ai eu le privilège de participer à un hackathon de trois jours, Reboot2023. Notre équipe a été honorée d'une nomination pour le prix de la Solidarité. Ce fut un défi réellement stimulant en termes de rapidité. J'ai dû entamer le développement en parallèle avec la conception des maquettes, ce qui m'a conduit à coder de manière à rendre le contenu facilement modifiable. C'était une expérience intense où la pression du temps nous a poussés à donner le meilleur de nous-mêmes."
     	techno ="Svelte"
    	projectSrc ="https://frynge.netlify.app/"
    	githubSrc= "https://github.com/EmmaGuillaume/ptitdom">
		<Tag color = #BD00FF text="Design "/>
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
		title ="Pull MMI"
		imgSrc ="images/project/pull.webp"
    	description ="J'ai eu l'opportunité de participer à un concours organisé par le Bureau des Élèves (BDE) de mon école, et j'ai eu la chance de remporter la victoire. Cette expérience m'a permis d'exprimer pleinement ma créativité et de mettre en œuvre mes compétences avec des outils tels que Figma, Illustrator et Adobe. C'était une occasion enrichissante qui m'a permis de mettre en avant mes talents et mes préférences en matière de conception graphique."
     	techno ="Figma Illustrator Photoshop"
    	projectSrc ="https://www.figma.com/file/aoTDUum6SAbmo4qxIWlNsh/Sweat?type=design&node-id=0%3A1&mode=design&t=2RWCUPgRVeDKdUUO-1">
		<Tag color = #BD00FF text="Design "/>
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
	@import '../variables.scss';
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
		animation: semiScrollTop 5s ease-in-out  infinite;
        
		
	}
	section{
		display: flex;
		flex-direction: column;
		gap: 30vh;
        padding-left: 8vw;
        padding-right: 8vw;
		overflow: hidden;
	}
	.experience{
		border-bottom: solid 1px black;
		position: relative;
	}
	h3{
		margin-bottom: 1rem;
	}

	.stain4{
		position: absolute;
		z-index: -2;
		right: -20vw;
		transform: translateY(-40vh);
		height: 90vh;
		animation: semiScrollLeft 7s ease-in-out  infinite;
	}
	.stain5{
		position: absolute;
		z-index: -2;
		left: 0;
		left: -15vw;
		transform: translateY(-40vh);
		height: 90vw;
		animation: semiScrollRight 5s ease-in-out  infinite;
	}

	.bis{
		top: 100vh;
	}

	.bis2{
		top: 250vh;
	}

	.projects{
		display: flex;
		flex-direction: column;
		gap: 3rem;
		position: relative;
	}
</style>
