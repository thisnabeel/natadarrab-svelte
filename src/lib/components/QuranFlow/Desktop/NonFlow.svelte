<script>
	import API from '$lib/api/api';
	import { onMount } from 'svelte';
	import Verse from '../Verse/Verse.svelte';

	import { selectedSurah, grid } from '$lib/components/QuranFlow/store';
	let verses;

	let trans;

	$: $selectedSurah && fetchVerses();

	async function fetchVerses() {
		verses = await API.get(`quranflow/surah/${$selectedSurah}/verses`);
		console.log(verses);
	}

	onMount(() => {
		grid.set('uno');
	});
</script>

{#if verses}
	<div class={'wrapper ' + $grid}>
		<div class="left-col">
			<ul class="verses">
				{#each verses as verse}
					<Verse {verse} inline={true} expandable={true} />
				{/each}
			</ul>
		</div>
		<div class="right-col" />
	</div>
{/if}

<style>
	.verses {
		display: block;
		max-width: 600px;
		margin: 0 auto;
		text-align: right;
	}

	.wrapper {
		display: flex;
	}

	.left-col {
		flex: 1 1 66%;
		max-width: 66%;
		padding: 3em;
		height: 90vh;
		overflow-y: scroll;
	}
	/* 
	
	*/
	.uno {
		display: block;
	}
	.uno .left-col {
		max-width: 100%;
	}

	.right-col {
		flex: 1 1 33%;
		max-width: 33%;
		padding: 0.5em;
		background-color: rgb(241, 255, 241);
	}

	.extra-right-col {
		/* padding: 0.5em; */
	}

	.tri-view .left-col {
		flex: 1 1 40%;
		max-width: 40%;
	}

	.tri-view .right-col {
		flex: 1 1 40%;
		max-width: 40%;
	}

	.tri-view .extra-right-col {
		flex: 1 1 20%;
		max-width: 20%;
	}

	/*  */
	.large-right .left-col {
		flex: 1 1 20%;
		max-width: 30%;
	}

	.large-right .right-col {
		flex: 1 1 40%;
		max-width: 40%;
	}

	.large-right .extra-right-col {
		flex: 1 1 40%;
		max-width: 40%;
	}

	.extra-right-col .menu li {
		padding: 1em;
		margin: 1em;
		text-align: center;
		border: 1px solid #eee;
		border-radius: 6px;
	}
</style>
