<script>
	import Dashboard from '$lib/components/Main/Index.svelte';
	import { onMount } from 'svelte';
	import { user } from '$lib/stores/user';
	import { goto } from '$app/navigation';
	import getQueryParam from '$lib/functions/params';
	import Home from '$lib/components/Home/Dashboards/Index.svelte';
	onMount(() => {
		if (getQueryParam('game') && getQueryParam('game').length > 0) {
			if (!$user) {
				goto(`/games/${getQueryParam('game')}`);
			}
		}
	});
</script>

<Home />
