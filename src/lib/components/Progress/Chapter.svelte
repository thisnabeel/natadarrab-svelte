<script>
	export let chapter;
</script>

<div class="wrapper">
	<h1 class="title text-center">{chapter.title}</h1>
	{@html chapter.post}
</div>

<style>
	.title {
		margin: 30px;
		font-size: 34px;
	}

	.wrapper {
		padding: 3em;
	}
</style>
