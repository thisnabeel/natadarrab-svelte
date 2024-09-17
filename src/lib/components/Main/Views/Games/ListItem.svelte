<script>
	import { goto } from '$app/navigation';
	import { user } from '$lib/stores/user';
	import ListItem from './ListItem.svelte';

	export let game;
	export let selectedGame;
	export let selectGame;
	export let visitGame;
</script>

<li class="game" class:selected={selectedGame ? selectedGame.id === game.id : false}>
	<div class="head" on:click={() => selectGame(game)}>
		{game.title}

		{#if $user && $user.admin}
			<div
				class="btn btn-warning"
				on:click={() => {
					goto(`/games/${game.id}/edit`);
				}}
			>
				<i class="fa fa-link" />
			</div>
		{/if}

		<div
			class="btn btn-outline-primary"
			on:click={() => {
				goto(`/games/${game.id}`);
			}}
		>
			<i class="fa fa-eye" />
		</div>
	</div>

	<div class="children">
		{#each game.children || [] as child}
			<ListItem {selectedGame} game={child} {selectGame} {visitGame} />
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
