<script>
	import API from '$lib/api/api';

	import {
		playlists,
		selectedSegmentContentPlaylists,
		selectedSegment
	} from '$lib/stores/quranflow';
	import Wrapper from './Wrapper.svelte';

	export let bg = 'fff';

	let showPlaylistSettings = false;
	let newContentPlaylistTitle = '';
	let touching = false;

	async function createPlaylist() {
		const res = await API.post('/content_playlists.json', {
			title: newContentPlaylistTitle
		});

		playlists.set([...$playlists, res]);
	}
	$: console.log('playlists', $playlists);
	$: $selectedSegment && getPlaylists();

	async function getPlaylists() {
		const res = await API.get(`/segments/${$selectedSegment.id}/content_playlist_segments.json`);
		selectedSegmentContentPlaylists.set(res);
		console.log('segment pl', $selectedSegmentContentPlaylists);
	}

	async function togglePlaylist(playlist) {
		if (touching) return;
		touching = true;
		if (
			$selectedSegmentContentPlaylists.filter((p) => p.content_playlist_id === playlist.id).length
		) {
			const id = $selectedSegmentContentPlaylists.find(
				(p) => p.content_playlist_id === playlist.id
			).id;
			await API.delete(`/content_playlist_segments/${id}.json`);
			selectedSegmentContentPlaylists.set(
				$selectedSegmentContentPlaylists.filter((pl) => pl.content_playlist_id !== playlist.id)
			);
		} else {
			const res = await API.post('/content_playlist_segments.json', {
				content_playlist_id: playlist.id,
				segment_id: $selectedSegment.id
			});
			console.log({ res });
			selectedSegmentContentPlaylists.set([...$selectedSegmentContentPlaylists, res]);
		}
		touching = false;
	}

	async function removePlaylist(playlist) {
		await API.delete(`/content_playlists/${playlist.id}.json`);
		playlists.set($playlists.filter((pl) => pl.id !== playlist.id));
	}
</script>

<Wrapper {bg} title={'Playlist'}>
	<div slot="settings">
		<div class="btn btn-outline-info">
			<i class="fa fa-wrench" />
		</div>
	</div>
	<div slot="main">
		{#if showPlaylistSettings}
			<input
				type="text"
				class="form-control"
				bind:value={newContentPlaylistTitle}
				placeholder="New Playlist Title"
			/>
			{#if newContentPlaylistTitle.length > 2}
				<div class="btn btn-outline-info" on:click={() => createPlaylist()}>
					<i class="fa fa-plus" />
				</div>
			{/if}
		{/if}
		<ul class="clean-list">
			{#each $playlists as playlist}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li
					class="playlist"
					class:active={$selectedSegmentContentPlaylists.find(
						(p) => p.content_playlist_id === playlist.id
					)}
					class:config={showPlaylistSettings}
					on:click={() => {
						if (showPlaylistSettings) return;
						togglePlaylist(playlist);
					}}
				>
					{#if showPlaylistSettings}
						<div style="display: flex;">
							<div style="flex: 1 1 90%;">
								{playlist.title}
							</div>
							<div style="flex: 1 1 10%;" on:click={() => removePlaylist(playlist)}>
								<i class="fa fa-times" />
							</div>
						</div>
					{:else}
						{playlist.title}
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</Wrapper>

<style>
	.config {
		background-color: #eee !important;
	}
	.playlist {
		padding: 8px;
		border: 1px solid #eee;
		background: #fff;
		margin: 4px;
		border-radius: 8px;
	}

	.active {
		background: rgb(0, 35, 190);
		color: #fff;
	}
</style>
