<script>
	import { onMount } from 'svelte';

	import Spinner from '../Spinner/Spinner.svelte';
	import API from '$lib/api/api';
	import Swal from 'sweetalert2';
	import { user } from '$lib/stores/user';
	let accessGranted = false;
	export let override = false;

	onMount(() => {
		if (($user && $user.admin) || override) {
			accessGranted = true;
			return true;
		}
		Swal.fire({
			title: 'Enter your Access Key:',
			input: 'text',
			inputAttributes: {
				autocapitalize: 'off'
			},
			confirmButtonText: 'Enter',
			showLoaderOnConfirm: true,
			preConfirm: async (key) => {
				if (['ntdrb', 'luqmaan24', 'qsz'].includes(key)) {
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
</script>

{#if accessGranted}
	<slot />
{/if}
