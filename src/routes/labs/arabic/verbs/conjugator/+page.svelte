<script>
	import Search from '$lib/components/Dashboard/Search/Search.svelte';
	let chosenVerb;
	let words = [];
	let stickers = {
		prefixes: ['ي', 'ت', 'ن', 'ا'],
		suffixes: ['تَ', 'تِ', 'تُ', 'تْ', 'نَ', 'نَا', 'تُمَا', 'تُنَّ', 'تُمْ', 'وْنَ', 'ينَ'],
		harakaat: ['َ', 'ِ', 'ُ', 'ْ'],
		stretches: ['ا', 'ي', 'و'],
		smoothie: ['ا', 'ي', 'و']
	};
	let searchInput = '';
	let chosenLetters = [];

	let combos = [
		// past
		{ pronoun: 'You', tense: 'past', gender: 'm', suffix: ['تَ'], prefix: [] },
		{ pronoun: 'You', tense: 'past', gender: 'f', suffix: ['تِ'], prefix: [] },
		{ pronoun: 'You both', tense: 'past', gender: 'm/f', suffix: ['تُمَا'], prefix: [] },
		{ pronoun: 'You All', tense: 'past', gender: 'm', suffix: ['تُمْ'], prefix: [] },
		{ pronoun: 'You All', tense: 'past', gender: 'f', suffix: ['تُنَّ'], prefix: [] },
		{ pronoun: 'I', tense: 'past', gender: 'm/f', suffix: ['تُ'], prefix: [] },
		{ pronoun: 'We', tense: 'past', gender: 'm/f', suffix: ['نَا'], prefix: [] },
		{ pronoun: 'She', tense: 'past', gender: 'm/f', suffix: ['تْ'], prefix: [] },
		{ pronoun: 'They', tense: 'past', gender: 'm', suffix: ['وْنَ'], prefix: [] },
		{ pronoun: 'They', tense: 'past', gender: 'f', suffix: ['نَ'], prefix: [] },

		// present
		{ pronoun: 'You', tense: 'present', gender: 'm', suffix: [], prefix: ['ت'] },
		{ pronoun: 'You', tense: 'present', gender: 'f', suffix: ['ينَ'], prefix: ['ت'] },
		// { pronoun: 'You both', tense: 'present', gender: 'm/f', suffix: [], prefix: [] },
		{ pronoun: 'You All', tense: 'present', gender: 'm', suffix: ['وْنَ'], prefix: ['ت'] },
		{ pronoun: 'You All', tense: 'present', gender: 'f', suffix: ['نَ'], prefix: ['ت'] },
		{ pronoun: 'I', tense: 'present', gender: 'm/f', suffix: [], prefix: ['ا'] },
		{ pronoun: 'We', tense: 'present', gender: 'm/f', suffix: [], prefix: ['ن'] },
		{ pronoun: 'He', tense: 'present', gender: 'm/f', suffix: [], prefix: ['ي'] },
		// { pronoun: 'She', tense: 'present', gender: 'm/f', suffix: [], prefix: [] },
		{ pronoun: 'They', tense: 'present', gender: 'm', suffix: ['وْنَ'], prefix: ['ي'] },
		{ pronoun: 'They', tense: 'present', gender: 'f', suffix: ['نَ'], prefix: ['ي'] }
	];

	function removeHaraka(letter) {
		return letter.replace(/[\u064B-\u065F]/g, '');
	}

	function findBestCombo(chosenLetters) {
		let chosenSuffixes = chosenLetters
			.filter((letter) => letter.category === 'suffix')
			.map((letter) => letter.content);
		let chosenPrefixes = chosenLetters
			.filter((letter) => letter.category === 'prefix')
			.map((letter) => removeHaraka(letter.content));

		for (let combo of combos) {
			let comboSuffixes = combo.suffix;
			let comboPrefixes = combo.prefix.map(removeHaraka);

			let suffixMatch =
				comboSuffixes.every((suffix) => chosenSuffixes.includes(suffix)) &&
				chosenSuffixes.every((suffix) => comboSuffixes.includes(suffix));
			let prefixMatch =
				comboPrefixes.every((prefix) => chosenPrefixes.includes(prefix)) &&
				chosenPrefixes.every((prefix) => comboPrefixes.includes(prefix));

			if (suffixMatch && prefixMatch) {
				return combo;
			}
		}

		return null; // If no matching combo is found
	}

	let bestCombo = null;

	$: bestCombo = findBestCombo(chosenLetters);

	function handleDelivery(payload) {
		console.log(payload);
		chosenVerb = payload.word;
		searchInput = '';
		words = [];
	}

	let popup = {
		visible: false,
		root: null,
		prefix: null
	};

	function showPopupRoot(root) {
		popup = { visible: true, root };
	}

	function showPopupPrefix(prefix) {
		popup = { visible: true, prefix };
	}

	function hidePopup() {
		popup = { visible: false, root: null, prefix: null };
	}

	function appendHaraka(haraka) {
		chosenLetters = [...chosenLetters, haraka];
		hidePopup();
	}

	$: console.log(chosenLetters);
