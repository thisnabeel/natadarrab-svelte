<!-- <script context="module">
	//the session object destructured below comes from the hooks.js file above
	export async function load({ session }) {
		return {
			props: {
				//Add the boolean as a property of the __layout.svelte component
				overrideMobile: session.mobile
			}
		};
	}
</script> -->

<script>
	import '../app.pcss';
	import 'sweetalert2/dist/sweetalert2.min.css';
	import { fade } from 'svelte/transition';
	import { Modals, closeModal } from 'svelte-modals'; //

	import Main from '$lib/components/Main/Index.svelte';
	import { user } from '$lib/stores/user';
	import { roomOpen } from '$lib/stores/interaction_rooms';

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
		<Main>
			{#if $roomOpen}
				<div class="flex">
					<div class="flex-1">
						<slot />
					</div>
					<div class="flex-2">
						<ul class="squad clean-list">
							<li>
								<span class="status"><i class="fa fa-check" /></span><span class="username"
									>Lisa</span
								>
							</li>
							<li>
								<span class="status"><i class="fa fa-times" /></span><span class="username"
									>Mosley</span
								>
							</li>
						</ul>
					</div>
				</div>
			{:else}
				<slot />
			{/if}
		</Main>
	{/if}
</div>
<Modals>
	<div slot="backdrop" class="backdrop" transition:fade on:click={closeModal} />
</Modals>

<style>
	div {
		font-family: 'Poppins', sans-serif;
	}

	.flex {
		display: flex;
	}

	.flex-1 {
		flex: 1 1 85%;
	}

	.flex-2 {
		flex: 1 1 15%;
		border-left: 1px solid #eee;
		padding: 10px;
	}
</style>
