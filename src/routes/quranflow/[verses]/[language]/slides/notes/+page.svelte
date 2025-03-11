<script>
	import { page } from '$app/stores';
	import API from '$lib/api/api';
	import Pusher from 'pusher-js';
	import { onMount } from 'svelte';

	import { translation } from '$lib/components/QuranFlow/store.js';
	import Spinner from '$lib/components/Spinner/Spinner.svelte';

	// Initialize variables
	let verses = [];
	let pusher;
	let channel = null;
	let versesString = '';
	let loadingVerses = 0;
	let baseURL = '';

	const fetchJsonData = async () => {
		try {
			const response = await fetch('/translations/english/urd-abulaalamaududi.json');

			if (!response.ok) {
				throw new Error('Failed to fetch JSON data');
			}
			translation.set(await response.json());
			console.log('translation loaded');
		} catch (error) {
			console.error('Error fetching translation:', error);
		}
	};

	function getTrans(ref) {
		if ($translation) {
			return $translation.quran.find(
				(obj) =>
					obj.chapter === Number(ref.split(':')[0]) && obj.verse === Number(ref.split(':')[1])
			);
		} else {
			return {
				text: ''
			};
		}
	}

	function initializePusher() {
		if (!baseURL) {
			console.error('baseURL not initialized yet');
			return;
		}

		const code = $page.url.searchParams.get('code');

		pusher = new Pusher('31a3d875bb3c4cb1e303', {
			cluster: 'us3',
			authEndpoint: baseURL + '/pusher_jsonp_auth'
		});

		channel = pusher.subscribe('private-presentation-notes');

		channel.bind('client-slide-change', (data) => {
			versesString = data.verses;
			getVerses(versesString);
		});

		console.log('Pusher initialized with baseURL:', baseURL);
	}

	async function getVerses(str) {
		if (!str) return;

		loadingVerses = 1;
		try {
			verses = await API.get(
				'/quran/verses/' + str + '?includeTranslation=false&includeBlocks=false.json'
			);
			loadingVerses = 2;
		} catch (error) {
			console.error('Error fetching verses:', error);
			loadingVerses = 0;
		}
	}

	onMount(async () => {
		// Set baseURL first
		baseURL =
			process.env.NODE_ENV === 'production' ? process.env.API_URL : import.meta.env.VITE_API_URL;
		console.log('baseURL initialized:', baseURL);

		// Load translation data
		await fetchJsonData();

		// Initialize Pusher after baseURL is set
		initializePusher();

		// Clean up on component unmount
		return () => {
			if (channel) {
				channel.unbind_all();
				if (pusher) {
					pusher.unsubscribe('private-presentation-notes');
				}
			}
		};
	});

	// Listen for page changes and reinitialize if needed
	page.subscribe((p) => {
		if (baseURL && !channel) {
			initializePusher();
		}
	});
</script>

{#if !pusher}
	<div class="jumbotron">
		<h1>Connecting to your presentation <Spinner /></h1>
	</div>
{:else}
	<div class="jumbotron">
		<h1>Succesfully Connected to your presentation, Please move slide around</h1>
	</div>
{/if}

{#if loadingVerses === 1}
	<div class="jumbotron">
		<h1>Loading Verses... <code>{versesString}</code></h1>
	</div>
{/if}

<ul class="clean-list arabic-verses">
	{#each verses || [] as verse}
		<li>
			{verse.arabic} - {verse.item.ref}

			<br />
			<div class="trans">
				{getTrans(verse.item.ref).text}
			</div>
		</li>
	{/each}
</ul>

<style>
	.trans {
		background: black;
		padding: 15px;
		line-height: 30px;
		margin-top: 12px;
	}
	.arabic-verses {
		list-style: none;
		text-align: right;
		direction: rtl;

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

	.jumbotron {
		padding: 14px;
		background-color: #fcffd3;
	}
</style>