</script>

<h1 class="page-title">Sarf Lab:</h1>

<Search deliver={handleDelivery} show={true} searchInput={''} autostart={'n s r'} {words} />
<hr />

{#if chosenVerb}
	<div class="built">
		<div class="chosen">
			<h1>
				<p>Form {chosenVerb.v_form}</p>
				{#each chosenVerb.v_word.split('/') as word, index}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span on:click={() => (chosenLetters = [...word.replace(' ', '').split('')])}
						>{word.replace(' ', '')}</span
					>
					{#if index === 0}{' / '}{/if}
				{/each}
			</h1>
		</div>

		{#if chosenLetters && chosenLetters.length > 0}
			<div class="inputted">
				<h1>
					{#each chosenLetters as letter}
						<span class={letter.category}>{letter.content}</span>
					{/each}
				</h1>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="fa fa-times clear" on:click={() => (chosenLetters = [])} />
			</div>

			{#if bestCombo && bestCombo.pronoun}
				<div class="rendered">
					{bestCombo.pronoun}
					{bestCombo.gender}.
				</div>
			{/if}
		{/if}
	</div>
	<hr />
	<br />
	<div class="flex">
		<hr />
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<ul class="stickers suffixes">
			<h1>Suffixes:</h1>
			{#each stickers.suffixes as suffix}
				<li
					class="sticker"
					on:click={() => {
						if (chosenLetters.find((c) => c.content === suffix && c.category === 'suffix')) {
							chosenLetters = chosenLetters.filter(
								(c) => c.content !== suffix && c.category !== 'suffix'
							);
							return;
						} else {
							chosenLetters = chosenLetters.filter((c) => c.category !== 'suffix');
							chosenLetters = [
								...chosenLetters,
								{
									content: suffix,
									category: 'suffix'
								}
							];
						}
					}}
					class:chosenSuffix={chosenLetters.find(
						(c) => c.content === suffix && c.category === 'suffix'
					)}
				>
					{suffix}
				</li>
			{/each}
		</ul>

		<ul class="stickers roots rtl">
			<h1 style="direction: ltr">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<span style="color: blue;"> Letters: </span>
			</h1>
			{#each chosenVerb.v_root.split(' ') as root}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li
					class="sticker"
					on:mouseenter={() => showPopupRoot(root)}
					on:mouseleave={() => hidePopup()}
				>
					<span
						class="root-letter"
						on:click={(e) => {
							chosenLetters = [
								...chosenLetters,
								{
									content: root,
									category: 'root'
								}
							];
						}}
					>
						{root}
					</span>
					{#if popup.visible && popup.root === root}
						<div class="popup">
							{#each stickers.harakaat as haraka}
								<button
									class="btn btn-outline-info"
									on:click={() => {
										if (
											chosenLetters.find((c) => c.content.includes(root) && c.category === 'root')
										) {
											const index = chosenLetters.findIndex(
												(c) => c.content.includes(root) && c.category === 'root'
											);
											chosenLetters[index].content = root + haraka;
											chosenLetters = chosenLetters;
										} else {
											chosenLetters = [
												...chosenLetters,
												{
													content: root + haraka,
													category: 'root'
												}
											];
										}
									}}>{haraka}</button
								>
							{/each}
						</div>
					{/if}
				</li>
			{/each}
			{#if ['ي', 'و', 'ا'].some((char) => chosenVerb.v_root.split(' ').includes(char))}
				<br /><br />
				<hr />
				<br /><br />
				<h1>Blending Helpers</h1>
				<ul class="stickers suffixes">
					{#each stickers.smoothie as blender}
						<li
							class="sticker"
							on:click={() => {
								if (chosenLetters.find((c) => c.content === blender && c.category === 'blender')) {
									chosenLetters = chosenLetters.filter(
										(c) => c.content !== blender && c.category !== 'blender'
									);
									return;
								} else {
									chosenLetters = chosenLetters.filter((c) => c.category !== 'blender');
									chosenLetters = [
										...chosenLetters,
										{
											content: blender,
											category: 'blender'
										}
									];
								}
							}}
						>
							{blender}
						</li>
					{/each}
				</ul>
			{/if}
		</ul>

		<ul class="stickers prefixes">
			<h1>Prefixes:</h1>
			{#each stickers.prefixes as prefix}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li
					class="sticker"
					on:mouseenter={() => showPopupPrefix(prefix)}
					on:mouseleave={() => hidePopup()}
					class:chosenPrefix={chosenLetters.find(
						(c) => c.content.includes(prefix) && c.category === 'prefix'
					)}
					on:click={() => {
						if (chosenLetters.find((c) => c.content.includes(prefix) && c.category === 'prefix')) {
							// console.log(chosenLetters);
							// chosenLetters = chosenLetters.filter((c) => c.category !== 'prefix');
							// return;
						}
					}}
				>
					{prefix}
					{#if popup.visible && popup.prefix === prefix}
						<div class="popup">
							{#each stickers.harakaat as haraka}
								<button
									class="btn btn-outline-info"
									on:click={() => {
										if (
											chosenLetters.find((c) => c.content === prefix && c.category === 'prefix')
										) {
											chosenLetters = chosenLetters.filter(
												(c) => c.content !== prefix && c.category !== 'prefix'
											);
											return;
										} else {
											chosenLetters = chosenLetters.filter((c) => c.category !== 'prefix');
											chosenLetters = [
												{
													content: prefix + haraka,
													category: 'prefix'
												},
												...chosenLetters
											];
										}
									}}>{haraka}</button
								>
							{/each}
						</div>
					{/if}
				</li>
			{/each}
		</ul>
		<hr />
	</div>

	<hr />
{/if}

<style>
	.rtl {
		direction: rtl;
	}
	.sticker {
		font-size: 34px;
		display: inline-block;
		padding: 10px;
		background: #eee;
		border-radius: 100%;
		width: 74px;
		height: 74px;
		text-align: center;
		margin: 6px;
	}

	.sticker:hover {
		background-color: yellow;
	}

	.stickers {
		width: max-content;
		margin: 0 auto;
		text-align: center;
	}

	.flex {
		display: flex;
	}

	.flex ul {
		flex: 1 1 33%;
	}

	.built {
		text-align: center;
	}

	.chosen {
		padding: 12px;
		font-size: 38px;
	}

	.inputted {
		display: block;
		margin: 0 auto;
		width: max-content;
		position: relative;
	}

	.inputted .clear {
		/* position: absolute;
		right: -40px;
		color: #eee;
		top: 20px; */

		position: absolute;
		right: -80px;
		bottom: 0;
		color: #ffdcdc;
		font-size: 34px;
		border: 1px solid #eee;
		padding: 20px;
		border-radius: 10px;
	}

	.chosen > h1 {
		background: #f2ffda;
		display: block;
		width: max-content;
		margin: 0 auto;
		padding: 20px;
		border-radius: 20px;
	}

	.inputted h1 {
		font-size: 76px;
		color: #4c77ff;
	}

	.popup {
		position: absolute;
		bottom: -166px;
		width: -moz-max-conten;
		width: 180px;
		/* right: 0; */
		left: -70%;
		padding: 10px;
	}

	.popup button {
		margin: 2px;
		font-size: 32px;
		width: 52px;
		padding: 10px;
		/* background-color: #fff; */
		z-index: 9999;
	}

	.sticker {
		position: relative;
	}

	.suffix,
	.prefix {
		color: #a24c09;
	}

	.page-title {
		font-size: 34px;
	}

	.chosenSuffix,
	.chosenPrefix {
		background: #a24c09;
		color: #fff;
	}

	.root-letter {
		font-size: 34px;
		display: inline-block;
		padding: 10px;
		background: #eee;
		border-radius: 100%;
		width: 74px;
		height: 74px;
		text-align: center;
		margin: 6px;
		top: -16px;
		left: 16px;
		position: relative;
	}

	.root-letter:hover {
		background-color: yellow;
	}

	.chosenSuffix:hover {
		background-color: orange;
	}

	.rendered {
		background: #eee;
		display: inline-block;
		padding: 10px;
		margin: 20px;
		border-radius: 10px;
		font-size: 34px;
		font-weight: bolder;
		color: #a34c09;
	}
</style>
