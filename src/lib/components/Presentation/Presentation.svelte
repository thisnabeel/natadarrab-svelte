<script>
	import { onMount } from 'svelte';

	import Reveal from 'reveal.js';
	import Highlight from 'reveal.js/plugin/highlight/highlight';
	import Markdown from 'reveal.js/plugin/markdown/markdown';
	import Notes from 'reveal.js/plugin/notes/notes';

	import './app.postcss';
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/black.css';
	import 'reveal.js/plugin/highlight/monokai.css';
	import API from '$lib/api/api';
	import { page } from '$app/stores';

	import debounceSave from '$lib/functions/debounce';

	export let editable = false;

	// import Presentation from './presentation.svelte'
	let presentation = null;
	let slideNumber = 0;
	let deck = null;
	onMount(async () => {

		deck = new Reveal({
			plugins: [Markdown, Highlight, Notes],
			autoAnimateEasing: 'ease',
			autoAnimateDuration: 1,
			hash: true,
			backgroundTransition: 'slide'
			// controls: false,
			// progress: false
		});

		deck.initialize({
			 scrollActivationWidth: null
		});

		deck.on('slidechanged', (event) => {
			// event.previousSlide, event.currentSlide, event.indexh, event.indexv
			//   console.log(event.indexh)
			slideNumber = event.indexh;
		});
	});

	async function addSlide() {
		// Create a new slide object
		const newSlide = await API.post('/slides.json', {
			body: 'Write Here...',
			media_url: '',
			position: presentation.slides.length + 1,
			body_font_size_desktop: currentFontSize,
			presentation_id: presentation.id
		});

		// Determine the index at which you want to insert the new slide
		const indexToInsert = slideNumber; // Insert after the current slide

		// Use the Svelte insert method to add the new slide at the specified index
		presentation.slides = [
			...presentation.slides.slice(0, indexToInsert),
			newSlide,
			...presentation.slides.slice(indexToInsert)
		];
	}

	function deleteSlide() {
		var r = confirm('Delete Slide?');
		if (r == true) {
			// Check if there are slides to delete
			// if (presentation.body.length > 0 && indexToDelete >= 0 && indexToDelete < presentation.body.length) {
			// 	// Use the Svelte `update` method to remove the slide at the specified index
			// 	presentation.body = [
			// 		...presentation.body.slice(0, indexToDelete),
			// 		...presentation.body.slice(indexToDelete + 1)
			// 	];
			// }
			presentation.slides = presentation.slides.filter((_, index) => index !== slideNumber - 1);

			console.log(presentation.slides);
			deck.left();
		} else {
		}
	}

	let currentFontSize = 28;
	let mediaMaker = false;

	function changeFont() {
		// currentFontSize = currentFontSize
		console.log({ currentFontSize });
	}

	function toggleMediaMaker() {
		mediaMaker = !mediaMaker;
	}

	let currentMediaUrl = null;
</script>

<div class="reveal">
	<div class="slides">
		<slot />
	</div>
</div>

