<script>
	import { page } from '$app/stores';
	import API from '$lib/api/api';
	import VerseSliced from '$lib/components/Quran/Verses/Verse/VerseSliced.svelte';
	import Spinner from '$lib/components/Spinner/Spinner.svelte';
	import { selectedSegment, editMode } from '$lib/components/QuranFlow/store';
	import Gif from '../Gif.svelte';
	import Verse from '../Verse/Verse.svelte';

	export let segment;

	export let selected = false;
	let verses;

	import { inview } from 'svelte-inview';

	let shownVerseIndex = 0;

	let isInView;
	const options = {};

	let unsaved = false;
	let springs = null;

	let loadingSegment = false;

	$: {
		segment;
		unsaved = false;
	}

	$: {
		if (isInView && !springs) {
			getSprings();
		}
	}

	$: getSegment(selected);

	function select() {
		selected = !selected;
	}

	async function getSegment(selected) {
		if (!selected) return;
		loadingSegment = true;
		segment.versesList = await API.get('/quran/verses/' + segment.verses + '.json');
		console.log({ segment });
		loadingSegment = false;
	}

	async function getSprings() {
		springs = await API.get(`/segments/${segment.id}/springs.json`);
		console.log({ springs });
	}

	function changed() {
		unsaved = true;
	}

	async function saveSegment() {
		springs = await API.put(`/segments/${segment.id}.json`, {
			gifs: segment.gifs
		});
		console.log({ springs });
		unsaved = false;
	}
	$: lang = $page.params.language;
	$: langd = lang ? segment.translations[lang] : segment.summary;
</script>

<div class="segment">
	{#if $editMode}
		<div
			use:inview={options}
			on:inview_change={(event) => {
				const { inView, entry, scrollDirection, observer, node } = event.detail;
				isInView = inView;
			}}
		>
			<div class="panel" class:unsaved>
				<input
					type="text"
					class="ref form-control"
					bind:value={segment.verses}
					on:keyup={changed}
				/>
				<div class="btn btn-outline-info" on:click={() => {}}>
					<i class="fa fa-book" />
				</div>
				<textarea
					name=""
					class="form-control"
					id=""
					cols="30"
					rows="5"
					bind:value={segment.summary}
					on:keyup={changed}
				/>
				<div class="gifs">
					<ul class="clean-list">
						{#each segment.gifs as gif, index}
							<Gif
								{gif}
								update={(payload) => {
									segment.gifs[index] = payload;
									unsaved = true;
								}}
								remove={() => (segment.gifs = segment.gifs.filter((g) => g !== gif))}
							/>
						{/each}
						<div class="btn btn-info" on:click={() => (segment.gifs = [...segment.gifs, 'gif'])}>
							<i class="fa fa-plus" />
						</div>
						<div class="btn btn-warning" on:click={() => saveSegment()}>
							<i class="fa fa-save" />
						</div>
					</ul>
				</div>
				{#if springs}
					<div class="springs">
						<ul class="clean-list">
							{#each springs as item}
								<li class="spring">{item.spring.title}</li>
							{/each}
							<div class="btn btn-outline-info"><i class="fa fa-plus" /></div>
						</ul>
					</div>
				{/if}
			</div>
		</div>
	{:else}
		<span class={`verses ${lang}`} on:click={select} class:selected>
			{#if langd.indexOf('-') === 0}
				{@html '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'}{langd.substring(1)}
			{:else}
				{langd}
			{/if}
		</span>
	{/if}
</div>
{#if selected}
	{#if segment.versesList}
		<ul class="verses">
			<div class="ref">- {segment.verses}</div>

			<input
				type="range"
				bind:value={shownVerseIndex}
				min="0"
				max={segment.versesList.length - 1}
				style={'padding: 10; width: 90%; margin: 20px; direction: rtl'}
			/>
			{#each segment.versesList as verse, index}
				{#if index === shownVerseIndex}
					<Verse {verse} />
				{/if}
			{/each}
		</ul>
	{/if}

	{#if loadingSegment}
		<Spinner>Loading Verses...</Spinner>
	{/if}
{/if}

<style>
	.ref {
		padding: 10px;
		color: rgb(40, 117, 91);
		display: block;
		width: max-content;
		margin-bottom: 10px;
		border-radius: 10px;
	}
	.verses.selected {
		background-color: #defff6;
		display: block;
	}

	.panel {
		background-color: #ccc;
		padding: 1em;
		border-radius: 0.3em;
		margin-bottom: 10px;
	}

	.panel .ref {
		background-color: rgb(240, 255, 218);
	}

	.panel.unsaved {
		background-color: rgb(249, 55, 55);
	}

	.springs .spring {
		display: inline-block;
		padding: 10px;
		border: 1px solid;
		margin: 3px;
		border-radius: 6px;
		background: #c5f0ff;
	}

	.gifs {
		background: #d08300;
		padding: 10px;
	}

	.gif img {
		max-width: 100%;
	}

	.urdu {
		direction: rtl;
		display: block;
		font-size: 18px;
		font-family: 'Noto Nastaliq Urdu', serif;
		font-optical-sizing: auto;
		font-weight: lighter;
		font-style: normal;
		line-height: 40px;
		border-bottom: 1px solid #eee;
		padding: 10px 0;
	}
</style>
