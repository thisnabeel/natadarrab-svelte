<script>
	import { onMount } from 'svelte';
	import Api from '$lib/api/api.js';
	import Nav from '../Nav.svelte';
	import Segment from '../Segment.svelte';
	import API from '$lib/api/api.js';
	import Spinner from '../../Spinner/Spinner.svelte';
	import Playlist from '../Dig/Playlist.svelte';
	import NonFlow from './NonFlow.svelte';
	import Word from '../Mobile/Gopher/Word.svelte';
	import { gopher } from '../store';

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
	import Verse from '../Verse/Verse.svelte';
	import Notes from '../Dig/Notes.svelte';

	let selectedSurah = 1;
	// Function to fetch and parse JSON from a local file

	// Call the function to fetch JSON data when the component is mounted

	let loadingSurah = false;
	let loadingSegment = false;

	let listMode = false;
	let verses;
	let content_playlists;
	export let findSegmentByVerse;

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
		selectedSurah = s;

		if ($flow) {
			alert('hi');
			segments.set(await Api.get(`/quranflow/surah/${surah}.json`));
			console.log('segments', $segments);
			loadingSurah = false;

			findSegmentByVerse(verse.split('-')[0]);
		}
	}

	function selectSegment(segment) {
		selectedSegment.set(null);
		verses = false;
		if (selectedSegment.id === segment.id) {
			return;
		} else {
			selectedSegment.set(segment);
			loadingSegment = true;
			getSegment(segment);
		}
	}

	selectedSegment.subscribe((s) => {
		getSegment(s);
	});

	async function getSegment(segment) {
		verses = await API.get('/quran/verses/' + segment.verses + '.json');
		console.log({ verses });
		loadingSegment = false;
	}

	$: displayView = $page.url.searchParams.get('view');

	import { device } from '$lib/utils/device.js';
	import Desktop from '$lib/components/QuranFlow/Desktop/Index.svelte';
	import Mobile from '$lib/components/QuranFlow/Mobile/Index.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400..700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Nav {fetchSurah} />

{#if $gopher.kind && $gopher.item}
	<div class="gopher">
		{#if $gopher.kind === 'word'}
			<Word word={$gopher.item} />
		{/if}
	</div>
{/if}

{#if $flow}
	<div class={'wrapper ' + $grid}>
		<div class="left-col">
			{#if $segments && !loadingSurah}
				<div class="summary">
					{#each $segments as segment}
						<Segment {segment} select={() => selectSegment(segment)} />
					{/each}
				</div>
			{:else if loadingSurah}
				<Spinner>Loading Surah...</Spinner>
			{/if}
		</div>
		<div class="right-col">
			{#if $selectedSegment}
				{#if verses}
					<ul class="verses">
						{#each verses as verse}
							<Verse {verse} />
						{/each}
					</ul>
				{/if}

				{#if loadingSegment}
					<Spinner>Loading Verses...</Spinner>
				{/if}
			{:else}
				<div class="cta-right">
					No Selected Passage yet. Click one of the sentences on the left to show it's corresponding
					verses.
				</div>
			{/if}
		</div>
		{#if $selectedSegment && $user && $user.admin}
			<div class="extra-right-col">
				{#if $rightNavTab > 0}
					{#if $rightNavTab === 1}
						<Playlist bg={'aliceblue'} />
					{/if}
					{#if $rightNavTab === 2}
						<Playlist bg={'aliceblue'} />
					{/if}
					{#if $rightNavTab === 3}
						<Playlist bg={'aliceblue'} />
					{/if}
					{#if $rightNavTab === 4}
						<Notes bg={'aliceblue'} />
					{/if}
				{:else}
					<div class="menu">
						<ul class="clean-list">
							<li on:click={() => rightNavTab.set(1)}>Playlists</li>
							<li on:click={() => rightNavTab.set(2)}>Tags</li>
							<li on:click={() => rightNavTab.set(3)}>Gifs</li>
							<li on:click={() => rightNavTab.set(4)}>Notes</li>
						</ul>
					</div>
				{/if}
			</div>
		{/if}
	</div>
{:else}
	<NonFlow />
{/if}

<style>
	.nav li {
		padding: 10px;
	}

	.nav .active {
		background-color: #000;
		color: #fff;
	}
	.wrapper {
		display: flex;
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
		flex: 1 1 66%;
		max-width: 66%;
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
		height: 85vh;
		overflow-y: scroll;
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

	.gopher {
		position: fixed;
		bottom: 0;
		width: 95vw;
		z-index: 9999;
	}
</style>
