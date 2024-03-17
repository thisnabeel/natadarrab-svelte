<script>
	import Wrapper from './Wrapper.svelte';

	export let bg = 'fff';
</script>

<Wrapper {bg} title={'Notes'}>
	<div slot="settings">
		<div class="btn btn-outline-info">
			<i class="fa fa-wrench" />
		</div>
	</div>
	<div slot="main">
		<textarea name="" id="" class="form-control" />
	</div>
</Wrapper>

<style>
</style>
