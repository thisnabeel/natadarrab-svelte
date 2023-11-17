<script>
	import { page } from '$app/stores';
	import Iraaber from '$lib/components/Games/Iraaber/Index.svelte';
	let verseRef = $page.params.verse;
</script>

<Iraaber {verseRef} />

<style>
</style>
