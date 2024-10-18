<script>
	import API from '$lib/api/api';
	import VerseSliced from '$lib/components/Quran/Verses/Verse/VerseSliced.svelte';

	import { gopher, grid, translation } from '$lib/components/QuranFlow/store';
	import { device } from '$lib/utils/device';

	export let verse;
	export let trans = null;
	export let sliced = true;
	export let inline = false;
	export let wordHandler;
	export let expandable = false;

	let showTranslation = false;

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

	async function selectSlice(item) {
		// console.log({ slice });
		console.log({ item });
		const triggerId = item.slice.getAttribute('data-trigger-id');
		let triggerType = item.triggerType;
		console.log({ triggerType });

		wordHandler(await getWord(triggerId, triggerType));
	}

	async function getWord(triggerId, triggerType) {
		const res = await API.get(`/${triggerType}/${triggerId}.json`);
		return {
			kind: 'word',
			item: res,
			verse: verse
		};
	}

	$: trans_ref = Number(verse.item.ref.split(':')[1] - 1);
	// $: translation = trans ? (trans[trans_ref] ? trans[trans_ref].text : null) : null;
	$: getTrans(trans);

	function getTrans(item) {
		if ($translation) {
			trans = $translation.quran.find(
				(obj) =>
					obj.chapter === Number(verse.item.ref.split(':')[0]) &&
					obj.verse === Number(verse.item.ref.split(':')[1])
			);
		}
	}
	function toggleTranslation() {
		console.log('clicked', trans);
		showTranslation = !showTranslation;
	}
</script>

{#if inline}
	<span class="iraab inline" class:mobile={$device === 'mobile'} class:showTranslation>
		<VerseSliced {selectSlice} lineHeight={'2.5em'} html={verse.iraab} />
		<span class="ref" on:click={toggleTranslation}
			>{verse.item.ref.split(':')[1]}
			<i class="fa fa-language toggle-translate" />
		</span>
		{#if showTranslation}
			<div class="translation">
				{verse.translation.english}
				<hr />
				{verse.translation.urdu}
			</div>
		{/if}
		{#if showTranslation && expandable}
			<i
				class="fa fa-arrow-right expand"
				on:click={() => {
					grid.set('default');
				}}
			/>
		{/if}
	</span>
{:else}
	<li class="verse" class:mobile={$device === 'mobile'}>
		{#if sliced}
			<div class="iraab" style="padding: 1em;">
				<VerseSliced {selectSlice} lineHeight={'2.5em'} html={verse.iraab} />
				<span class="ref">{verse.item.ref} </span>
				<i on:click={toggleTranslation} class="fa fa-language" />
			</div>
		{:else}
			{verse.arabic} <span class="ref">{verse.item.ref}</span>
		{/if}
		{#if showTranslation}
			<div class="translation">
				{verse.translation.english}
				<hr />
				{verse.translation.urdu}
			</div>
		{/if}
	</li>
{/if}

<style>
	.mobile.verse .iraab {
		padding: 0;
	}

	.mobile.verse {
		font-size: 19px;
		line-height: 2.5em;
		text-align: right;
		padding: 0;
		border: 0;
		margin: 0;
	}
	.inline :global(> div) {
		display: inline;
		unicode-bidi: bidi-override;
	}
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
		border-bottom: 1px solid #ccc;
		margin-top: 20px;
		padding-top: 20px;
		font-family: Arial, sans-serif;
		color: #35281e;
	}

	.inline .translation {
		display: block;
		text-align: left;
		font-size: 24px;
		line-height: 34px;
	}

	.inline .ref {
		font-size: 24px;
		color: #86aece;
		background: #f8f6f6;
		padding: 10px;
		position: relative;
		text-align: center;
		display: inline-block;
		margin: 0 8px;
	}

	.inline .toggle-translate {
		position: absolute;
		bottom: -10px;
		left: 0;
		right: 0;

		font-size: 15px;
		left: 50%;
		transform: translateX(-50%);
	}

	.inline.showTranslation {
		/* display: block; */
	}

	.iraab {
		position: relative;
	}

	.iraab .expand {
		position: absolute;
		right: -60px;
		bottom: 50%;
		background-color: rgb(238, 216, 235);
		padding: 10px;
	}
</style>
