<script>
	export let verse;
	export let trans;

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

	$: trans_ref = Number(verse.item.ref.split(':')[1] - 1);
	$: translation = trans[trans_ref] ? trans[trans_ref].text : null;
</script>

<li class="verse">
	{verse.arabic} <span class="ref">{verse.item.ref}</span>
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
