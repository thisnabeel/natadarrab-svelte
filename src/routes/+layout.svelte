<script>
	import '../app.css';
	import 'sweetalert2/dist/sweetalert2.min.css';
	import { fade } from 'svelte/transition';
	import { Modals, closeModal } from 'svelte-modals'; //

	import Dashboard from '$lib/components/Dashboard/Index.svelte';
	import { user } from '$lib/stores/user';
</script>

<div>
	{#if !$user}
		<slot />
	{:else}
		<Dashboard>
			<slot />
		</Dashboard>
	{/if}
</div>
<Modals>
	<div slot="backdrop" class="backdrop" transition:fade on:click={closeModal} />
</Modals>

<style>
	div {
		font-family: 'Poppins', sans-serif;
	}
</style>
