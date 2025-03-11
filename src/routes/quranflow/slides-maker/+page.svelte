<script>
	import QrCode from '$lib/components/QRCode/QRCode.svelte';
	import { findSurah, allSurahs } from '$lib/functions/surahs';
	import uuid from '$lib/functions/uuid';
	import Pusher from 'pusher-js';
	import { onMount } from 'svelte';

	// $: console.log(allSurahs())
	let selectedStartingSurah;
	let selectedStartingVerse;

	let selectedEndingSurah;
	let selectedEndingVerse;

	$: console.log(selectedStartingSurah);

	let baseUrl = '';
	let suffix = '?code=';

	onMount(() => {
		// Get the base URL (protocol + hostname + port)
		baseUrl = window.location.origin;

		const code = uuid();
		suffix += code;

		// If you want just the hostname
		// baseUrl = window.location.hostname;

		// If you want protocol + hostname + port + path (without query params)
		// baseUrl = window.location.origin + window.location.pathname;
	});
</script>

<div class="wrapper">
	<select class="form-control" bind:value={selectedStartingSurah}>
		{#each allSurahs() as surah}
			<option value={surah.surah}>{surah.title}</option>
		{/each}
	</select>
	{#if selectedStartingSurah}
		<div class="row">
			<div class="col-lg-6">
				<h1>Start:</h1>

				{#if selectedStartingSurah}
					<select class="form-control" bind:value={selectedStartingVerse}>
						{#each findSurah(selectedStartingSurah).folder as verse}
							<option value={verse}>{verse.split(':')[1]}</option>
						{/each}
					</select>
				{/if}
			</div>
			<div class="col-lg-6">
				<!--  -->
				<h1>End:</h1>
				<select class="form-control" bind:value={selectedEndingVerse}>
					{#each findSurah(selectedStartingSurah).folder as verse}
						{#if selectedStartingVerse && selectedStartingVerse.split(':')[1] <= verse.split(':')[1]}
							<option value={verse}>{verse.split(':')[1]}</option>
						{/if}
					{/each}
				</select>
			</div>

			{#if selectedStartingVerse && selectedEndingVerse}
				<div class="link">
					<a
						class="btn btn-lg btn-primary"
						href={baseUrl +
							'/quranflow/' +
							selectedStartingVerse +
							'-' +
							selectedEndingVerse +
							'/slides' +
							suffix}
						target="_blank">English: {selectedStartingVerse} - {selectedEndingVerse}</a
					>

					<a
						class="btn btn-lg btn-primary"
						href={baseUrl +
							'/quranflow/' +
							selectedStartingVerse +
							'-' +
							selectedEndingVerse +
							'/urdu/slides' +
							suffix}
						target="_blank">Urdu: {selectedStartingVerse} - {selectedEndingVerse}</a
					>
					<br /> <br />
					<div class="input-group">
						<label for="">English:</label>
						<input
							type="text"
							class="form-control"
							disabled
							value={baseUrl +
								'/quranflow/' +
								selectedStartingVerse +
								'-' +
								selectedEndingVerse +
								'/slides' +
								suffix}
						/>
					</div>
					<div class="input-group">
						<label for="">Urdu:</label>
						<input
							type="text"
							class="form-control"
							disabled
							value={baseUrl +
								'/quranflow/' +
								selectedStartingVerse +
								'-' +
								selectedEndingVerse +
								'/urdu/slides' +
								suffix}
						/>
					</div>

					<div class="input-group">
						<label for="">Notes:</label>
						<input
							type="text"
							class="form-control"
							disabled
							value={baseUrl +
								'/quranflow/' +
								selectedStartingVerse +
								'-' +
								selectedEndingVerse +
								'/urdu/slides/notes' +
								suffix}
						/>
					</div>

					{#if suffix}
						<QrCode
							url={baseUrl +
								'/quranflow/' +
								selectedStartingVerse +
								'-' +
								selectedEndingVerse +
								'/urdu/slides/notes' +
								suffix}
						/>
					{/if}
				</div>
			{/if}
		</div>
	{/if}
</div>

<!-- 



{#if selectedEndingSurah}
<select class="form-control" bind:value={selectedEndingSurah}>
    {#each findSurah(surah.position).folder as verse}
        <option>{verse}</option>
    {/each}
</select>
{/if} -->

<style>
	.wrapper select {
		font-size: 42px;
	}

	.wrapper {
		padding: 44px;
	}

	.link {
		display: block;
		padding: 24px;
		text-align: center;
		font-size: 34px;
		background-color: aliceblue;
	}
</style>
