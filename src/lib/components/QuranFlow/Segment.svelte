<script>
	import API from '$lib/api/api';
	import { selectedSegment } from '$lib/stores/quranflow';
	import Gif from './Gif.svelte';

	export let segment;
	export let select;
	export let editMode;

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
</script>

<div class="segment">
	{#if editMode}
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
		<span
			class="verses"
			on:click={select}
			class:selected={$selectedSegment && $selectedSegment.id === segment.id}
		>
			{#if segment.summary.indexOf('-') === 0}
				{@html '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'}{segment.summary.substring(1)}
			{:else}
				{segment.summary}
			{/if}
		</span>
	{/if}
</div>

<style>
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
</style>
