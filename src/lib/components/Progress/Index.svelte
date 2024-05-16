<script>
	import Nav from './Nav/Index.svelte';
	import Api from '$lib/api/api.js';
	import { onMount } from 'svelte';
	import Set from './Set/Set.svelte';
	import { selectedSet, selectedGame, selectedChapter } from './store';
	import Game from '../Games/Game/Game.svelte';
	// import Chapter from './Chapter.svelte';
	import Chapter from '$lib/components/Chapters/Show.svelte';
	// $: selectedSet = skillSets.find((s) => s.title === $selectedSet.id);
	import SearchStudents from '../Students/Search.svelte';
	import { user } from '$lib/stores/user';
</script>

<div class="content">
	<Nav />
	{#if $user && $user.admin}
		<SearchStudents />
	{/if}

	{#if $selectedGame}
		<Game game={$selectedGame} />
	{:else if $selectedChapter}
		<Chapter chapter={$selectedChapter} overrideGate={true} />
	{:else}
		<div class="wrapper">
			{#if $selectedSet}
				<Set set={$selectedSet} />
			{/if}
		</div>
	{/if}
</div>

<style>
	.content {
		background: #fafafa;
		height: 100vh;
		overflow-y: scroll;
	}
	.wrapper {
		height: 90vh;
		overflow-y: scroll;

		background: #ffffeb;
	}
</style>
