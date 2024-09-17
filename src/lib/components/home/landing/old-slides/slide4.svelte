<script>
	import API from '$lib/api/api';
	import { onMount } from 'svelte';

	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import '@splidejs/svelte-splide/css';

	import { Splide, SplideSlide } from '@splidejs/svelte-splide';

	let carousel; // for calling methods of the carousel instance

	const handleNextClick = () => {
		carousel.goToNext();
	};

	let testimonials = [];
	let loading = false;

	onMount(() => {
		getTestimonials();
	});

	async function getTestimonials() {
		loading = true;
		testimonials = await API.get('/things/location/testimonials.json');
		loading = false;
	}
</script>

<br id="testimonials" />
<h2 class="text-center testimonial-header" style="padding-top: 30px;">
	<span class="some">(some)</span> Testimonials:
</h2>
<div class="row">
	<div class="slider testimonials">
		{#if loading}
			<h1 style="font-size: 34px; text-align: center">Loading Testimonials</h1>
		{:else}
			<Splide
				aria-label="Testimonials"
				options={{
					type: 'loop',
					autoHeight: true,
					autoWidth: true,
					grid: {
						rows: 2,
						cols: 2,
						gap: {
							row: '1rem',
							col: '1.5rem'
						}
					}
				}}
			>
				{#each testimonials as testimonial}
					<SplideSlide>
						<div class="testimonial">
							{#if testimonial.description}
								<p>
									{testimonial.description}
								</p>
							{/if}
							{#if testimonial.link}
								{@html testimonial.link}
							{/if}

							<small>
								{testimonial.title}
							</small>
						</div>
					</SplideSlide>
				{/each}
			</Splide>
		{/if}
	</div>
</div>

<style>
	.testimonials :global(.testimonial) {
		background-color: #fff;
		height: max-content;
		padding: 20px;
		max-width: 400px;
	}

	.testimonials :global(p) {
		color: #48816d;
		font-size: 23px;
		font-family: 'Ovo', serif;
		max-height: 300px;
		overflow-y: scroll;
	}

	.testimonials :global(small) {
		font-family: 'Dosis', sans-serif;
		font-size: 26px;
	}

	.testimonials :global(iframe) {
		max-width: 100%;
		max-height: 200px;
		display: block;
		margin: 0 auto;
		text-align: center;
	}

	.some {
		position: absolute;
		top: -4px;
		font-size: 24px;
		color: #ad9fff;
	}

	.testimonial-header {
		position: relative;
	}
</style>
