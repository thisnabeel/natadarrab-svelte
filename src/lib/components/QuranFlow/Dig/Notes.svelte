<script>
	import { onMount } from 'svelte';
	import Wrapper from './Wrapper.svelte';
	import { grid, selectedNote, selectedSegment } from '$lib/components/QuranFlow/store';
	import Note from './Note/Note.svelte';
	import Writer from './Note/Writer.svelte';
	import API from '$lib/api/api';
	import { user } from '$lib/stores/user';
	import Spinner from '$lib/components/Spinner/Spinner.svelte';
	export let bg = 'fff';

	let loading = false;

	onMount(() => {
		grid.set('large-right');
		getNotes();
	});

	let notes = [];

	async function getNotes() {
		loading = true;
		const res = await API.post(`/notes/find`, {
			user_id: $user.id,
			segment_id: $selectedSegment.id
		});
		notes = res;
		loading = false;
	}

	async function addNote() {
		if (!$user) return;
		const res = await API.post('/notes.json', {
			notable_type: 'Segment',
			notable_id: $selectedSegment.id,
			user_id: $user.id
		});
		notes = [res, ...notes];
	}
</script>

<Wrapper {bg} title={'Notes'}>
	<div slot="settings">
		<div class="btn btn-outline-info">
			<i class="fa fa-wrench" />
		</div>
	</div>
	<div slot="main">
		<br />
		<hr />
		<br />

		{#if $selectedNote}
			<Writer />
		{:else}
			<div class="btn btn-outline-info btn-block" on:click={addNote}>
				<i class="fa fa-plus" /> Add a Note
			</div>

			{#each notes as note}
				<Note {note} />
			{/each}
		{/if}

		{#if loading}
			<Spinner size={'sm'} />
			<span>Finding Notes...</span>
		{/if}
	</div>
</Wrapper>

<style>
	.note {
		margin: 10px 0;
		padding: 20px;
		border: 1px solid #eee;
	}
</style>
