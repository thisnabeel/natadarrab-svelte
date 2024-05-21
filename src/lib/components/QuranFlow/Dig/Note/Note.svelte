<script>
	import { onMount } from 'svelte';
	import Writer from './Writer.svelte';
	import { selectedNote } from '$lib/components/QuranFlow/store';
	import API from '$lib/api/api';
	import Spinner from '$lib/components/Spinner/Spinner.svelte';

	export let note;

	let editing = false;
	function selectNote() {
		selectedNote.set(note);
	}

	async function save() {
		const res = await API.put(`/notes/${note.id}.json`, {
			title: note.title
		});
		editing = false;
	}
</script>

<div class="note">
	{#if editing}
		<input type="text" class="form-control" placeholder="Enter Title..." bind:value={note.title} />
		<div class="bottom">
			<div
				class="btn btn-outline-warning"
				on:click={() => {
					save();
				}}
			>
				Save
			</div>
			<div
				class="btn btn-outline-danger"
				on:click={() => {
					editing = false;
				}}
			>
				Delete
			</div>
		</div>
	{:else}
		<div class="flex">
			<div class="title" on:click={selectNote}>
				{note.title}
			</div>
			<div class="settings">
				<span on:click={() => (editing = true)} class="fa fa-cog" />
			</div>
		</div>
	{/if}
</div>

<style>
	.flex {
		display: flex;
	}

	.title {
		flex: 1 1 95%;
	}

	.settings {
		flex: 1 1 5%;
	}

	.note {
		margin: 10px 0;
		padding: 20px;
		border: 1px solid #eee;
	}
</style>
