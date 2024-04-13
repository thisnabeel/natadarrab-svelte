<script>
	import { closeModal } from 'svelte-modals';
	import OutClick from 'svelte-outclick';
	import { onMount } from 'svelte';
	import { onBeforeClose } from 'svelte-modals';

	// provided by <Modals />
	export let isOpen;
	export let image;
	export let preventOutClick = false;

	onMount(async function () {
		document.body.style['overflow-y'] = 'hidden';
	});

	onBeforeClose(() => {
		document.body.style['overflow-y'] = 'initial';
	});

	const handleOutsideClick = () => {
		if (!preventOutClick) {
			closeModal();
		}
	};
</script>

{#if isOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div role="dialog" class="modal" on:click|stopPropagation>
		<div class="barrier" on:click|stopPropagation>
			<OutClick on:outclick={handleOutsideClick}>
				{#if image}
					<img src={image} alt="" />
				{/if}
			</OutClick>
		</div>
	</div>
{/if}

<style>
	img {
		max-width: 75vw;
	}
	[role='dialog'] {
		background: rgba(0, 0, 0, 0.5);
	}

	.modal {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		/* allow click-through to backdrop */
		/* pointer-events: none; */
	}
</style>
