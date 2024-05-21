<script>
	import { onMount } from 'svelte';
	import Api from '$lib/api/api.js';
	import Nav from './Nav.svelte';
	import Segment from './Segment.svelte';
	import API from '$lib/api/api.js';
	import Spinner from '../../Spinner/Spinner.svelte';

	import Playlist from '../Dig/Playlist.svelte';
	import {
		grid,
		playlists,
		selectedSegment,
		rightNavTab,
		segments,
		editMode,
		flow
	} from '$lib/components/QuranFlow/store';
	import { page } from '$app/stores';
	import { user } from '$lib/stores/user';
	import { gopher } from '$lib/components/QuranFlow/store';

	import Notes from '../Dig/Notes.svelte';
	import Word from './Gopher/Word.svelte';
	import NonFlow from './NonFlow.svelte';

	// Call the function to fetch JSON data when the component is mounted

	let loadingSurah = false;
	let loadingSegment = false;

	let listMode = false;
	let verses;
	let content_playlists;

	onMount(() => {
		fetchPlaylists();
	});

	async function fetchPlaylists() {
		playlists.set(await API.get('/content_playlists.json'));
	}

	function expandRange(rangeString) {
		if (!rangeString.includes('-')) return [rangeString];
		const [start, end] = rangeString.split('-');

		const [startLine, startColumn] = start.split(':').map(Number);
		const [endLine, endColumn] = end.split(':').map(Number);

		const result = [];

		for (let line = startLine; line <= endLine; line++) {
			for (
				let column = line === startLine ? startColumn : 1;
				column <= (line === endLine ? endColumn : Infinity);
				column++
			) {
				result.push(`${line}:${column}`);
			}
		}

		return result;
	}
	async function fetchSurah(surah) {
		loadingSurah = true;
		segments.set([]);
		selectedSegment.set(null);
		verses = false;
		let verse = surah;
		const s = surah.split(':')[0];
		surah = s;

		segments.set(await Api.get(`/quranflow/surah/${surah}.json`));
		console.log('segments', $segments);
		loadingSurah = false;

		findSegmentByVerse(verse.split('-')[0]);
	}

	function findSegmentByVerse(verse) {
		const list = $segments.map((s) => {
			return { id: s.id, verses: expandRange(s.verses) };
		});
		const found = list.find((s) => s.verses.includes(verse));
		console.log({ found });
		if (!found) return;
		console.log($segments);
		selectedSegment.set($segments.find((s) => s.id === found.id));
		selectSegment($selectedSegment);
	}

	function selectSegment(segment) {
		verses = false;
		if ($selectedSegment && $selectedSegment.id === segment.id) {
			selectedSegment.set(null);
			return;
		} else {
			selectedSegment.set(segment);
			loadingSegment = true;
		}
	}
</script>

<div class="up">
	<Nav {fetchSurah} />
</div>
<div class="wrapper">
	{#if $flow}
		{#if $segments && !loadingSurah}
			<div class="summary">
				{#each $segments as segment}
					<Segment {segment} select={() => selectSegment(segment)} />
				{/each}
			</div>
		{:else if loadingSurah}
			<Spinner>Loading Surah...</Spinner>
		{/if}
	{:else}
		<NonFlow />
	{/if}
</div>

{#if $gopher.kind && $gopher.item}
	<div class="gopher">
		{#if $gopher.kind === 'word'}
			<Word word={$gopher.item} />
		{/if}
	</div>
{/if}

<style>
	.gopher {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
	.up {
		position: fixed;
		top: 0;
		width: 100%;

		background: #fff;
		z-index: 9999;
	}
	.summary {
		margin-top: 10px;
		padding: 32px;
	}
	.wrapper {
		max-width: 100%;
		overflow-x: hidden;
		margin-top: 70px;
	}
	.nav li {
		padding: 10px;
	}

	.nav .active {
		background-color: #000;
		color: #fff;
	}
	.wrapper {
		/* display: flex; */
	}

	.mini-header {
		max-width: 350px;
		display: block;
		margin: 0 auto;
	}

	img {
		vertical-align: middle;
	}

	.left-col {
		flex: 1 1 100%;
		max-width: 100%;
		padding: 3em;
		height: 90vh;
		overflow-y: scroll;
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

	.verses {
		overflow-x: hidden;
	}

	.extra-right-col .menu li {
		padding: 1em;
		margin: 1em;
		text-align: center;
		border: 1px solid #eee;
		border-radius: 6px;
	}

	.cta-right {
		padding: 12px;
		font-size: 24px;

		color: #7a9a7a;
	}
</style>
