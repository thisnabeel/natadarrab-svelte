<script>
	import API from '$lib/api/api';

	export let ref;
	let printed = [];

	async function getVerse() {
		printed = await API.get('/quran/verses/' + ref + '.json');
		console.log({ printed });
	}
</script>

<div class="ref">
	<input class="form-control" bind:value={ref} />
	<i class="fa fa-refresh" on:click={getVerse} />
	{#if printed}
		{#each printed as verse}
			<div class="printed-verse">
				{verse.arabic}
			</div>
		{/each}
	{/if}
	<div>
		<textarea name="" class="form-control" />
	</div>
</div>

<style>
	.printed-verse {
		padding: 12px;
		background-color: aliceblue;
		margin: 10px auto;
		font-size: 24px;
		text-align: right;
	}

	.ref {
		margin-bottom: 30px;
	}
</style>
