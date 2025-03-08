<script>
	import { onMount } from 'svelte';
	import Api from '$lib/api/api.js';
	import Nav from './Nav.svelte';
	import Segment from './Segment.svelte';
	import API from '$lib/api/api.js';
	import Spinner from '../Spinner/Spinner.svelte';
	import Playlist from './Dig/Playlist.svelte';
	import {
		grid,
		playlists,
		selectedSegment,
		rightNavTab,
		segments,
		editMode
	} from '$lib/components/QuranFlow/store';
	import { page } from '$app/stores';
	import { user } from '$lib/stores/user';
	import Verse from './Verse/Verse.svelte';
	import Notes from './Dig/Notes.svelte';
	let trans = null;

	// Function to fetch and parse JSON from a local file
	import { translation } from '$lib/components/QuranFlow/store.js';

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

	// Call the function to fetch JSON data when the component is mounted

	let loadingSurah = false;
	let loadingSegment = false;

	let listMode = false;
	let verses;
	let content_playlists;

	onMount(() => {
		fetchJsonData();
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
		console.log($segments);
		try {
			selectedSegment.set($segments.find((s) => s.id === found.id));
			selectSegment($selectedSegment);
		} catch (error) {}
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

	async function getSegment(segment) {
		verses = await API.get('/quran/verses/' + segment.verses + '.json');
		console.log({ verses });
		loadingSegment = false;
	}

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

{#if $device === 'mobile'}
	<Mobile {findSegmentByVerse} />
{:else}
	<Desktop {findSegmentByVerse} />
{/if}
