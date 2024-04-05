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
			<small>NonVerbs:</small>
			<ul>
				{#each rootWords.non_verbs || [] as non_verb}
					<li>{non_verb.nv_word} <br /><small>{non_verb.nv_translation}</small></li>
				{/each}
			</ul>
			<small>Verbs:</small>
			<ul>
				{#each rootWords.verbs || [] as verb}
					<li>{verb.v_word} <br /><small>{verb.v_translation}</small></li>
				{/each}
			</ul>
		</div>
	{/if}

	<div class="word-container">
		{#if root}
			<h1 class="root" on:click={() => findMoreRoot()}>{root}</h1>
		{/if}
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
	</div>
</article>

<style>
	.rootWords li {
		display: inline-block;
		font-size: 26px;
		padding: 10px;
		background-color: #eee;
		border: 1px solid #ccc;
		margin: 10px;
		border-radius: 8px;
		text-align: center;
	}

	.rootWords ul {
		overflow-x: scroll;
		margin: 20px;
		margin-top: -22px;
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
		width: 100%;
		display: block;
		position: relative;
		padding-bottom: 32px;
	}

	article > div {
		padding: 10px;
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
	.word-container {
		position: relative;
		border-top: 1px solid #ccc;
	}
</style>
