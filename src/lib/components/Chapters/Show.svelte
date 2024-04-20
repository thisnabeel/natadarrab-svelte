<script>
	import { onMount } from 'svelte';
	import Nav from './Nav.svelte';
	import Spinner from '../Spinner/Spinner.svelte';
	import API from '$lib/api/api';
	import Swal from 'sweetalert2';
	import { user } from '$lib/stores/user';
	import AccessGate from '$lib/components/AccessGate/Index.svelte';

	let skill = null;
	export let id;
	let chapter;

	onMount(() => {
		fetchChapter();
	});

	async function fetchChapter() {
		chapter = await API.get(`/chapters/${id}.json`);
	}
</script>

{#if chapter}
	<Nav title={chapter.title} />

	<AccessGate>
		<div class="post">
			{@html chapter.post}
		</div>
	</AccessGate>
{:else}
	<Spinner />
{/if}

<style>
	.post {
		padding: 20px;
	}

	.post :global(iframe) {
		width: 100%;
	}
</style>
