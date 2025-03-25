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

	// Direct input variables
	let directStartingVerse = '';
	let directEndingVerse = '';

	// Tab control variable
	let activeTab = 'dropdown'; // 'dropdown' or 'direct'

	$: console.log(selectedStartingSurah);

	let baseUrl = '';
	let suffix = '?code=';

	// Function to validate direct input verse format (e.g., "1:1")
	function isValidVerseFormat(verse) {
		return /^\d+:\d+$/.test(verse);
	}

	// Function to get currently active verses based on tab
	$: activeStartingVerse = activeTab === 'dropdown' ? selectedStartingVerse : directStartingVerse;
	$: activeEndingVerse = activeTab === 'dropdown' ? selectedEndingVerse : directEndingVerse;

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
	<!-- Tab navigation -->
	<div class="tab-navigation">
		<button
			class="tab-button {activeTab === 'dropdown' ? 'active' : ''}"
			on:click={() => (activeTab = 'dropdown')}
		>
			Dropdown Selection
		</button>
		<button
			class="tab-button {activeTab === 'direct' ? 'active' : ''}"
			on:click={() => (activeTab = 'direct')}
		>
			Direct Input
		</button>
	</div>

	<!-- Dropdown tab content -->
	{#if activeTab === 'dropdown'}
		<div class="tab-content">
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

						<br />
						<div
							class="btn btn-outline-primary btn-lg"
							on:click={() => {
								const folder = findSurah(selectedStartingSurah).folder;
								selectedStartingVerse = folder[0];
								selectedEndingVerse = folder[folder.length - 1];
							}}
						>
							Make Whole Surah
						</div>
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
				</div>
			{/if}
		</div>
	{/if}

	<!-- Direct input tab content -->
	{#if activeTab === 'direct'}
		<div class="tab-content">
			<div class="row">
				<div class="col-lg-6">
					<h1>Start:</h1>
					<div class="input-group">
						<input
							type="text"
							class="form-control"
							placeholder="Format: surah:verse (e.g., 1:1)"
							bind:value={directStartingVerse}
						/>
					</div>
					<div class="input-help">Enter the starting verse in format: surah:verse (e.g., 1:1)</div>
				</div>
				<div class="col-lg-6">
					<h1>End:</h1>
					<div class="input-group">
						<input
							type="text"
							class="form-control"
							placeholder="Format: surah:verse (e.g., 1:7)"
							bind:value={directEndingVerse}
						/>
					</div>
					<div class="input-help">Enter the ending verse in format: surah:verse (e.g., 1:7)</div>
				</div>
			</div>

			<div class="direct-input-validation">
				{#if directStartingVerse && !isValidVerseFormat(directStartingVerse)}
					<div class="validation-error">
						Starting verse format invalid. Use format: surah:verse (e.g., 1:1)
					</div>
				{/if}
				{#if directEndingVerse && !isValidVerseFormat(directEndingVerse)}
					<div class="validation-error">
						Ending verse format invalid. Use format: surah:verse (e.g., 1:7)
					</div>
				{/if}
			</div>
		</div>
	{/if}

	<!-- Link generation (shown for both tabs if verses are selected) -->
	{#if (activeTab === 'dropdown' && selectedStartingVerse && selectedEndingVerse) || (activeTab === 'direct' && isValidVerseFormat(directStartingVerse) && isValidVerseFormat(directEndingVerse))}
		<div class="link">
			<a
				class="btn btn-lg btn-primary"
				href={baseUrl +
					'/quranflow/' +
					activeStartingVerse +
					'-' +
					activeEndingVerse +
					'/slides' +
					suffix}
				target="_blank">English: {activeStartingVerse} - {activeEndingVerse}</a
			>

			<a
				class="btn btn-lg btn-primary"
				href={baseUrl +
					'/quranflow/' +
					activeStartingVerse +
					'-' +
					activeEndingVerse +
					'/urdu/slides' +
					suffix}
				target="_blank">Urdu: {activeStartingVerse} - {activeEndingVerse}</a
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
						activeStartingVerse +
						'-' +
						activeEndingVerse +
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
						activeStartingVerse +
						'-' +
						activeEndingVerse +
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
						activeStartingVerse +
						'-' +
						activeEndingVerse +
						'/urdu/slides/notes' +
						suffix}
				/>
			</div>
		</div>

		<!-- QR Code -->
		{#if suffix}
			<QrCode
				url={baseUrl +
					'/quranflow/' +
					activeStartingVerse +
					'-' +
					activeEndingVerse +
					'/urdu/slides/notes' +
					suffix}
			/>
		{/if}
	{/if}
</div>

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

	.tab-navigation {
		display: flex;
		margin-bottom: 20px;
	}

	.tab-button {
		padding: 10px 20px;
		font-size: 18px;
		background-color: #f0f0f0;
		border: 1px solid #ccc;
		cursor: pointer;
		flex: 1;
	}

	.tab-button.active {
		background-color: #007bff;
		color: white;
		border-color: #007bff;
	}

	.tab-content {
		margin-bottom: 20px;
	}

	.input-help {
		color: #6c757d;
		font-size: 14px;
		margin-top: 5px;
	}

	.direct-input-validation {
		margin: 10px 0;
	}

	.validation-error {
		color: #dc3545;
		font-weight: bold;
	}

	.input-group input.form-control {
		font-size: 24px;
		padding: 10px;
		margin-bottom: 10px;
	}
</style>
