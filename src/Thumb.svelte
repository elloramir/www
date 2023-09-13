<script>
    export let project;
    export let color = stringColor(project);

	function stringColor(str, seed=0x50) {
		let hash = seed;
		for (let i = 0; i < str.length; i++) {
			hash = str.charCodeAt(i) + ((hash << 5) - hash);
		}
		return "#"+(hash&0xFFFFFF).toString(16).padEnd(6, "0");
	}
</script>

<div class="thumb" style="background-color: {color};">
    <span>{project}</span>
</div>

<style>
.thumb {
	flex-grow: 1;
	padding: 30px 50px;
	cursor: pointer;
	color: #fff;
	text-align: center;
	font-size: 1.5em;
	font-family: 'Comic Sans MS', cursive, sans-serif;
	text-shadow:
		-1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000;
	border: 1px solid rgba(0,0,0,0.5);
	border-bottom: 3px solid rgba(0,0,0,0.5);
	border-radius: 3px;
	box-shadow: 
		0 2px 8px rgba(0, 0, 0, 0.199),
		inset 0 1px rgba(255,255,255,0.3),
		inset 0 10px rgba(255,255,255,0.2),
		inset 0 10px 20px rgba(255,255,255,0.25),
		inset 0 -15px 30px rgba(0, 0, 0, 0.144);
	background-image: linear-gradient(
		-45deg,
		rgba(255, 255, 255, .3) 25%, transparent 25%, transparent 50%,
		rgba(255, 255, 255, .3) 50%,
		rgba(255, 255, 255, .3) 75%, transparent 75%, transparent);
	background-size: 100px 100px;
	background-position: 0 0;
	transition: all 0.5s ease-in-out;
}

.thumb:hover {
	background-position: 0 100px;
}
</style>