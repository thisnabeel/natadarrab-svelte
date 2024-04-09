<script>
	import { onMount } from 'svelte';
	import Presentation from '$lib/components/Presentation/Presentation.svelte';
	import API from '$lib/api/api';
	import { page } from '$app/stores';
	import VerseSliced from '$lib/components/Quran/Verses/Verse/VerseSliced.svelte';

	let segments = [];
	let names = [];

	onMount(async () => {
		const res = await API.get(`/quranflow/slides/${$page.params.verses}.json`);
		segments = res.segments;
		names = res.names;

		const slideVerses = segments.map((s) => s.verses);

		let previousPrefix = null;

		slideVerses.forEach((element, index) => {
			// Extracting the prefix from each element
			const prefix = element.split(':')[0];

			// Checking if the prefix has changed
			if (prefix !== previousPrefix) {
				// Marking the change in prefix
				console.log(`Prefix change at index ${index}: ${element}`);
				segments[index] = { ...segments[index], header: true, surahName: names[Number(prefix)] };
				// Updating the previousPrefix for the next iteration
				previousPrefix = prefix;
			}
		});

		console.log(segments);
	});

	function selectSlice(payload) {}

	function isSurahStart(surahNumber, index) {
		const items = segments.filter((segment) => segment.verses.split(':')[0] === surahNumber);
	}
</script>

<div class="presentation">
	{#if !segments || !segments[0]}
		<div class="welcomer text-center">
			<img src="/logo.svg" class="logo" alt="" />
			<br />
			<h1>Loading Slides...</h1>
			<img src="/spinner.gif" alt="" />
		</div>
	{/if}
	{#if segments && segments[0]}
		<div class="verses-ref">{$page.params.verses}</div>
		<Presentation>
			{#each segments as segment, index}
				{#if segment.header}
					<section data-transition="slide">
						<article>سورة <span style="color: #f6ff78;">{segment.surahName}</span></article>
					</section>
				{/if}
				<section data-transition="slide">
					<h3>
						<button class="btn btn-primary btn-lg" style="background: #021423;"
							>{segment.verses}</button
						>
					</h3>
					<div class="row">
						<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							<article class="summary">{segment.summary}</article>
						</div>
						<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							<img class="img-responsive" src={segment.gifs[0]} alt="Image" />
						</div>
					</div>
				</section>
			{/each}
		</Presentation>
	{/if}
</div>

<style>
	body {
		background-color: #292929;
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

	.summary {
		text-align: left;

		color: #f6ff78;

		/* max-height: 70vh !important; */
		max-height: 50vh !important;
		overflow-y: scroll;
		text-align: left;
		direction: ltr;
		font-size: 0.58em !important;
		/* font-size: 4vh !important; */
		font-family: 'Merriweather', serif !important;
		line-height: 1.58em !important;
	}

	.summary::-webkit-scrollbar,
	.verses::-webkit-scrollbar,
	.hide-small::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.summary,
	.verses,
	.hide-small {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	.verses-ref {
		position: absolute;
		right: 6px;
		top: 6px;
		display: inline;
		width: max-content;
		color: #f6ff78;
		padding: 10px 20px;
		font-size: 24px;
		z-index: 99;
		border-radius: 10px;
	}

	.verses {
		list-style: none;
	}

	.verse {
		text-align: right;
		margin: 2px 4px;
		line-height: 48px;
		padding: 1em 1em;
		background-color: #292929;
		color: #fcffd3;
		border-radius: 10px;
	}

	.verses {
		overflow-y: scroll;
		height: 74vh;
	}

	.hide-small {
		overflow-y: scroll;
		height: 74vh;
	}

	@media only screen and (max-width: 600px) {
		.hide-small {
			display: none;
		}

		.verses {
			width: 90vw;
		}

		.row > * {
			width: 50%;
		}

		.summary {
			font-size: 0.4em !important;
		}
	}
</style>
