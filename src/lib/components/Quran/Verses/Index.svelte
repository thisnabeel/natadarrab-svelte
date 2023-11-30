<script>
	import { afterNavigate, goto } from '$app/navigation';
	import { page } from '$app/stores';
	import API from '$lib/api/api';
	import { onMount } from 'svelte';
	import EditVerse from './Verse/Edit.svelte';
	let verses = [];
	let inputVerses = $page.params.verses;
	afterNavigate(async function () {
		if (inputVerses) {
			getVerses();
		}
	});

	async function getVerses() {
		verses = await API.get(`/quran/verses/${inputVerses}.json`);
		console.log({ verses });
	}
</script>

<div class="wrapper">
	<div class="searcher">
		<input
			type="text"
			class="form-control"
			placeholder="Enter Verses..."
			bind:value={inputVerses}
		/>
		<div
			class="btn btn-primary"
			on:click={() => {
				goto('/quran/verses/' + inputVerses);
			}}
		>
			<i class="fa fa-search" />
		</div>
	</div>
	{#if verses}
		{#each verses as verse}
			<EditVerse {verse} />
		{/each}
	{/if}
</div>

<style>
	.wrapper {
		padding: 1em;
	}

	.searcher {
		display: flex;
		width: 350px;
	}

	.searcher > input {
		flex: 1 1 60%;
	}

	.searcher > .btn {
		flex: 1 1 40%;
	}
</style>
