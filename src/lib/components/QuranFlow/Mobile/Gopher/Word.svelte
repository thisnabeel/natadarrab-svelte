<script>
	import API from '$lib/api/api';
	import { gopher } from '../store';
	export let word;
	console.log({ word });
	$: base = word.v_word || word.nv_word;
	$: root = word.nv_root || word.v_root;
	$: translation = word.nv_translation || word.v_translation;
	let rootWords = [];

	async function findMoreRoot() {
		rootWords = await API.post(`/qf/find_root_words.json`, {
			root: root
		});
		console.log({ rootWords });
	}
</script>

<article>
	{#if rootWords && (rootWords.non_verbs || rootWords.verbs)}
		<div class="rootWords">
			<ul>
				{#each rootWords.non_verbs || [] as non_verb}
					<li>{non_verb.nv_word}</li>
				{/each}
			</ul>
			<ul>
				{#each rootWords.verbs || [] as verb}
					<li>{verb.v_word}</li>
				{/each}
			</ul>
		</div>
	{/if}

	<h1 class="root" on:click={() => findMoreRoot()}>{root}</h1>
	<h1 class="def">
		<div class="word">{base}</div>
		<br />{translation}
	</h1>
	<div
		class="close"
		on:click={() =>
			gopher.set({
				kind: null,
				item: null
			})}
	>
		<i class="fa fa-times" />
	</div>
</article>

<style>
	.rootWords li {
		display: inline;
		font-size: 32px;
		padding: 10px;
		background-color: #eee;
		border: 1px solid #ccc;
		margin: 10px;
		border-radius: 8px;
	}

	.rootWords ul {
		overflow-x: scroll;
		margin: 20px;
		height: -moz-max-content;
		height: max-content;
		padding: 20px 0;
		text-wrap: nowrap;
	}
	.close {
		position: absolute;
		top: 2px;
		left: 2px;
		font-size: 24px;
		color: #ccc;
	}
	article {
		background-color: #fff1de;
		padding: 10px;
		width: 100%;
		display: block;
		position: relative;
		padding-bottom: 32px;
	}

	.root {
		font-size: 24px;
		text-align: right;
	}
	.word {
		font-size: 42px;
	}
	.def {
		font-size: 32px;
		text-align: center;
	}
</style>
