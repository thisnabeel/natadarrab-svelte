<script>
	import { page } from '$app/stores';
	import API from '$lib/api/api';
	import { selectedSegment, editMode } from '$lib/components/QuranFlow/store';
	import Gif from './Gif.svelte';

	export let segment;
	export let select;

	import { inview } from 'svelte-inview';

	let isInView;
	const options = {};

	let unsaved = false;
	let springs = null;

	$: {
		segment;
		unsaved = false;
	}

	$: {
		if (isInView && !springs) {
			getSprings();
		}
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

	$: selected = $selectedSegment && $selectedSegment.id === segment.id;
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
			{#if selected}
				<div class="ref">{segment.verses}</div>
			{/if}
			{#if langd.indexOf('-') === 0}
				{@html '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'}{langd.substring(1)}
			{:else}
				{langd}
			{/if}
		</span>
	{/if}
</div>

<style>
	.ref {
		padding: 10px;
		background-color: rgb(170, 238, 215);
		display: block;
		width: max-content;
		margin-bottom: 10px;
		border-radius: 10px;
	}
	.verses.selected {
		background-color: #b5ffea;
		display: block;
		border: 6px dashed #93e0ca;
		padding: 13px;
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
