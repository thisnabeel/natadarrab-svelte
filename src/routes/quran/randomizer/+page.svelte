<script>
	import API from '$lib/api/api';
	import { onMount } from 'svelte';
	import VerseSliced from '$lib/components/Quran/Verses/Verse/VerseSliced.svelte';

	let verseRange = '2:1-2:141';
	let verse;
	let loading = false;

	onMount(async () => {
		getRandomVerse();
	});

	async function getRandomVerse() {
		loading = true;
		verse = await API.get('/verses/randomizer/' + verseRange + '.json');
		console.log(verse);
		console.log('folder', verse.folder);
		if (verse) loading = false;
	}

	function selectSlice() {}
</script>

<div class="wrapper">
	<input type="text" bind:value={verseRange} />
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="btn btn-info" on:click={getRandomVerse}>Get Random Verse</div>

	{#if loading}
		<div class="welcomer text-center">
			<img src="/logo.svg" class="logo" alt="" />
			<br />
			<h1>Getting Random Ayah from Range...</h1>
			<img src="/spinner.gif" alt="" />
		</div>
	{/if}

	{#if verse && !loading}
		<div class="verse-container">
			<!-- {verse} -->

			<hr />
			<div class="d-grid gap-2 col-2 mx-auto">
				<button class="btn btn-success btn-lg" type="button">{verse.ref}</button>
			</div>
			<hr />
			<!-- <div class="raw-verse">{verse.original}</div> -->

			<div class="iraab" style="padding: 1em;">
				<VerseSliced
					{selectSlice}
					lineHeight={'2.5em'}
					html={verse.folder['iraab_v2'] || verse.folder['iraab_v1']}
					tips={false}
				/>
			</div>
		</div>
	{/if}
</div>

<style>
	.game {
		padding: 3em;
	}

	.welcomer {
		max-width: 350px;
		margin: 0 auto;
		margin-top: 4em;
		display: block;
	}
	.logo {
		max-width: 250px;
		margin: 0 auto;
		display: block;
	}

	.wrapper {
		padding: 4em;
	}
</style>
