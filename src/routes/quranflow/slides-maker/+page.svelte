<script>
	import { findSurah, allSurahs } from '$lib/functions/surahs';

	// $: console.log(allSurahs())
	let selectedStartingSurah;
	let selectedStartingVerse;

	let selectedEndingSurah;
	let selectedEndingVerse;

	$: console.log(selectedStartingSurah);
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

			<div class="link">
				<a
					class="btn btn-lg btn-primary"
					href={'http://natadarrab-svelte.vercel.app/quranflow/' +
						selectedStartingVerse +
						'-' +
						selectedEndingVerse +
						'/slides'}
					target="_blank">{selectedStartingVerse} - {selectedEndingVerse}</a
				>
				<br /> <br />
				<input
					type="text"
					class="form-control"
					disabled
					value={'http://natadarrab-svelte.vercel.app/quranflow/' +
						selectedStartingVerse +
						'-' +
						selectedEndingVerse +
						'/slides'}
				/>
			</div>
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
