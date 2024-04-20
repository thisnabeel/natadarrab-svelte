<script>
	import API from '$lib/api/api';
	import { onMount } from 'svelte';
	import Nav from './Nav.svelte';
	import Synonym from './Synonym/Show.svelte';

	let synonyms = [];

	onMount(async () => {
		synonyms = await API.get('/synonyms.json');
		console.log(synonyms);
	});
</script>

<Nav />

<div class="wrapper">
	<div class="synonyms">
		{#each synonyms as synonym}
			<Synonym {synonym} />
		{/each}
	</div>
</div>

<style>
	.synonyms {
		margin: 20px;
	}

	.wrapper {
		max-height: 80vh;
		overflow-y: scroll;
	}
</style>
