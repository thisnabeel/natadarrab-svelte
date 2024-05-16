<script>
	export let saveManifest;
	let selection = {};

	let selectionOptions = {
		tense: ['Past', 'Present', 'Command', 'Forbidding'],
		gender: ['Masculine', 'Feminine', 'Neutral'],
		person: ['3rd Person (He/She/They)', '2nd Person (You)', '1st Person (I/We)'],
		number: ['Singular', 'Dual', 'Plural'],
		rnj: ['Rafa', 'Nasb', 'Jarr']
	};

	let categoryOptions = {
		Fil: ['tense', 'gender', 'person', 'number'],
		Ism: ['gender', 'number', 'rnj']
	};

	$: sanitizeSelection(selection);

	function sanitizeSelection() {
		if (!selection['word_type']) return;
		saveManifest(selection);
		console.log(selection);
	}

	function removeKeysNotInArray(obj, keysArray) {
		// Get the keys of the object
		const objKeys = Object.keys(obj);
		console.log({ objKeys });
		// Iterate over the object keys
		for (let key of objKeys) {
			// If the key is not in the array, delete it from the object
			if (!keysArray.includes(key)) {
				delete obj[key];
			}
		}
	}
</script>

<div class="selectors">
	<div class="row">
		{#each ['Ism', 'Fil', 'Harf'] as category}
			<div class="col-lg-4">
				<li
					class:active={selection['word_type'] === category}
					on:click={() => (selection['word_type'] = category)}
				>
					{category}
				</li>
			</div>
		{/each}
	</div>
	{#if selection['word_type']}
		<div class="flex">
			{#each categoryOptions[selection['word_type']] as category}
				<div class="category">
					<ul>
						{#each selectionOptions[category] as cat}
							<li
								class:active={selection[category] === cat}
								on:click={() => (selection[category] = cat)}
							>
								{cat}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.selectors li {
		background-color: #eee;
		padding: 10px;
		margin: 10px;
		border-radius: 14px;
		border: 1px solid #ccc;
	}

	.selectors li.active {
		background-color: #c2ebff;
	}

	.flex {
		display: flex;
	}

	.flex .category {
		flex: 1 1;
	}
</style>
