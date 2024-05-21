<script>
	import Search from '$lib/components/Dashboard/Search/Search.svelte';
	let chosenVerb;
	let words = [];
	let stickers = {
		prefixes: ['ي', 'ت', 'ن'],
		suffixes: ['َت', 'تِ', 'تُ', 'تْ', 'َن', 'نَا', 'تُمَا', 'تُنَّ', 'تُمْ', 'وْنَ', 'ِينَ'],
		harakaat: ['َ', 'ِ', 'ُ', 'ْ'],
		stretches: ['ا', 'ي', 'و']
	};
	let searchInput = '';
	let chosenLetters = [];

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

<Search deliver={handleDelivery} show={true} searchInput={''} {words} />
<hr />

{#if chosenVerb}
	<div class="built">
		<div class="chosen">
			<h1>
				{#each chosenVerb.v_word.split('/') as word, index}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span on:click={() => (chosenLetters = [...word.replace(' ', '').split('')])}
						>{word.replace(' ', '')}</span
					>
					{#if index === 0}{' / '}{/if}
				{/each}
			</h1>
		</div>

		<div class="inputted">
			<h1>
				{#each chosenLetters as letter}
					<span class={letter.category}>{letter.content}</span>
				{/each}
			</h1>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			{#if chosenLetters}
				<div class="fa fa-times clear" on:click={() => (chosenLetters = [])} />
			{/if}
		</div>
	</div>
	<hr />
	<div class="flex">
		<hr />
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<ul class="stickers suffixes">
			<h1>Suffixes:</h1>
			{#each stickers.suffixes as suffix}
				<li
					class="sticker"
					on:click={() =>
						(chosenLetters = [
							...chosenLetters,
							{
								content: suffix,
								category: 'suffix'
							}
						])}
				>
					{suffix}
				</li>
			{/each}
		</ul>

		<ul class="stickers roots rtl">
			<h1 style="direction: ltr">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<span
					style="color: blue;"
					on:click={() => (chosenLetters = [...chosenVerb.v_root.split(' ')])}>Root</span
				> Letters:
			</h1>
			{#each chosenVerb.v_root.split(' ') as root}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li
					class="sticker"
					on:mouseenter={() => showPopupRoot(root)}
					on:mouseleave={() => hidePopup()}
				>
					<span
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
									on:click={() =>
										(chosenLetters = [
											...chosenLetters,
											{
												content: root + haraka,
												category: 'root'
											}
										])}>{haraka}</button
								>
							{/each}
						</div>
					{/if}
				</li>
			{/each}
		</ul>

		<ul class="stickers prefixes">
			<h1>Prefixes:</h1>
			{#each stickers.prefixes as prefix}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li
					class="sticker"
					on:mouseenter={() => showPopupPrefix(prefix)}
					on:mouseleave={() => hidePopup()}
				>
					{prefix}
					{#if popup.visible && popup.prefix === prefix}
						<div class="popup">
							{#each stickers.harakaat as haraka}
								<button
									class="btn btn-outline-info"
									on:click={() =>
										(chosenLetters = [
											{
												content: prefix + haraka,
												category: 'prefix'
											},
											...chosenLetters
										])}>{haraka}</button
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

	<div class="flex">
		<hr />
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<ul class="stickers suffixes">
			<h1>Harakaat:</h1>
			{#each stickers.harakaat as suffix}
				<li class="sticker" on:click={() => (chosenLetters = [...chosenLetters, suffix])}>
					{suffix}
				</li>
			{/each}
			<br />
			{#each stickers.stretches as suffix}
				<li class="sticker" on:click={() => (chosenLetters = [...chosenLetters, suffix])}>
					{suffix}
				</li>
			{/each}
		</ul>
	</div>
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
		position: absolute;
		right: -40px;
		color: #eee;
		top: 20px;
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
		bottom: -75px;
		width: max-content;
		right: 0;
		left: 0;
		padding: 10px;
	}

	.popup button {
		margin: 2px;
		font-size: 32px;
	}

	.sticker {
		position: relative;
	}

	.suffix,
	.prefix {
		color: #ff4545;
	}

	.page-title {
		font-size: 34px;
	}
</style>
