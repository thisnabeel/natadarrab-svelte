<script>
	export let words = ['apple', 'orange', 'banana'];
</script>

<div class="inline-list">
	{#each words as word, index}
		<div class="word">
			{word}
			{#if index < words.length - 1}
				<svg class="arrow" viewBox="0 0 60 30">
					<path d="M 0 0 Q 30 30 60 0" stroke="currentColor" stroke-width="2" fill="transparent" />
					<path
						d="M 55 -5 L 60 0 L 55 5"
						stroke="currentColor"
						stroke-width="2"
						fill="currentColor"
					/>
				</svg>
			{/if}
		</div>
	{/each}
</div>

<style>
	.inline-list {
		display: flex;
		align-items: center;
		padding: 20px;
	}

	.word {
		margin-right: 4rem; /* Adjust spacing as needed */
		position: relative;
		display: flex;
		align-items: center;
	}

	.arrow {
		position: absolute;
		bottom: -20px; /* Adjust positioning as needed */
		left: 50%; /* Position arrow in the center of the word */
		transform: translateX(-50%);
		width: 60px; /* Width of the arrow */
		height: 30px; /* Height of the arrow */
	}
</style>
