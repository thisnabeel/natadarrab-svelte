<script context="module">
	//the session object destructured below comes from the hooks.js file above
	export async function load({ session }) {
		return {
			props: {
				//Add the boolean as a property of the __layout.svelte component
				overrideMobile: session.mobile
			}
		};
	}
</script>

<script>
	import '../app.pcss';
	import 'sweetalert2/dist/sweetalert2.min.css';
	import { fade } from 'svelte/transition';
	import { Modals, closeModal } from 'svelte-modals'; //

	import Dashboard from '$lib/components/Dashboard/Index.svelte';
	import { user } from '$lib/stores/user';

	import { width, mobile } from '$lib/utils/device';
	//receive whether to override and render as mobile
	export let overrideMobile = true;
	//store this in the shared stores located in '$lib/utils/device'
	$mobile = overrideMobile;
</script>

<!-- notice we also bind the inner width of the HTML document to a store -->
<svelte:window bind:innerWidth={$width} />

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
