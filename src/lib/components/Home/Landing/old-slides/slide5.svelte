<script>
	import API from '$lib/api/api';
	import { onMount } from 'svelte';

	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import '@splidejs/svelte-splide/css';

	import { openModal } from 'svelte-modals';
	import Modal from '$lib/components/Modal/LightBox.svelte';

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
		testimonials = await API.get('/things/location/preview.json');
		loading = false;
	}

	function getImage(htmlString) {
		const parser = new DOMParser();
		const doc = parser.parseFromString(htmlString, 'text/html');

		// Select all image elements
		const images = doc.querySelectorAll('img');

		// Extract src attributes from image elements
		const imageSrcs = Array.from(images).map((img) => img.getAttribute('src'));

		// Log the extracted image srcs
		console.log(imageSrcs);
		return imageSrcs[0];
	}
</script>

<br />
<section
	id="books-preview"
	style="background: url('https://images.unsplash.com/photo-1423001369568-657dfdb9ce03?dpr=2&auto=format&fit=crop&w=1080&h=720&q=80&cs=tinysrgb&crop='); padding: 1px;"
>
	<div class="row" id="features">
		<div class="slider testimonials">
			{#if loading}
				<h1 style="font-size: 34px; text-align: center">Loading Preview...</h1>
			{:else}
				<div class="previews">
					<h3 class="text-center header" style="font-size: 30px; margin-bottom: 14px;">
						<u>
							Preview <i>Some</i> of the Natadarrab™ Features Inside:
						</u>
					</h3>
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
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<div
									class="testimonial"
									on:click={() =>
										openModal(Modal, {
											image: getImage(testimonial.post)
										})}
								>
									{#if testimonial.post}
										{@html testimonial.post}
									{/if}

									<small
										><br />
										{testimonial.title}
									</small>
								</div>
							</SplideSlide>
						{/each}
					</Splide>
				</div>
			{/if}
		</div>
	</div>
</section>

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
		top: -24px;
		font-size: 24px;
		color: #ad9fff;
	}

	.testimonial-header {
		position: relative;
	}

	.header {
		text-align: center;
	}

	.header i {
		display: table-cell;
		vertical-align: middle;
		position: relative;
		top: 50%;
		transform: translateY(50%);
	}

	.previews {
		background-color: #fff;
		padding: 24px;
		margin: 30px;
	}
</style>
