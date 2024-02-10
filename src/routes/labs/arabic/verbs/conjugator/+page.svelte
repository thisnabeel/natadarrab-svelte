<script>
	import Search from '$lib/components/Dashboard/Search/Search.svelte';
	let chosenVerb;
	let words = [];
	let stickers = {
		prefixes: ['ي', 'ت', 'ن'],
		suffixes: ['َت', 'تِ', 'تُ', 'تْ', 'َن', 'نَا', 'تُمَا', 'تُنَّ', 'تُمْ'],
		harakaat: ['َ', 'ِ', 'ُ', 'ْ'],
		stretches: ['ا', 'ي', 'و']
	};
	let searchInput = '';
	let chosenLetters = [];

	function handleDelivery(payload) {
		console.log(payload);
		chosenVerb = payload;
		searchInput = '';
		words = [];
	}

	let popup = {
		visible: false,
		root: null
	};

	function showPopup(root) {
		popup = { visible: true, root };
	}

	function hidePopup() {
		popup = { visible: false, root: null };
	}

	function appendHaraka(haraka) {
		chosenLetters = [...chosenLetters, haraka];
		hidePopup();
	}
</script>

<h1>Verb Conjugator:</h1>

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
			<h1>{chosenLetters.join('')}</h1>
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
				<li class="sticker" on:click={() => (chosenLetters = [...chosenLetters, suffix])}>
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
					on:click={() => (chosenLetters = [...chosenLetters, root])}
					on:mouseenter={() => showPopup(root)}
					on:mouseleave={() => hidePopup()}
				>
					{root}
					{#if popup.visible && popup.root === root}
						<!-- <div class="popup">
							{#each stickers.harakaat as haraka}
								<button class="btn btn-info" on:click={() => appendHaraka(haraka)}>{haraka}</button>
							{/each}
						</div> -->
					{/if}
				</li>
			{/each}
		</ul>

		<ul class="stickers prefixes">
			<h1>Prefixes:</h1>
			{#each stickers.prefixes as prefix}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li class="sticker" on:click={() => (chosenLetters = [prefix, ...chosenLetters])}>
					{prefix}
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
		color: #1010da;
	}

	.popup {
		position: absolute;
		bottom: -100px;
	}

	.popup button {
	}

	.sticker {
		position: relative;
	}
</style>
