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

			channel = pusher.subscribe('private-presentation-' + code);
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

	let currentSlide = 0;

	function handleSlideChange(event) {
		try {
			const verses = segments[currentSlide] ? segments[currentSlide].verses : null;
			console.log(verses);
			if (currentSlide > 0) {
				channel.trigger('client-slide-change', { verses });
			}
			currentSlide = event.detail.index;
		} catch (error) {}
	}
	//
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
						<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							<!-- Left column: Only verses -->

							{#if verses[segment.id]}
								<ul class="clean-list arabic-verses">
									{#each verses[segment.id] as verse}
										<li>{verse.arabic} - {verse.item.ref}</li>
									{/each}
								</ul>
							{:else}
								<button
									class="btn btn-primary btn-lg"
									style="background: #021423;"
									on:click={() => {
										getSegment(segment);
									}}>{segment.verses}</button
								>
							{/if}
						</div>
						<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							<!-- Right column: Description summary at top, then image -->
							<article class="summary english">{segment.summary}</article>

							<article class="summary {$page.params.language}">
								{$page.params.language === 'urdu' && segment.translations
									? segment.translations[$page.params.language]
									: segment.summary}
							</article>
							<img
								class="img-responsive verse-image"
								src={segment.gifs ? segment.gifs[0] : null}
								alt="Image"
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
		max-height: 30vh !important; /* Reduced height to fit above image */
		overflow-y: scroll;
		text-align: left;
		direction: ltr;
		font-size: 0.58em !important;
		font-family: 'Merriweather', serif !important;
		line-height: 1.58em !important;
		margin-bottom: 15px; /* Add space between summary and image */
	}

	.verse-image {
		max-height: 40vh; /* Ensure image fits in remaining space */
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
	}
</style>
