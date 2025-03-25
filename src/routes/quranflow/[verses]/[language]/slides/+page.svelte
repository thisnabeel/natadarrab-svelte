<script>
	import { onMount } from 'svelte';
	import Presentation from '$lib/components/Presentation/Presentation.svelte';
	import API from '$lib/api/api';
	import { page } from '$app/stores';
	import VerseSliced from '$lib/components/Quran/Verses/Verse/VerseSliced.svelte';
	import Pusher from 'pusher-js';

	let segments = [];
	let names = [];
	import { inview } from 'svelte-inview';

	let isInView;
	const options = {};

	let pusher;

	// Subscribe to a channel
	let channel = null;
	const baseURL =
		process.env.NODE_ENV === 'production' ? process.env.API_URL : import.meta.env.VITE_API_URL;

	$: subNow(baseURL);
	function subNow(base) {
		if (!base) return;
		page.subscribe((p) => {
			pusher = new Pusher('31a3d875bb3c4cb1e303', {
				cluster: 'us3',
				authEndpoint: baseURL + '/pusher_jsonp_auth'
			});
			const code = p.url.searchParams.get('code');

			channel = pusher.subscribe('private-presentation-notes');
		});
	}

	onMount(async () => {
		const res = await API.get(`/quranflow/slides/${$page.params.verses}/urdu.json`);
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

	let verses = {};
	async function getSegment(segment) {
		verses[segment.id] = await API.get('/quran/verses/' + segment.verses + '.json');
		console.log({ verses });
	}

	let currentSlideIndex = 0;

	function handleSlideChange(event) {
		try {
			currentSlideIndex = event.detail.index - 1;

			console.log({ currentSlideIndex });
			console.log(segments[currentSlideIndex]);

			const verses = segments[currentSlideIndex] ? segments[currentSlideIndex].verses : null;
			console.log(verses);
			if (currentSlideIndex > -1) {
				channel.trigger('client-slide-change', { verses });
			}
		} catch (error) {}
	}

	// Function to check if summary text is more than 3 lines
	function shouldMoveToLeft(summary) {
		if (!summary) return false;

		// Count number of lines by estimating with line height
		const lineHeight = 1.58; // from CSS line-height property
		const fontSize = 0.58; // from CSS font-size property
		const actualLineHeight = lineHeight * fontSize * 16; // assuming base font size of 16px

		const numberOfLines = summary.length / 80; // rough estimate of chars per line

		return numberOfLines > 3;
	}

	// Function to decide layout based on summary length
	function shouldUseLeftLayout(segment) {
		const englishSummary = segment.summary || '';
		const urduSummary =
			segment.translations && segment.translations.urdu
				? segment.translations.urdu
				: segment.summary || '';

		return shouldMoveToLeft(englishSummary) || shouldMoveToLeft(urduSummary);
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
		<Presentation on:slideChange={handleSlideChange}>
			{#each segments as segment, index}
				{#if segment.header}
					<section data-transition="slide">
						<article>سورة <span style="color: #f6ff78;">{segment.surahName}</span></article>
					</section>
				{/if}
				<section data-transition="slide">
					<div class="row">
						<!-- Left column -->
						<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 left-column">
							{#if !shouldUseLeftLayout(segment)}
								<!-- Regular layout: verses/button only in left column -->
								{#if verses[segment.id]}
									<ul class="clean-list arabic-verses">
										{#each verses[segment.id] as verse}
											<li>{verse.arabic} - {verse.item.ref}</li>
										{/each}
									</ul>
								{:else}
									<button
										class="btn btn-primary btn-lg load-button"
										on:click={() => {
											getSegment(segment);
										}}>{segment.verses}</button
									>
								{/if}
							{:else}
								<!-- Long text layout: summaries moved to left column, then verses/button -->
								<div class="summaries-container">
									<article class="summary english moved">
										{segment.summary}
									</article>

									<article class="summary {$page.params.language} moved">
										{$page.params.language === 'urdu' && segment.translations
											? segment.translations[$page.params.language]
											: segment.summary}
									</article>
								</div>

								{#if verses[segment.id]}
									<ul class="clean-list arabic-verses smaller">
										{#each verses[segment.id] as verse}
											<li>{verse.arabic} - {verse.item.ref}</li>
										{/each}
									</ul>
								{:else}
									<button
										class="btn btn-primary btn-lg load-button"
										on:click={() => {
											getSegment(segment);
										}}>{segment.verses}</button
									>
								{/if}
							{/if}
						</div>

						<!-- Right column -->
						<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 right-column">
							{#if !shouldUseLeftLayout(segment)}
								<!-- Regular layout: summaries in right column -->
								<div class="summaries-container">
									<article class="summary english">
										{segment.summary}
									</article>

									<article class="summary {$page.params.language}">
										{$page.params.language === 'urdu' && segment.translations
											? segment.translations[$page.params.language]
											: segment.summary}
									</article>
								</div>
							{/if}

							<!-- Image always stays in right column -->
							<img
								class="img-responsive verse-image"
								src={segment.gifs ? segment.gifs[0] : null}
								alt="Image"
								class:full-height={shouldUseLeftLayout(segment)}
							/>
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

	.summary.english {
		font-size: 16px !important;
	}

	.summary.urdu {
		direction: rtl;
		text-align: right;
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
		/* max-height: 30vh !important; */
		overflow-y: scroll;
		text-align: left;
		direction: ltr;
		font-size: 0.58em !important;
		font-family: 'Merriweather', serif !important;
		line-height: 1.58em !important;
		margin-bottom: 15px;
	}

	.verse-image {
		max-height: 40vh;
		width: 100%;
		object-fit: contain;
	}

	.arabic-verses {
		list-style: none;
		text-align: right;
		direction: rtl;
		height: 70vh;
		overflow-y: scroll;
		padding: 0;
	}

	.arabic-verses li {
		margin: 2px 4px;
		line-height: 42px;
		padding: 1em 1em;
		background-color: #292929;
		color: #fcffd3;
		border-radius: 10px;
		font-size: 22px;
	}

	.summary::-webkit-scrollbar,
	.arabic-verses::-webkit-scrollbar,
	.hide-small::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.summary,
	.arabic-verses,
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

	.hide-small {
		overflow-y: scroll;
		height: 74vh;
	}

	/* New styles for responsive layout */
	.left-column,
	.right-column {
		display: flex;
		flex-direction: column;
	}

	.right-column {
		height: 80vh;
	}

	.load-button {
		background: #021423 !important;
		margin-bottom: 15px;
	}

	.summaries-container {
		width: 100%;
		overflow: hidden;
	}

	.summaries-container.hidden {
		display: none;
	}

	.summaries-container.visible {
		display: block;
	}

	/* When summaries move to left column */
	.summary.moved {
		/* max-height: 25vh !important; */
	}

	/* Make verses smaller when summaries are moved left */
	.arabic-verses.smaller {
		height: 40vh;
	}

	.verse-image.full-height {
		max-height: 75vh;
	}

	@media only screen and (max-width: 600px) {
		.hide-small {
			display: none;
		}

		.row > * {
			width: 50%;
		}

		.summary {
			font-size: 0.4em !important;
			max-height: 25vh !important;
		}

		.verse-image {
			max-height: 35vh;
		}

		/* Adjust for mobile when summaries are moved */
		.summary.moved {
			max-height: 20vh !important;
		}

		.arabic-verses.smaller {
			height: 25vh;
		}

		.verse-image.full-height {
			max-height: 70vh;
		}
	}
</style>
