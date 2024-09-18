<script>
	import Landing from '$lib/components/Home/Landing/Index.svelte';
	import { user } from '$lib/stores/user';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		if ($user) {
			goto(`/dashboard`);
		}
	});
</script>

<Landing />