<style>
	.font-size-desktop {
		position: absolute;
		top: 0;
		left: 0;
	}

	@import url('https://fonts.googleapis.com/css?family=Merriweather:300,400');
	/* font-family: 'Merriweather', serif !important; */
	@import url('https://fonts.googleapis.com/css?family=Calistoga&display=swap');
	/* font-family: 'Calistoga', cursive; !important;*/

	html,
	body {
		width: 100%;
		height: 100%;
		overflow: hidden;
		/*font-family: 'Calistoga', cursive;*/
	}

	body {
		position: relative;
		line-height: 1;

		background-color: #000 !important;
		color: #fff !important;
	}

	.add-slide {
		position: absolute;
		top: 0;
		right: 0;
	}

	.remove-slide {
		position: absolute;
		top: 0;
		right: 40px;
	}
	.media-maker-toggle {
		position: absolute;
		top: 40px;
		right: 0;
	}

	.media-maker {
		position: absolute;
		max-width: 250px;
		top: 40px;
		right: 40px;
	}

	:global(.reveal .backgrounds) {
		background: #000;
	}

	:global(section h3) {
		direction: ltr !important;
		/*font-family: 'Merriweather', serif !important;*/
		line-height: 1.58em !important;
	}

	
	:global(h1) {
		/* font-size: 3em !important; */
		text-align: left;
	}
	:global(h2) {
		font-size: 4em !important;
		text-align: left;
	}
	:global(h3) {
		font-size: 2em !important;
		text-align: left;
	}

	:global(p) {
		font-size: 1em !important;
		display: block;
		max-width: 50vw;
		margin: 0 auto;
		text-align: left;
		font-family: 'Merriweather', serif !important;
	}

	:global(ul) {
		/*list-style: none;*/
		padding: 0;
		text-align: left;
		font-size: 34px !important;
		display: block;
		max-width: 50vw;
		margin: 0 auto;
	}

	ul li {
		padding-bottom: 10px;
		line-height: 1;
	}

	.blue-back {
		border-radius: 5px;
		font-size: 34px;
		background: blue;
		color: #fff;
		text-align: center;
		padding: 40px;
	}

	:global(p + ul, p + ol) {
		padding-top: 10px !important;
	}

	:global(.reveal) {
		position: static;
	}

	/*    img {
		max-height: 80vh !important;
    	max-width: 100% !important;
    }
*/
	:global(.slides) {
		/* width: 78vw !important;
		height: 700px !important; */
		inset: 0 !important;
		transform: none !important;
	}

	:global(.slides > section:nth-child(n + 2)) {
		width: 100%;
		height: 90%;
	}

	:global(img + p) {
		text-align: center;
		padding: 24px;
	}

	:global(figure, figcaption) {
		color: #fff !important;
		background: transparent !important;
		font-style: inherit !important;
		text-align: center !important;
		font-family: GreyCliffCf-Regular !important;
		text-transform: none !important;
		padding-top: 14px;
		font-size: 28px;
	}

	:global(.top-title) {
		position: fixed;

		z-index: 999;
		background: #292020;
		color: #ccc9c9;
		padding: 20px;
		font-family: GreyCliffCF-Light;
		display: none;
	}

	:global(.top-credit) {
		position: fixed;
		right: 0;
		z-index: 999;
		background: #292020;
		color: #fff200;
		padding: 20px;
		font-family: GreyCliffCF-Bold;
		display: none;
		font-size: 25px;
	}

	:global(.reveal section.img_container) {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}

	/*	.reveal section img {
	        display: block;
	        margin: auto;
	        height: auto;
	        max-height: 100%;
	        width: auto;
	        max-width: 100%;
	}*/

	:global(.reveal section img) {
		display: block;
		margin: auto;
		min-height: auto;
		max-height: 70vh;
		width: auto;
		max-width: 100%;

	}

	:global(.reveal figcaption) {
		display: none;
	}

	:global(.slide-body) {
		display: block;
		line-height: 26px !important;
		position: static;
		border: none;
		padding: 0px;
		padding-top: 20px;
		width: 360px;

		background: rgb(0, 0, 0);
		color: rgb(255, 242, 0);
		text-align: center;
		height: auto;
		bottom: -2vh;
		margin: auto;
		left: 0px;
		right: 0px;
		/* font-size: 24px !important; */
	}

	:global(#audioPlayer) {
		top: 620px;
		width: 80%;
		margin: 0 auto;
		display: block;
		position: absolute;
		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;
		text-align: center;
	}
	/*  */

	:global(.reveal .controls .navigate-right.enabled) {
		border-left-color: #ccc;
	}

	:global(.reveal .controls .navigate-left.enabled) {
		border-right-color: #ccc;
	}

	:global(.reveal .controls .navigate-bottom.enabled) {
		border-top-color: #ccc;
	}

	:global(.reveal .controls .navigate-top.enabled) {
		border-bottom-color: #ccc;
	}


@media only screen and (max-width: 600px) {
  :global(.slides) {
    width: 90vw !important;
    margin: 5vw !important;
  }



}


</style>
