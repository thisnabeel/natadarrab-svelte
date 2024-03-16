<script>
	import { rightNavTab } from '$lib/stores/quranflow';

	export let bg;
	export let title;

	function goBack() {
		rightNavTab.set(0);
	}
</script>

<div class="wrapper" style="background-color:{bg}">
	<div style="display:flex;">
		<div style="flex: 1 1 10%;" class="btn" on:click={goBack}>
			<i class="fa fa-arrow-circle-left" />
		</div>
		<span style="flex: 1 1 80%; text-align: center;"> {title} </span>
		<slot name="settings" />
	</div>

	<slot name="main" />
</div>

<style>
	.wrapper {
		padding: 0.5em;
		height: 87vh;
	}
</style>
