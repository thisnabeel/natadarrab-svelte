<script>
	import ArabicVerse from '$lib/components/QuranFlow/Verse/Verse.svelte';
	import BibleVerse from '$lib/components/BibleFlow/Verse/Verse.svelte';

	import GopherBlock from '$lib/components/QuranFlow/Gopher/Word.svelte';
	import { gopher } from '$lib/components/QuranFlow/store';
	import { device } from '$lib/utils/device';

	export let verse;

	let selectedWord;
	function wordHandler(payload) {
		// console.log({ payload });
		selectedWord = payload;
	}

	function checkScriptDominance(text) {
		if (!text || !text['original']) return;
		text = text['original'];
		let greekCount = 0;
		let hebrewCount = 0;

		for (let i = 0; i < text.length; i++) {
			let char = text[i];
			let codePoint = char.codePointAt(0);

			// Greek Unicode block: U+0370 to U+03FF
			if (codePoint >= 0x0370 && codePoint <= 0x03ff) {
				greekCount++;
			}
			// Hebrew Unicode block: U+0590 to U+05FF
			else if (codePoint >= 0x0590 && codePoint <= 0x05ff) {
				hebrewCount++;
			}
		}

		let totalCount = greekCount + hebrewCount;
		if (totalCount === 0) {
			return 'Neither Greek nor Hebrew characters dominate.';
		}

		let greekRatio = greekCount / totalCount;
		let hebrewRatio = hebrewCount / totalCount;

		if (greekRatio > 0.7) {
			return 'greek';
		} else if (hebrewRatio > 0.7) {
			return 'hebrew';
		} else {
			return null;
		}
	}

	// $: console.log(checkScriptDominance(verse));
</script>

{#if verse && verse['arabic']}
	<li class:mobile={$device === 'mobile'}>
		<ArabicVerse {verse} {wordHandler} />

		{#if selectedWord}
			<div class="gopher">
				<GopherBlock word={selectedWord.item} handleClose={() => (selectedWord = null)} />
			</div>
		{/if}
	</li>
{:else if verse && verse['original']}
	<li class:mobile={$device === 'mobile'}>
		<BibleVerse {verse} lang={checkScriptDominance(verse)} />
	</li>
{/if}

<style>
	.mobile {
		max-width: 97vw;
	}
	:global(.gopher) {
		position: absolute;
		top: 50px;
		right: -200px;
		width: 234px;
	}

	.mobile :global(.gopher) {
		position: static;
		width: 100%;
	}

	:global(.gopher > article) {
		padding: 30px;
		border-radius: 12px;
	}

	li {
		max-width: 50vw;
		display: block;
		margin: 0 auto;
		padding: 20px;
		background: #fff;
		border-radius: 4px;
		margin-top: 2px;
		text-align: right;
		position: relative;
	}
</style>
