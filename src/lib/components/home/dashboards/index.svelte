<script>
	import { user } from '$lib/stores/user';
	import Teacher from '$lib/components/Home/Dashboards/Teacher.svelte';
	import User from './User.svelte';
</script>

{#if $user && $user.admin}
	<Teacher />
{:else}
	<User />
{/if}

<style>
</style>
