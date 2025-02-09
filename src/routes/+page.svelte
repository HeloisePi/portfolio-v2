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
		<h3>My Projects</h3>
		<Project
		title = "Silver Geek"
		imgSrc = 'images/project/silvergeek.webp'
		description = "During a project in my training program, I had the opportunity to collaborate with an organization called Silver Geek. This association fights against the digital divide by helping elderly people integrate into the world of video games. Together with a team of six others, we worked on an application designed to manage structures and workshops. My role was versatile: I participated in designing the database structure, managed data extraction, and contributed to part of the front-end development. This experience allowed me to apply my skills in mobile web development while contributing to a meaningful initiative for digital inclusion among the elderly."
		techno ="Ruby on rails, Tailwind"
		projectSrc="https://github.com/groupe-1-silver-geek/silvergeek" >
		<Tag color = #3300FF text="Development " ></Tag>
		</Project>


		<Project 
		title = "Re:Naissance"
		imgSrc = 'images/project/renaissance.webp'
		description = "
		I had the opportunity to work on an engaging web experience: decorating portraits from the Italian Renaissance. This experience was designed to be showcased at the museum during the Baccanight event. For this project, I collaborated with a partner on the development. I handled the back-end, including API management, databases, and hosting, as well as the front-end by creating filters for the paintings."
		techno ="Express, NodeJs, pg-promisse"
		
		projectSrc="https://github.com/DrissDL/Bacchanight" >
		<Tag color = #3300FF text="Development " ></Tag>
		</Project>

		<Project
		title ="Animation front-end"
		imgSrc ="images/project/animation.webp"
    	description ="I was challenged to code a portfolio within a week. To accomplish this task, I chose the Astro framework, which I considered to be the most optimized for this type of site. Additionally, I integrated the GSAP library for animations, a decision that proved to be highly beneficial in terms of efficiency. Through this project, I was able to acquire new skills in using libraries and creating animations, significantly enhancing my technical expertise."
     	techno ="Astro, Scss, Gsap"
    	projectSrc ="https://challengethrive.netlify.app/"
    	githubSrc= "https://github.com/HeloisePi/challenge">
		<Tag color = #BD00FF text="Design " ></Tag>
		<Tag color = #3300FF text="Development " ></Tag>
	</Project>

	<Project
		title ="Portfolio"
		imgSrc ="images/project/hugo.webp"
    	description ="I had the opportunity to develop a classmate's portfolio. The challenge? Integrating multiple animations, carousels, and filters. I had to incorporate these elements based on his design mockup in Figma. This experience allowed me to apply my web development skills while meeting my classmate's specific design and interactivity needs."
     	techno ="Svelte, Scss, Gsap, Lenis"
    	projectSrc ="https://hugomensah.netlify.app/"
    	githubSrc= "https://github.com/HeloisePi/Hugo-Portfolio">
		<Tag color = #3300FF text="Development " ></Tag>
	</Project>


	<Project 
		title ="Épopée Graphique"
		imgSrc ="images/project/epopeegraphique.webp"
    	description ="Épopée Graphique is much more than just a simple project at Prime à Bord. Behind this seemingly ordinary page lies my first steps in the 'back of the front.' I worked hard to automate the display of images. As soon as they land in the designated folder, they automatically appear without needing to be called. It's not just a page, it's a dynamic experience where the magic happens effortlessly. Welcome to the world of L'Épopée Graphique, where simplicity meets automation for a result that speaks for itself."
     	techno ="Svelte, Js"
    	projectSrc ="https://epopeegraphique.fr/"
    	githubSrc= "https://github.com/HeloisePi/teamPinpin">
		<Tag color = #BD00FF text="Design "/>
		<Tag color = #3300FF text="Development " ></Tag>
	</Project>
	<Project 
		title ="Bild"
		imgSrc ="images/project/bild.webp"
    	description ="During my training, I had the opportunity to collaborate with PtitDOm, an organization dedicated to supporting children with Autism Spectrum Disorder (ASD). I contributed to the creation of a web application aimed at simplifying and digitizing the picture games used in the A.B.A. (Applied Behavior Analysis) approach. The goal was to facilitate vocabulary learning and enhance communication.
Throughout this two-week project, I played a key role in integrating and participating in the design of the mockup using Svelte and Tailwind technologies. The tool choices were focused on ease of use, allowing for faster project development."
     	techno ="Svelte, Tailwind, Ts, Js"
    	projectSrc ="https://bild.ptitdom.fr/"
    	githubSrc= "https://github.com/EmmaGuillaume/ptitdom">
		<Tag color = #BD00FF text="Design "/>
		<Tag color = #3300FF text="Development " ></Tag>
	</Project>
	<Project 
		title ="Frynge"
		imgSrc ="images/project/frynge.webp"
    	description ="I had the privilege of participating in a three-day hackathon, Reboot2023. Our team was honored with a nomination for the Solidarity Award. It was a truly challenging experience in terms of speed. I had to start development alongside the design of the mockups, which led me to code in a way that made the content easily editable. It was an intense experience where the pressure of time pushed us to give our best."
     	techno ="Svelte"
    	projectSrc ="https://frynge.netlify.app/"
    	githubSrc= "https://github.com/EmmaGuillaume/ptitdom">
		<Tag color = #BD00FF text="Design "/>
		<Tag color = #3300FF text="Development " ></Tag>
	</Project>

	<Project 
		title ="Interactive Card"
		imgSrc ="images/project/card.webp"
    	description ="Driven by a spirit of self-learning, I chose to take on a challenge on MentorChallenge. This experience provided me with a valuable opportunity to deepen my understanding of JavaScript and refine my coding organization skills. Guided by the teachings from Robert C. Martin's book 'Clean Code,' I reviewed and optimized the names of my variables, classes, and functions, among others. By rethinking the structure of my functions, I created a more efficient organization, allowing me to add or remove features with greater flexibility."
     	techno ="Html, Css, JS"
    	projectSrc ="https://interactive-card-heloisepi.netlify.app/"
    	githubSrc= "https://github.com/HeloisePi/interactive-card-details-form-main">
		<Tag color = #3300FF text="Development " ></Tag>
	</Project>
	<Project 
		title ="Pull MMI"
		imgSrc ="images/project/pull.webp"
    	description ="I had the opportunity to participate in a competition organized by the Student Bureau (BDE) of my school, and I was fortunate to win. This experience allowed me to fully express my creativity and apply my skills using tools such as Figma, Illustrator, and Adobe. It was a rewarding opportunity that allowed me to showcase my talents and preferences in graphic design."
     	techno ="Figma Illustrator Photoshop"
    	projectSrc ="https://www.figma.com/file/aoTDUum6SAbmo4qxIWlNsh/Sweat?type=design&node-id=0%3A1&mode=design&t=2RWCUPgRVeDKdUUO-1">
		<Tag color = #BD00FF text="Design "/>
	</Project>
	<Project 
		title ="Redesign and recoding of the Printing Museum"
		imgSrc ="images/project/musee.webp"
    	description ="Here is my very first website, the result of a collaboration within a group of 4 people, aimed at redesigning a museum's website. This experience allowed me to acquire the fundamentals of HTML, CSS, and even JavaScript. Additionally, I was able to explore the nuances of responsive design by using media queries, further expanding my skills to ensure an optimal user experience across different platforms and devices."
     	techno ="Html, Css, JS"
    	projectSrc ="https://vrai-musee-imprimerie-nantes.netlify.app/"
    	githubSrc= "https://github.com/Safirl/imprimerie">
		<Tag color = #BD00FF text="Design " ></Tag>
		<Tag color = #3300FF text="Development " ></Tag>
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
