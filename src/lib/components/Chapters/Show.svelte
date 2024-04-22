<script>
	import { onMount } from 'svelte';
	import Nav from './Nav.svelte';
	import Spinner from '../Spinner/Spinner.svelte';
	import API from '$lib/api/api';
	import Swal from 'sweetalert2';
	import { user } from '$lib/stores/user';
	import AccessGate from '$lib/components/AccessGate/Index.svelte';
	import { goto } from '$app/navigation';

	let skill = null;
	export let id;
	export let chapter;
	export let overrideGate = false;

	onMount(() => {
		fetchChapter();
	});

	async function fetchChapter() {
		// if (chapter) return;
		chapter = await API.get(`/chapters/${id}.json`);
	}
</script>

{#if chapter}
	<Nav title={chapter.title} />

	<AccessGate override={overrideGate}>
		<div class="post">
			{@html chapter.post}
		</div>

		{#if chapter.games}
			<div class="quizzes">
				<h1>Practice:</h1>
				<ul>
					{#each chapter.games as game}
						<li on:click={() => goto(`/games/${game.id}`)}>{game.title}</li>
					{/each}
				</ul>
			</div>
		{/if}
	</AccessGate>
{:else}
	<Spinner />
{/if}

<style>
	.post {
		padding: 20px;
	}

	.post :global(iframe) {
		width: 100% !important;
	}

	.post {
		max-width: 680px;
		margin: 0 auto;
		display: block;
	}

	.post :global(> p > img) {
		text-align: center;
		margin: 0 auto;
		display: block;
	}

	.quizzes h1 {
		font-size: 34px;
	}

	.quizzes {
		margin: 10px;
	}
	.quizzes li {
		font-size: 24px;
		padding: 14px;
		background: #f0f8ff;
		margin: 10px;
	}
</style>
