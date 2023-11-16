<script>
	import API from '$lib/api/api';

	import Game from '$lib/components/Games/Game/Game.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import shuffler from '$lib/functions/shuffler';
	import { afterNavigate } from '$app/navigation';

	let game = null;

	onMount(async () => {});

	afterNavigate(() => {
		fetchGame();
	});

	async function fetchGame() {
		const id = $page.params.id;
		game = await API.get('/games/' + id + '.json');
		game.folder.questions = shuffler(game.folder.questions);
		console.log(game);
	}
</script>

<!-- svelte-ignore missing-declaration -->

{#if game}
	<div class="game">
		<Game {game} />
	</div>
{:else}
	<div class="welcomer text-center">
		<img src="/logo.svg" class="logo" alt="" />
		<br />
		<h1>Loading Quiz...</h1>
		<img src="/spinner.gif" alt="" />
	</div>
{/if}

<style>
	.game {
		padding: 3em;
	}

	.welcomer {
		max-width: 350px;
		margin: 0 auto;
		margin-top: 4em;
		display: block;
	}
	.logo {
		max-width: 250px;
		margin: 0 auto;
		display: block;
	}
</style>
