<script>
	import Hero from "./component/Hero.svelte";
	import About from "./component/About.svelte";
	import Contact from "./component/Contact.svelte";
	import Project from "./component/Project.svelte";
	import Professionalex from "./component/Professionalex.svelte";
	import Tag from "./component/Tag.svelte";
	import { onMount } from 'svelte';
  
	// Code pour gérer l'effet d'apparition des éléments
	let scrolled = false;
  
	function handleAppearance() {
	  const elements = document.querySelectorAll('[appear]');
	  elements.forEach(element => {
		const elementTop = element.getBoundingClientRect().top;
		const windowHeight = window.innerHeight;
		if (!scrolled || elementTop < windowHeight) {
		  element.style.opacity = '1';
		} else {
		  element.style.opacity = '0';
		}
	  });
	}
  
	onMount(() => {
	  handleAppearance();
	  window.addEventListener('scroll', () => {
		scrolled = true;
		handleAppearance();
	  });
  
	  // Ajout de l'Intersection Observer pour les <mark>
	  const markers = [...document.querySelectorAll('mark')];
	  const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
		  if (entry.intersectionRatio > 0) {
			entry.target.style.animationPlayState = 'running';
			observer.unobserve(entry.target);
		  }
		});
	  }, {
		threshold: 0.8
	  });
  
	  markers.forEach(mark => {
		observer.observe(mark);
	  });
	});
  </script>
  

<svelte:head>
	<title>Portfolio | Héloïse PINGITORE</title>
</svelte:head>


