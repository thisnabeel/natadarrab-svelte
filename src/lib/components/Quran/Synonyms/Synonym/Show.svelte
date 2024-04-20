<script>
	import API from '$lib/api/api';
	import convertRomanToArabic from '$lib/functions/eng_roots_to_arabic';

	export let synonym;

	let show = false;
	let addingWord = false;
	let rootWords = [];
	let searchRoots = '';

	async function loadSynonym() {
		show = !show;
		// API
	}

	function addWord() {
		addingWord = true;
	}

	async function findWords() {
		let root = convertRomanToArabic(searchRoots);
		console.log({ root });

		rootWords = await API.post(`/qf/find_root_words.json`, {
			root: root
		});
		console.log({ rootWords });
	}

	async function stampWord(word, wordType) {
		console.log({ word });
		addingWord = false;
	}
</script>

<div class="synonym">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="title"
		class:selected={show}
		on:click={() => {
			loadSynonym();
		}}
	>
		{synonym.title}
	</div>

	{#if show}
		<div class="details">
			<div class="row">
				<div class="col-lg-6 col-md-6">
					{synonym.overview}
				</div>
				<div class="col-lg-6 col-md-6">
					{synonym.list}
				</div>
			</div>
			<!--  -->
			<br />
			<hr />
			<br />
			<div class="words">
				{#each synonym.words || [] as word}{/each}
				{#if addingWord}
					<div class="adding-word">
						<input type="text" class="form-control" bind:value={searchRoots} on:keyup={findWords} />
						{#if rootWords}
							<div class="search-results">
								{#each rootWords.verbs || [] as word}
									<li on:click={(stampWord(word), 'v')}>{word.v_word}</li>
								{/each}
								{#each rootWords.non_verbs || [] as word}
									<li on:click={(stampWord(word), 'nv')}>{word.nv_word}</li>
								{/each}
							</div>
						{/if}
					</div>
				{/if}
				<div class="add">
					<div class="btn btn-primary" on:click={addWord}><i class="fa fa-plus" /></div>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.synonym {
		font-size: 18px;
		margin: 8px;
	}

	.selected {
		font-weight: bold;
		font-size: 24px;
	}

	.details {
		background-color: #eee;
		padding: 14px;
	}

	.adding-word {
		max-width: 145px;
		position: relative;
	}

	.words > div {
		display: inline-block;
	}

	.search-results {
		position: absolute;
		background: #fff;
		width: 100%;
		list-style: none;
		overflow-y: scroll;
		height: 200px;
	}

	.search-results li {
		padding: 10px;
	}

	.search-results li:hover {
		background-color: #eee;
	}
</style>
