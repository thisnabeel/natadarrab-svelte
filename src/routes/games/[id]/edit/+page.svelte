<script>
	import { afterNavigate, goto } from '$app/navigation';
	import { page } from '$app/stores';
	import API from '$lib/api/api';
	import GameEditor from '$lib/components/Main/Views/Games/Game/Edit.svelte';

	let game;
	afterNavigate(() => {
		fetchGame();
	});

	async function fetchGame() {
		const id = $page.params.id;
		game = await API.get('/games/' + id + '.json');
		console.log(game);
	}
</script>

{#if game}
	<GameEditor
		selectedGame={game}
		goBack={() => {
			goto('/games');
		}}
	/>
{/if}

<style>
</style>
