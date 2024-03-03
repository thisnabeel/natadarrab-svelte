<script>
	import Ref from './Ref.svelte';
	let verseRefs = [];
</script>

<div class="wrapper">
	<h1>Sketch</h1>

	<div class="verses">
		<i class="fa fa-plus" on:click={() => (verseRefs = [...verseRefs, '1:1'])} />
		{#each verseRefs as ref}
			<Ref {ref} />
		{/each}
	</div>
</div>

<style>
	.wrapper {
		max-width: 350px;
		display: block;
		margin: 0 auto;
	}
</style>
