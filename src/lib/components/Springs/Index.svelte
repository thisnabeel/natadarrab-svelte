<script>
	import Api from '$lib/api/api.js';
	import { onMount } from 'svelte';
	import Nav from './Nav/Index.svelte';
	import API from '$lib/api/api.js';
	import Passage from './Passage.svelte';
	import {findSurah} from '$lib/functions/surahs';

	let springs;
	let blankTopic = 'Select A Topic';
	let selectedSpringId = null;
	let selectedSpring = null;
	let loadingSpring = false;
	onMount(async () => {
		springs = await API.get('/springs.json');
		console.log({ springs });
	});

	$: {
		if (selectedSpringId) {
			getSpring();
		}
	}

	async function getSpring() {
		loadingSpring = true;
		selectedSpring = null;
		selectedSpring = await API.get(`/concept_springs/${selectedSpringId}.json`);
		loadingSpring = false;
	}

	// $: {
	// 	if (selectedSpring && springs && springs.breakdown[selectedSpring]) {
	// 		console.log('breakdown', extractChapters(springs.breakdown[selectedSpring]));
	// 	}
	// }

	function extractChapters(data) {
		const chapterNumbers = new Set();

		data.forEach((item) => {
			const verses = item.verses;
			const chapterNumber = verses.split(':')[0];

			chapterNumbers.add(chapterNumber);
		});

		return Array.from(chapterNumbers).map((s) => findSurah(s));
	}
</script>

<Nav />

<div class="wrapper">
	{#if springs}
		<select name="" bind:value={selectedSpringId} id="" class="form-control tags">
			<option value={null}>{blankTopic}</option>
			{#each springs as spring}
				<option value={spring.id}>{spring.title}</option>
			{/each}
		</select>
	{/if}

	<div class="spring">
		{#if loadingSpring}
			<h1>Loading...</h1>
		{/if}
		{#if selectedSpring}
			<div class="description">
				{@html selectedSpring.description}
			</div>
			<ul class="clean-list surahs">
				{#each extractChapters(selectedSpring.segments) as surah}
					<li class="surah">{surah.title}</li>
				{/each}
			</ul>
			<br />
			<ul class="clean-list">
				{#each selectedSpring.segments as segment}
					<li>
						<Passage {segment} />
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>

<style>
	.tags {
		font-size: 34px;
	}

	select {
		margin: 1em auto;
	}

	.wrapper {
		max-width: 550px;
		display: block;
		margin: 0 auto;
	}

	.surahs .surah {
		display: -webkit-inline-box;
		padding: 10px;
		text-align: right;
		border: 1px solid #56c0e0;
		margin: 1px;
		font-size: 20px;
		float: right;
	}

	.surahs {
		display: inline-block;
	}

	.description {
		position: relative;

		font-family: 'Merriweather', serif;
		font-size: 21px;
		font-weight: 300;
		line-height: 1.58em;
		margin: 0 auto;
		margin-bottom: 10px;
		max-width: 740px;
		background-color: #ecfbff;

		padding: 20px;
	}
</style>
