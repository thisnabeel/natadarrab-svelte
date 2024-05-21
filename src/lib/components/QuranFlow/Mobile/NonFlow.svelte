<script>
	import API from '$lib/api/api';
	import { onMount } from 'svelte';
	import Verse from '../Verse/Verse.svelte';

	import { selectedSurah } from '$lib/components/QuranFlow/store';
	let verses;

	$: $selectedSurah && fetchVerses();

	async function fetchVerses() {
		verses = await API.get(`quranflow/surah/${$selectedSurah}/verses`);
		console.log(verses);
	}
</script>

{#if verses}
	<ul class="verses">
		{#each verses as verse}
			<Verse {verse} />
		{/each}
	</ul>
{/if}
