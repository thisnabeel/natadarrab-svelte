<script>
	import { grid, rightNavTab, selectedNote } from '$lib/components/QuranFlow/store';

	export let bg;
	export let title;

	function goBack() {
		if ($selectedNote) {
			selectedNote.set(null);
		} else {
			rightNavTab.set(0);
			grid.set('tri-view');
		}
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
