<script>
	import API from '$lib/api/api';
	import VerseSliced from '$lib/components/Quran/Verses/Verse/VerseSliced.svelte';
	import { gopher } from '../Mobile/store';

	export let verse;
	export let trans;
	export let sliced = true;

	$: console.log({ trans });
	$: findEng = (ref) => {
		const [c, v] = ref.split(':');

		getVerseText(Number(c), Number(v));
	};

	function getVerseText(chapterNumber, verseNumber) {
		if (!trans) return '';
		const arr = Array.from(trans);
		console.log('trans', { arr });
		for (let i = 0; i < arr.length; i++) {
			const verse = trans.quran[i];
			if (verse.chapter === chapterNumber && verse.verse === verseNumber) {
				return verse.text;
			}
		}
		return '';
	}

	function selectSlice(item) {
		// console.log({ slice });
		console.log({ item });
		const triggerId = item.slice.getAttribute('data-trigger-id');
		let triggerType = item.triggerType;
		console.log({ triggerType });

		getWord(triggerId, triggerType);
	}

	async function getWord(triggerId, triggerType) {
		const res = await API.get(`/${triggerType}/${triggerId}.json`);
		console.log({ res });
		gopher.set({
			kind: 'word',
			item: res
		});
		console.log($gopher);
		return res;
	}

	$: trans_ref = Number(verse.item.ref.split(':')[1] - 1);
	$: translation = trans ? (trans[trans_ref] ? trans[trans_ref].text : null) : null;
</script>

<li class="verse">
	{#if sliced}
		<div class="iraab" style="padding: 1em;">
			<VerseSliced {selectSlice} lineHeight={'2.5em'} html={verse.iraab} />
			<span class="ref">{verse.item.ref}</span>
		</div>
	{:else}
		{verse.arabic} <span class="ref">{verse.item.ref}</span>
	{/if}
	{#if translation}
		<div class="translation">
			{translation}
		</div>
	{/if}
</li>

<style>
	.verse {
		padding: 20px;
		font-size: 24px;
		line-height: 44px;
		text-align: right;
		background: white;
		margin: 8px 4px;
		border: 1px solid #eee;
		border-radius: 10px;
	}

	.translation {
		font-size: 18px;
		line-height: 24px;
		text-align: left;
		padding: 10px;
		border-top: 1px solid #ccc;
		margin-top: 20px;
		padding-top: 20px;
		font-family: Arial, sans-serif;
		color: #35281e;
	}
</style>
