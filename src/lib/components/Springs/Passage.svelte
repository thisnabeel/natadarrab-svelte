<script>
	import API from '$lib/api/api';
	import { onMount } from 'svelte';
	import {findSurah} from '$lib/functions/surahs';

	export let segment;

	let printed_verses = null;

	$: {
		segment.verses;
		printed_verses = null;
	}

	$: surah = findSurah(segment.verses.split(':')[0]);
	$: coverage = calculateCoverage(surah.folder, segment.verses);
	// $: console.log({ covereage });
	function calculateCoverage(folder, range) {
		// Parse the start and end verses from the range
		let start;
		let end;
		if (range.includes('-')) {
			[start, end] = range.split('-').map((verse) => verse.trim());
		} else {
			start = range;
			end = range;
		}

		// Find the index of the start and end verses in the folder array
		const startIndex = folder.indexOf(start);
		const endIndex = folder.indexOf(end);

		// Check if the range is valid
		if (startIndex === -1 || endIndex === -1 || startIndex >= endIndex) {
			if (startIndex === endIndex) {
			} else {
				console.error('Invalid range');
				return [];
			}
		}

		const totalVerses = folder.length;
		const uncoveredPercentage = (startIndex / totalVerses) * 100;
		const coveredPercentage = ((endIndex - startIndex + 1) / totalVerses) * 100;
		const remainingPercentage = 100 - (uncoveredPercentage + coveredPercentage);

		return [uncoveredPercentage, coveredPercentage, remainingPercentage];
	}
	async function showPassage() {
		printed_verses = await API.post('/print_verses.json', {
			verses: segment.verses
		});
		// console.log({ springs });
	}
</script>

<h3>
	In <span class="surah-name">{surah.title}</span>
</h3>

<!--  -->
<div class="progress" style="max-width: 100%">
	{#each coverage as percentage, index}
		<div
			class="progress-bar uncovered"
			class:bg-primary={index === 1}
			style="width: {percentage}%"
		/>
	{/each}
</div>

<div class="summary">{segment.summary}</div>
<span class="btn btn-block btn-info select-verses" on:click={() => showPassage(segment.verses)}
	>{segment.verses}</span
>
{#if printed_verses}
	<div class="printed_verses">
		{#each printed_verses as verse}
			{verse.arabic}<span class="ref">{verse.ref}</span>
		{/each}
	</div>
{/if}
<hr />

<style>
	.summary {
		background-color: #f5f5f5;
		padding: 16px;
		border: 10px solid #fff;
		margin: 0 auto;
	}

	.select-verses {
		display: block;
		width: 100%;
		color: #fff;
		font-size: 32px;
	}

	.printed_verses {
		direction: rtl;
		text-align: right;
		font-size: 24px;
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
		padding: 10px;
	}

	.ref {
		padding: 4px 10px;
		background: beige;
		border-radius: 10px;
		margin: 10px;
		font-size: 20px;
	}

	.surah-name {
		padding: 4px 10px;
		background: beige;
		border-radius: 10px;
		/* margin: 10px; */
		font-size: 28px;
	}

	.progress-bar.uncovered {
		background-color: #ccc;
	}
</style>
