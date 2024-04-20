<script>
	import { onMount } from 'svelte';
	import Nav from './Nav.svelte';
	import Spinner from '../Spinner/Spinner.svelte';
	import API from '$lib/api/api';
	import Swal from 'sweetalert2';
	import { user } from '$lib/stores/user';

	let skill = null;
	export let id;
	let chapter;
	let accessGranted = false;

	onMount(() => {
		fetchChapter();

		Swal.fire({
			title: 'Enter your Access Key:',
			input: 'text',
			inputAttributes: {
				autocapitalize: 'off'
			},
			confirmButtonText: 'Enter',
			showLoaderOnConfirm: true,
			preConfirm: async (key) => {
				if (key === 'ntdrb') {
					accessGranted = true;
					return true;
				} else {
					return false;
				}
			},
			allowOutsideClick: () => false
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire('Access Granted', 'Close this popup to proceed', 'success');
			}
		});
	});

	async function fetchChapter() {
		chapter = await API.get(`/chapters/${id}.json`);
	}
</script>

{#if chapter}
	<Nav title={chapter.title} />

	{#if accessGranted}
		<div class="post">
			{@html chapter.post}
		</div>
	{/if}
{:else}
	<Spinner />
{/if}

<style>
	.post {
		padding: 20px;
	}
</style>
