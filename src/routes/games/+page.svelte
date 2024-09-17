<script>
	import { onMount } from 'svelte';
	import { user } from '$lib/stores/user';
	import { goto } from '$app/navigation';
	import getQueryParam from '$lib/functions/params';
	import Games from '$lib/components/Main/Views/Games/Index.svelte';
</script>

<Games />
