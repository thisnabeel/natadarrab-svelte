<script>
	import { children } from 'svelte/internal';
	import ListItem from './ListItem.svelte';

	export let game;
	export let selectedGame;
	export let selectGame;
	export let visitGame;
</script>

<li class="game" class:selected={selectedGame ? selectedGame.id === game.id : false}>
	<div class="head" on:click={() => selectGame(game)}>
		{game.title}

		<div class="btn btn-warning" on:click={() => visitGame(game)}><i class="fa fa-link" /></div>
	</div>

	<div class="children">
		{#each game.children || [] as child}
			<ListItem {selectedGame} game={child} {selectGame} />
		{/each}
	</div>
</li>

<style>
	.selected > .head {
		background-color: #b8eeff !important;
	}

	.wrapper {
		padding: 20px;
	}

	.game {
		padding-left: 10px;
	}
	.game.selected {
		padding-left: 6px;
		border-left: 4px solid #b8eeff;
	}

	.head {
		padding: 8px;
		font-size: 24px;
		background: rgb(255 248 222);
		margin: 4px;
		border-radius: 8px;
	}

	.children {
		margin-left: 32px;
	}
</style>
