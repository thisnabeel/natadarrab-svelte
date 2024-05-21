<script>
	import { goto } from '$app/navigation';
	import API from '$lib/api/api';
	import { onMount } from 'svelte';

	export let deliver;

	export let searchInput = '';
	let searchElement = null;
	let error = '';
	let suggesting = false;

	export let words = [];
	let rows = [];

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

	function isRoot(str) {
		return /^[a-zA-Z\s]+$/.test(str);
	}

	function isVerse(str) {
		return /^[0-9:-]+$/.test(str);
	}
</script>

<input
	type="text"
	id="spotlight"
	class="spotlight"
	placeholder="Search ..."
	bind:value={searchInput}
	bind:this={searchElement}
	on:keyup={() => {
		rows = [];
		error = '';
		suggesting = true;
	}}
/>
{#if searchInput.length > 0 && suggesting}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	{#if isRoot(searchInput)}
		<div class="query" on:click={findArabicWordsByRoot}>
			Find Arabic Words by Root: {searchInput}
		</div>
	{/if}

	{#if isVerse(searchInput)}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="query"
			on:click={async () => {
				await deliver({
					action: 'verse',
					query: searchInput
				});
				rows = [];
				suggesting = false;
			}}
		>
			{#if searchInput.includes(':')}
				{#if searchInput.includes('-')}
					Go To Aayaat: {searchInput}
				{:else}
					Go To Aayah: {searchInput}
				{/if}
			{:else}
				Go To Surah: {searchInput}
			{/if}
		</div>
	{/if}
{/if}
{#if rows}
	{#each words as word}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="word"
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
		padding: 1em;
		font-size: 34px;
		background: #fbffd7;
	}

	.spotlight {
		padding: 0 10px;
	}
</style>
