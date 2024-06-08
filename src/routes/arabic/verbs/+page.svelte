<script>
	import { onMount, onDestroy } from 'svelte';
	import API from '$lib/api/api';
	import Verb from '$lib/components/Arabic/Verbs/Verb/ListItem.svelte';

	let verbs = [];
	let page = 1;
	const limit = 100; // Number of verbs to fetch per batch
	let loading = false;
	let endOfList = false;

	onMount(() => {
		fetchVerbs();
	});

	async function fetchVerbs() {
		if (loading || endOfList) return;
		loading = true;

		try {
			const data = await API.get(`/verbs.json?page=${page}`);

			if (data.length < limit) {
				endOfList = true;
			}

			verbs = [...verbs, ...data];
			page++;
		} catch (error) {
			console.error('Error fetching verbs:', error);
		} finally {
			loading = false;
		}
	}

	function handleIntersection(entries) {
		if (entries[0].isIntersecting) {
			fetchVerbs();
		}
	}

	let observer;
	onMount(() => {
		observer = new IntersectionObserver(handleIntersection, {
			root: null,
			rootMargin: '0px',
			threshold: 1.0
		});
		const target = document.querySelector('#scroll-anchor');
		observer.observe(target);
	});

	onDestroy(() => {
		if (observer) {
			observer.disconnect();
		}
	});
</script>

<h1>Arabic:</h1>

<ul class="verbs">
	{#each verbs as verb}
		<li>
			<Verb {verb} />
		</li>
	{/each}
</ul>

<div id="scroll-anchor" />

<style>
	/* Add some basic styling */
	.verbs {
		list-style: none;
		padding: 0;
	}
	.verbs li {
		margin: 0.5em 0;
		padding: 0.5em;
		background: #f0f0f0;
		border: 1px solid #ddd;
	}
	#scroll-anchor {
		height: 20px; /* Height of the div to be intersected */
	}
</style>
