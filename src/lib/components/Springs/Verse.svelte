<script>
	export let verse;
	let showTranslation;
</script>

<span class:expanded={showTranslation}>
	{verse.arabic}<span class="ref" on:click={() => (showTranslation = !showTranslation)}
		>{verse.item.ref}</span
	>
	{#if showTranslation}
		<div style="direction: ltr; text-align: left;">
			{verse.translation.english}
		</div>
	{/if}
</span>

<style>
	.ref {
		padding: 4px 10px;
		background: beige;
		border-radius: 10px;
		margin: 10px;
		font-size: 20px;
	}

	.expanded {
		padding: 18px;
		border: 1px solid rgb(215, 255, 217);
		border-radius: 10px;
		display: block;
		background-color: rgb(234, 255, 235);
	}
</style>
