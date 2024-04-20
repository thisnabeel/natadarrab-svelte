<script>
	import Chapter from '$lib/components/Chapters/Show.svelte';

	import { page } from '$app/stores';
</script>

<Chapter id={$page.params.id} />
