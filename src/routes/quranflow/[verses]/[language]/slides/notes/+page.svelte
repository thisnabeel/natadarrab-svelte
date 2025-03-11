<script>
	import { page } from '$app/stores';
	import API from '$lib/api/api';
	import Pusher from 'pusher-js';
	import { onMount } from 'svelte';

	import { translation } from '$lib/components/QuranFlow/store.js';
	import Spinner from '$lib/components/Spinner/Spinner.svelte';

	const fetchJsonData = async () => {
		try {
			const response = await fetch('/translations/english/urd-abulaalamaududi.json');

			if (!response.ok) {
				throw new Error('Failed to fetch JSON data');
			}
			translation.set(await response.json());
			console.log('translation');
			console.log($translation);
		} catch (error) {
			console.error(error);
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

	const baseURL =
		process.env.NODE_ENV === 'production' ? process.env.API_URL : import.meta.env.VITE_API_URL;

	onMount(() => {
		fetchJsonData();
	});
	let verses = [];

	let pusher;

	// Subscribe to a channel
	let channel = null;

	$: subNow(baseURL);

	function subNow(base) {
		if (!base) return;
		page.subscribe((p) => {
			const code = p.url.searchParams.get('code');

			pusher = new Pusher('31a3d875bb3c4cb1e303', {
				cluster: 'us3',
				authEndpoint: base + '/pusher_jsonp_auth'
			});

			channel = pusher.subscribe('private-presentation-' + code);

			channel.bind('client-slide-change', (data) => {
				getVerses(data.verses);
			});
		});
	}

	async function getVerses(str) {
		verses = await API.get('/quran/verses/' + str + '.json');
	}
</script>

{#if !pusher}
	<h1>Connecting to your presentation <Spinner /></h1>
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
</style>