<section>

	<Hero />
	<!-- <About /> -->
	<div class="experience">
		<h3>My Professional <br> Experience</h3>


		<Professionalex
		company ="SEG2 Inov ( French Tech )"
    	date="From 9/09/2024 to  11/07/2025"
    	postTitle="Devops">
		Currently in a work-study program, I am responsible for managing websites and programming interfaces for S2cash. This experience allows me to develop skills in both web technologies and software development, including server setup, establishing communication links via SSH, front-end and back-end development, PostgreSQL and database management, as well as WordPress customization. I also design and optimize database architecture, conduct user testing, and perform project analysis, all while contributing to the evolution of a complex and innovative software solution.
		This role strengthens my expertise in software development and project management.
		</Professionalex>


		<Professionalex
		company ="SEG2 Inov ( French Tech ) "
    	date="From 05/2024 to  18/08/2024"
    	postTitle="Devops /  UI Design">
		During my internship at Seg2inov, I had the opportunity to design multiple interfaces for the web version of S2cash. I also took my first steps with WordPress, gaining initial experience in web development and content management. This experience allowed me to strengthen my design skills while exploring new development tools.
		</Professionalex>


		<Professionalex
		company ="MMI - Cybersecurity"
    	date="From 22/01/2024 to  26/01/2024"
    	postTitle="MMI - Cybersecurity">
		During a project in my training program, I had the opportunity to collaborate with the police on the development of an application designed to assist them during interventions. I was responsible for securing the hosting environment and developing the front-end interface. This experience allowed me to apply my skills in cybersecurity, front-end development, and user interface design while contributing to a project with a tangible impact on public safety.
		</Professionalex>


		<Professionalex
		company ="Multimédia SOLUTIONS"
    	date="From 06/06/2023 to  10/07/2023"
    	postTitle="Stage">
		I developed a mobile order-taking application for a company in the construction sector, while also writing its complete documentation. This project allowed me to manage tasks autonomously, adapt to industry-specific needs, and solve real-world problems. I worked with Aurelia and Eclipse for web development and focused on creating a mobile-friendly design tailored to the company’s requirements.
		</Professionalex>



		<img class="stain4" src="images/stain/stain4.webp" alt="stain">
		<Professionalex
		company="Fondation John Bost"
		date= "2018"
		postTitle="Stage">
		I designed a promotional poster for a wine sale aimed at raising funds for a foundation. This project allowed me to support a fundraising campaign through targeted communication and visually impactful design.
		</Professionalex>

		
	</div>
	<div class="projects" id="projects">
		<h3>Some of my Projects</h3>
		<Project
		title = "Cat World"
		description = "I am currently developing, in collaboration, a social network where users embody a 3D cat on a planet. Users can add friends and send personalized letters. During this project, I explored testing with Jest, improved my skills in React Three, and gained valuable experience in backend development using Express."
		techno ="express, React, Threejs, Typescript, Jest"
		projectSrc="https://github.com/Safirl/cat-world"
		istagFrontend
		istagBackend
		istagPrototype
		istaguserTest
		>
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/catWorld/1.jpg" alt="">
		</div>
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/catWorld/2.jpg" alt="">
		</div>

		</Project>


		<Project
		title = "smash"
		description = "I developed a community-driven application that helps users identify true vs. false current events by seeing results from their friends. I gained skills in building full-stack applications, managing backend controllers and APIs, and handling routing. I also designed responsive front-end interfaces and conducted user interviews to gather feedback for improvements. "
		techno ="Laravel, blade, SQL"
		projectSrc="https://github.com/Safirl/Flip"
		istagFrontend
		istagBackend
		istagPrototype
		>
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/smash/1.jpg" alt="">
		</div>
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/smash/2.jpg" alt="">
		</div>
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/smash/3.jpg" alt="">
		</div>
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/smash/4.jpg" alt="">
		</div>
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/smash/5.jpg" alt="">
		</div>
		</Project>

		<Project
		title = "Nuit au musée : La réserve"
		description = " I had the opportunity to work again for the Musba, this time for the Night of the Museums. I had to create an interactive application for a reserve on a Dimension tablet with a resolution of 3840 x 2160. I was able to push myself to use object-oriented programming and gain experience with interactive development. "
		techno ="Vue.js, JavaScript with object-oriented programming"
		projectSrc="https://github.com/nuit-musee-musba/experience-2025"
		istagFrontend
		>
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/NuitDesMusee/1.jpg" alt="">
		</div>
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/NuitDesMusee/2.jpg" alt="">
		</div>
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/NuitDesMusee/3.jpg" alt="">
		</div>
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/NuitDesMusee/4.jpg" alt="">
		</div>
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/NuitDesMusee/5.jpg" alt="">
		</div>
		</Project>

		<Project
		title = "Just a Carrot"
		description = "I developed a game using Godot, where the player controls a carrot trying to escape. During the development process, I gained extensive experience in programming with Godot, writing custom scripts to implement core game mechanics such as player movement, collision detection, and game physics. I also learned how to manage sprites, including handling animations, sprite sheets, and optimizing asset performance. On top of that, I worked on game logic for things like win/loss conditions, timers, and dynamic difficulty adjustments. My development skills were further enhanced through debugging and refining the gameplay to ensure smooth performance and an enjoyable user experience. "
		techno ="Godot, C#"
		projectSrc="https://github.com/Safirl/carot-game"
		istagFrontend
		istagBackend
		>
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/justacarrot/1.jpg" alt="">
		</div>
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/justacarrot/2.jpg" alt="">
		</div>
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/justacarrot/3.jpg" alt="">
		</div>
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/justacarrot/4.jpg" alt="">
		</div>
		</Project>



		<Project 
		title = "Re:Naissance"
		description = "
		I had the opportunity to work on an engaging web experience: decorating portraits from the Italian Renaissance. This experience was designed to be showcased at the museum during the Baccanight event. For this project, I collaborated with a partner on the development. I handled the back-end, including API management, databases, and hosting, as well as the front-end by creating filters for the paintings."
		istagFrontend
		istagBackend
		istagPrototype
		techno ="Express, NodeJs, pg-promisse"
		projectSrc="https://github.com/DrissDL/Bacchanight" >
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/re-naissance/1.jpg" alt="">
		</div>
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/re-naissance/2.jpg" alt="">
		</div>
		</Project>

		<Project
		title ="Gsap Website"
		istagFrontend
		description ="I was challenged to code a portfolio within a week. To accomplish this task, I chose the Astro framework, which I considered to be the most optimized for this type of site. Additionally, I integrated the GSAP library for animations, a decision that proved to be highly beneficial in terms of efficiency. Through this project, I was able to acquire new skills in using libraries and creating animations, significantly enhancing my technical expertise."
		techno ="Astro, Scss, Gsap"
    	projectSrc ="https://challengethrive.netlify.app/"
    	githubSrc= "https://github.com/HeloisePi/challenge">

		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/gsapwebsite/1.jpg" alt="">
		</div>
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/gsapwebsite/2.jpg" alt="">
		</div>
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/gsapwebsite/3.jpg" alt="">
		</div>
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/gsapwebsite/4.jpg" alt="">
		</div>
	</Project>




	<Project 
		title ="Interactive Card"
		istagFrontend
    	description ="Driven by a spirit of self-learning, I chose to take on a challenge on MentorChallenge. This experience provided me with a valuable opportunity to deepen my understanding of JavaScript and refine my coding organization skills. Guided by the teachings from Robert C. Martin's book 'Clean Code,' I reviewed and optimized the names of my variables, classes, and functions, among others. By rethinking the structure of my functions, I created a more efficient organization, allowing me to add or remove features with greater flexibility."
     	techno ="Html, Css, Javascript"
    	projectSrc ="https://interactive-card-heloisepi.netlify.app/"
    	githubSrc= "https://github.com/HeloisePi/interactive-card-details-form-main">
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/interactivecard/1.jpg"  alt="">
		</div>
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/interactivecard/2.jpg"  alt="">
		</div>
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/interactivecard/3.jpg" alt="">
		</div>
		<div class="swiper-slide">
			<img style="width:100%;" src="/images/project/interactivecard/4.jpg" alt="">
		</div>
	</Project>
	</div>
	<!-- <Contact /> -->
	
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
		gap: 13vh;
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








	mark {
        --color1: #E8D7FF;
        --color2: #E8D7FF;
        --bg-height: 40%;
        
        all: unset; /* Réinitialiser le style par défaut */
        background-image: linear-gradient(var(--color1), var(--color2));
        background-position: 0 100%;
        background-repeat: no-repeat;
        background-size: 0 var(--bg-height);
        animation: highlight 3000ms ease-out paused; /* Animation initialement en pause */
        animation-fill-mode: forwards; /* Conserve l'état final de l'animation */
        animation-play-state: paused; /* État initial de l'animation */
    }

    @keyframes highlight {
        to {
            background-size: 100% var(--bg-height); /* Étendre le fond surligné */
        }
    }
</style>
