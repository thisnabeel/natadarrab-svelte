<script>
	import API from '$lib/api/api';
	import { onMount } from 'svelte';

	let chapters = [];
	onMount(async () => {
		console.log(chapters);
	});
</script>

<h1>Access Denied: Please Sign In</h1>

<style>
	h1 {
		font-size: 34px;
		margin: 34px;
	}
</style>
