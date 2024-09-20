<script>
	import ArabicVerse from '$lib/components/QuranFlow/Verse/Verse.svelte';
	import GopherBlock from '$lib/components/QuranFlow/Gopher/Word.svelte';
	import { gopher } from '$lib/components/QuranFlow/store';

	export let verse;

	let selectedWord;
	function wordHandler(payload) {
		// console.log({ payload });
		selectedWord = payload;
	}
</script>

{#if verse && verse['arabic']}
	<li>
		<ArabicVerse {verse} {wordHandler} />

		{#if selectedWord}
			<div class="gopher">
				<GopherBlock word={selectedWord.item} />
			</div>
		{/if}
	</li>
{:else if verse && verse['original']}
	<li>
		{@html verse['original']}
	</li>
{/if}

<style>
	:global(.gopher) {
		position: absolute;
		top: 50px;
		right: -200px;
		width: 234px;
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
