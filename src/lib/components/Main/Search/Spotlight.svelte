<script>
	import API from '$lib/api/api';
	import { onMount } from 'svelte';
	import Search from './Search.svelte';
	import { showSpotlight } from '$lib/stores/spotlight';
	import { gopher } from '$lib/components/QuranFlow/store';
	import { device } from '$lib/utils/device';

	export let deliver = function () {};

	let searchInput = '';
	let searchElement = null;
	let error = '';
	// Function to handle keyboard events
	const handleKeyDown = (event) => {
		// Check if the user pressed Cmd+/ on macOS or Ctrl+/ on Windows/Linux
		if ((event.metaKey || event.ctrlKey) && event.key === '/') {
			$showSpotlight.set(!showSpotlight); // Toggle the showSpotlight variable
		}
	};

	onMount(() => {
		// Add an event listener for keydown events
		window.addEventListener('keydown', handleKeyDown);

		// Cleanup the event listener when the component is unmounted
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	});

	let words = [];

	async function findArabicWordsByRoot() {
		// console.log(convertRomanToArabic(searchInput));
		const root = convertRomanToArabic(searchInput);
		const res = await API.post('/qf/find_by_root.json', {
			type: 'verb',
			root: root
		});
		console.log({ res });
		words = res;
		if (res.length === 0) error = 'No Words for ' + searchInput;
		searchInput = '';
	}

	function convertRomanToArabic(letters) {
		const hash = {
			a: ['ا', 'أ', 'ء', 'ع'],
			"'a": ['ا', 'أ', 'ء', 'ع'],
			b: 'ب',
			t: ['ت', 'ط'],
			th: ['ث', 'ذ'],
			j: 'ج',
			H: 'ح',
			kh: 'خ',
			d: ['د', 'ض'],
			z: ['ذ', 'ز', 'ظ'],
			r: 'ر',
			s: ['س', 'ث', 'ص'],
			sh: 'ش',
			3: 'ع',
			gh: 'غ',
			g: ['غ', 'ج'],
			f: 'ف',
			q: 'ق',
			k: 'ك',
			l: 'ل',
			m: 'م',
			n: 'ن',
			w: 'و',
			v: 'و',
			h: ['ه', 'ح'],
			y: 'ي',
			i: 'ي'
		};

		let combos = {
			r1: [],
			r2: [],
			r3: [],
			r4: []
		};

		let word = '';

		letters = letters.split('').filter((l) => l !== ' ');
		// Go through each letter
		for (let i = 0; i < letters.length; i++) {
			console.log(i, letters[i]);
			const l = letters[i];
			if (Array.isArray(hash[l])) {
				// Go through each l in array
				hash[l].forEach((item) => {
					combos['r' + (i + 1)].push(item);
				});
			} else {
				combos['r' + (i + 1)].push(hash[l]);
			}
		}

		console.log(combos);
		let car;
		if (combos['r4'].length > 0) {
			car = cartesian(combos['r1'], combos['r2'], combos['r3'], combos['r4']);
		} else {
			car = cartesian(combos['r1'], combos['r2'], combos['r3']);
		}

		let roots = [];
		car.forEach((item) => {
			word = '';
			item.forEach((r) => {
				word += r + ' ';
			});
			roots.push(word.trim());
		});

		console.log(roots);
		return roots;
	}

	function cartesian() {
		var r = [],
			arg = arguments,
			max = arg.length - 1;
		function helper(arr, i) {
			for (var j = 0, l = arg[i].length; j < l; j++) {
				var a = arr.slice(0); // clone arr
				a.push(arg[i][j]);
				if (i == max) r.push(a);
				else helper(a, i + 1);
			}
		}
		helper([], 0);
		return r;
	}

	function handleBackgroundClick(event) {
		const spotlightWrapper = document.getElementById('spotlight_wrapper');
		if (!spotlightWrapper) return;
		if (!spotlightWrapper.contains(event.target)) {
			showSpotlight.set(false);
			// Add any other actions you want to perform when clicking outside
		}
	}
</script>

{#if $showSpotlight}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="bgFiller" on:click={handleBackgroundClick}>
		<div class="spotlight_wrapper" class:mobile={$device === 'mobile'}>
			<Search />
		</div>
	</div>
{/if}

<style>
	.searchArabicRoots {
		max-width: 628px;
		background: #ffa7a7;
		font-size: 24px;
		text-align: left;
		margin: 0 auto;
		padding: 10px;
	}

	.error {
		max-width: 628px;
		background: #c52e2e;
		color: #fff;
		font-size: 24px;
		text-align: left;
		margin: 0 auto;
		padding: 10px;
	}
	.bgFiller {
		background-color: #00000041;
		width: 100vw;
		height: 100vh;
		display: block;
		position: absolute;
		top: 0;
		z-index: 99999999;
	}

	.spotlight_wrapper {
		position: absolute;
		top: 15%;
		display: block;
		margin: 0 auto;
		left: 0;
		right: 0;
		width: 100%;
		/* display: none; */
	}

	.mobile.spotlight_wrapper {
		top: 2%;
	}

	#spotlight {
		display: block;
		width: 628px;
		height: 56px;
		margin: auto;
		-moz-border-radius: 5px;
		-webkit-border-radius: 5px;
		border-radius: 5px;
		-moz-appearance: none;
		-webkit-appearance: none;
		-moz-box-shadow: 0 25px 60px 10px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0 25px 60px 10px rgba(0, 0, 0, 0.3);
		box-shadow: 0 25px 60px 10px rgba(0, 0, 0, 0.3);
		border: 1px solid rgba(0, 0, 0, 0.2);
		outline: none;
		font-size: 1.6rem;
		font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
			'Lucida Grande', sans-serif;
		color: #000;
		backgroundcolor: #f8f5f4;
		background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjIuNyAyMi41IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMi43IDIyLjUiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxjaXJjbGUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2NzY2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgY3g9IjguMSIgY3k9IjguNCIgcj0iNi44Ii8+PGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2NzY2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjEzLjIiIHkxPSIxMi45IiB4Mj0iMjEuNSIgeTI9IjIxLjQiLz48L3N2Zz4=);
		background-position: left 17px center;
		background-repeat: no-repeat;
		background-size: 3.5%;
		padding: 0 52px;
	}
	#spotlight:-moz-placeholder {
		color: #666666;
	}
	#spotlight::-moz-placeholder {
		color: #666666;
	}
	#spotlight:-ms-input-placeholder {
		color: #666666;
	}
	#spotlight::-webkit-input-placeholder {
		color: #666666;
	}

	#desc {
		position: absolute;
		top: 35%;
		left: 0;
		right: 0;
		width: 100%;
		text-align: center;
		padding: 0 40%;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
			'Lucida Grande', sans-serif;
		font-size: 1.4rem;
		line-height: 1.5;
		color: #666666;
	}

	.word {
		max-width: 628px;
		margin: 0 auto;
		/* padding: 1em; */
		padding: 0.9em;
		font-size: 34px;
		background: #fbffd7;
		border-bottom: 2px dashed;
		background: #f0f3d7;
		border: 0.1em dashed #dee2c1;
	}
</style>
