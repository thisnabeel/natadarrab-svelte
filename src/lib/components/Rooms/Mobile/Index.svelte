<script>
	import { page } from '$app/stores';
	import API from '$lib/api/api';
	import { onMount } from 'svelte';

	onMount(() => {
		makePusherRoom();
	});

	let roomOptions;
	let name = null;
	let newName = '';

	function makePusherRoom() {
		// @ts-ignore
		const pusher = new Pusher('7e649cff1bea807a7ce6', {
			cluster: 'us2'
		});

		let channel = pusher.subscribe('room-' + $page.params.code);
		channel.bind('my-event', function (data) {
			// alert(JSON.stringify(data));
			roomOptions = data;
		});
	}

	async function submitName() {
		await API.post('/rooms/' + $page.params.code + '/members', {
			name: newName,
			verb: 'add'
		});
		name = newName;
	}
</script>

<div class="wrapper">
	{#if !name}
		<div class="door">
			<h1>Enter Name to Join Room:</h1>
			<input type="text" class="form-control" bind:value={newName} />
			<div class="btn btn-info" on:click={submitName}>Enter</div>
		</div>
	{:else if roomOptions}
		{#each roomOptions.buttons as button}
			<div class="btn btn-outline-primary">
				{button}
			</div>
		{/each}
	{/if}
</div>

<style>
	.wrapper {
		padding: 4em;
	}

	.door {
		background-color: rgb(102, 255, 171);
		padding: 4em;
	}

	.door h1 {
		font-size: 34px;
	}
</style>
