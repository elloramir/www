<script>
	import Thumb from './Thumb.svelte';
	import Ellora from './Ellora.svelte';
</script>

<main>
	<header class="presentation">
		<Ellora />
		<p>What is a programmer?<br>A miserable little pile of code.</p>

		<nav class="external-links">
			<a href="https://twitter.com/elloramir" target="_blank">
				<img alt="icon" src="/images/ladybird.png" />
			</a>
			<a href="mailto:ellorakat@gmail.com">
				<img alt="icon" src="/images/mail.png" />
			</a>
			<a href="https://github.com/elloramir" target="_blank">
				<img alt="icon" src="/images/octopus.png" />
			</a>
		</nav>
	</header>

	<section class="projects">
		<Thumb project="Perfect Circle" />
		<Thumb project="Music Visualizer" />
		<Thumb project="To be defined" />
		<Thumb project="To be defined" />
	</section>
</main>

<div class="credits">
	<span> Icons by <a target="_blank" href="https://icons8.com">Icons8</a> </span>
</div>

<style>
:global(body) {
	background-color: rgb(245, 239, 229);
	color: black;
}

main {
	width: 100%;
	max-width: 900px;
	margin: 0 auto;
}

.presentation {
	text-align: center;
}

.presentation p {
	font-family: 'Courier New', Courier, monospace;
	font-size: 1.2rem;
}

.external-links {
	display: flex;
	justify-content: center;
	gap: 2rem;
	margin: 30px 0 50px 0;
}

.external-links a {
	border-bottom: 2px dashed rgba(0, 0, 0, 0.267);
}

.external-links img {
	width: 80px;
}

.projects {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
}

/* @NOTE: Since icons8 said we need to, WE NEED TO! */
.credits {
	position: fixed;
	bottom: 0;
	right: 0;
	padding: 10px;
}
</style>