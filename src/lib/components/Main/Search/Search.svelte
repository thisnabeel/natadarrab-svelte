<script>
	import { goto } from '$app/navigation';
	import API from '$lib/api/api';
	import { onMount } from 'svelte';

	import Verse from './Verses/Show.svelte';
	export let deliver;

	export let searchInput = '';
	let searchElement = null;
	let error = '';
	let suggesting = false;

	export let words = [];
	export let autostart;
	export let autoid;
	let rows = [];
	export let verses = [];

	onMount(async () => {
		if (autostart && autostart.length > 1) {
			searchInput = autostart;
			await findArabicWordsByRoot();

			if (words) {
				await deliver({
					action: 'word',
					query: searchInput,
					word: words.find((w) => w.id === autoid)
				});
				rows = [];
				words = [];
				suggesting = false;
			}
		}
		fetchJsonData();
	});

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
		rows = [];
		verses = [];
	}

	import { translation } from '$lib/components/QuranFlow/store.js';
	import { device } from '$lib/utils/device';
	import { closeModal } from 'svelte-modals';
	import { showSpotlight } from '$lib/stores/spotlight';

	const fetchJsonData = async () => {
		try {
			const response = await fetch('/translations/english/eng-abdelhaleem.json');

			if (!response.ok) {
				throw new Error('Failed to fetch JSON data');
			}
			translation.set(await response.json());
			console.log('translation');
			console.log($translation);
		} catch (error) {
			console.error(error);
		}
	};

	let findingVerses = false;
	async function findVerse() {
		findingVerses = true;
		console.log({ searchInput });
		const res = await API.post('/revelations/search.json', {
			verses: searchInput
		});
		console.log({ res });
		verses = res;
		words = [];
		findingVerses = false;

		// rows = [];
		// suggesting = false;
		// const root = convertRomanToArabic(searchInput);
		// const res = await API.post('/qf/find_by_root.json', {
		// 	type: 'verb',
		// 	root: root
		// });
		// console.log({ res });
		// words = res;
		// if (res.length === 0) error = 'No Words for ' + searchInput;
		// rows = [];
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
			h: ['ه', 'ح', 'خ'],
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

	function isRoot(str) {
		return /^[a-zA-Z\s]+$/.test(str);
	}

	function isVerse(str) {
		return /^[0-9:-]+$/.test(str);
	}

	$: tryRootSearch(searchInput);

	function debounceSearch(func, delay) {
		let debounceTimer;
		return function (...args) {
			clearTimeout(debounceTimer);
			debounceTimer = setTimeout(() => {
				func;
			}, delay);
		};
	}

	// function debounceSearch(func, delay) {
	// 	let timeoutId;

	// 	return function(...args) {
	// 		clearTimeout(timeoutId);

	// 		timeoutId = setTimeout(() => {
	// 		func.apply(this, args);
	// 		}, delay);
	// 	};
	// }

	function tryRootSearch(input) {
		// Strip whitespace from the input
		const strippedInput = input.replace(/\s/g, '');

		// Check if the input is exactly 3 characters long and consists of only English or Arabic letters
		if (
			(strippedInput.length === 3 || 4) &&
			/^(?:[a-zA-Z]{3}|[\u0600-\u06FF]{3})$/.test(strippedInput)
		) {
			console.log('Input is 3 English or Arabic letters', strippedInput);
			debounceSearch(findArabicWordsByRoot(), 500);
		} else if (input.includes(':')) {
			debounceSearch(findVerse(), 500);
		} else {
			// Optionally, you can handle the case when the input doesn't meet the criteria
			words = [];
			console.log('Input must be exactly 3 English or Arabic letters', strippedInput);
		}
	}
</script>

<input
	type="text"
	id="spotlight"
	class="spotlight"
	class:mobile={$device === 'mobile'}
	placeholder="Search ..."
	bind:value={searchInput}
	bind:this={searchElement}
	on:keyup={() => {
		rows = [];
		error = '';
		suggesting = true;
	}}
/>

<div
	class="close-search btn btn-outline-danger"
	class:mobile={$device === 'mobile'}
	on:click={() => showSpotlight.set(null)}
>
	<i class="fa fa-times" />
</div>

{#if findingVerses}
	<div class="word">Loading Verses...</div>
{/if}

{#if verses.length > 0}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<ul class="verses clean-list" class:mobile={$device === 'mobile'}>
		{#each verses as verse}
			<Verse {verse} />
		{/each}
	</ul>
{/if}

{#if words}
	<div class="results" class:mobile={$device === 'mobile'}>
		{#each words['non_verbs'] || [] as word}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="word non_verb"
				on:click={async () => {
					await deliver({
						action: 'word',
						query: searchInput,
						word: word
					});
					rows = [];
					words = [];
					suggesting = false;
				}}
			>
				{word.nv_word} <br />{word.nv_translation}
			</div>
		{/each}
		<br />
		{#each words['verbs'] || [] as word}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="word verb"
				on:click={async () => {
					await deliver({
						action: 'word',
						query: searchInput,
						word: word
					});
					rows = [];
					words = [];
					suggesting = false;
				}}
			>
				{word.v_word} <br />{word.v_translation}
			</div>
		{/each}
	</div>
{/if}

{#if error.length > 0}
	<div class="error">
		{error}
	</div>
{/if}

<style>
	.query {
		max-width: 628px;
		background: #a7ffd2;
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
		display: inline-block;
		font-size: 20px;
		border-radius: 4px;
		text-align: center;
	}

	.word.non_verb {
		background: #beffb3;
	}

	.word.verb {
		background: #ffedfe;
	}

	.word:hover {
		background: #e0e3c7;
		border: 0.1em dashed #dee2c1;
		padding: 0.9em;
		cursor: pointer;
	}

	.spotlight {
		border-radius: 6px;
		margin: 0 auto;
		display: block;
		padding: 10px;
		width: 50%;
	}

	input.mobile {
		font-size: 42px;
		width: 80%;
		margin-left: 10px;
	}

	.close-search {
		top: 4px;
		right: 21%;
		position: absolute;
	}
	.close-search.mobile {
		position: absolute;
		top: 0%;
		right: 11px;
		width: 13%;
		height: 81px;
		font-size: 46px;
	}

	.results {
		max-height: 55vh;
		overflow-y: scroll;
		max-width: 50vw;
		margin: 0 auto;
	}

	.verses {
		overflow-y: scroll;
		max-height: 522px;
		margin-top: 6px;
	}

	.mobile.verses {
		max-height: 77vh;
	}

	.mobile.results {
		max-width: 100vw;
		margin: 0 auto;
		max-height: 88vh;
	}
</style>
