<script>
	import LeftBar from './LeftBar/LeftBar.svelte';
	import { onMount } from 'svelte';

	import SpotlightSearch from './Search/Spotlight.svelte';
	import { user } from '$lib/stores/user';
	let expanded = false;
	import Dashboard from '$lib/components/Home/Dashboards/Index.svelte';
	import { showSpotlight } from '$lib/stores/spotlight';
</script>

<div class="dashboard" class:blur={$showSpotlight}>
	{#if $user}
		<div class="leftShelf" class:expanded>
			<LeftBar
				expand={() => {
					expanded = !expanded;
				}}
				{expanded}
			/>
		</div>
	{/if}
	<div class="main">
		<!-- <Dashboard /> -->
		<slot />
	</div>
</div>

{#if $user}
	<SpotlightSearch />
{/if}

<style>
	.blur {
		filter: blur(10px);
	}
	.leftShelf.expanded {
		width: 160px;
	}
	.dashboard {
		height: 100vh;
		/* min-width: 1200px; */
		display: flex;
		background-color: rgb(255, 255, 255);
	}

	.leftShelf {
		flex: 0 0 auto;
		border-right: 1px solid rgb(231, 232, 234);
		border-top-color: rgb(231, 232, 234);
		border-bottom-color: rgb(231, 232, 234);
		border-left-color: rgb(231, 232, 234);
		background-color: rgb(255, 255, 255);
		transition: width 0.2s ease 0s;
		width: 60px;
	}

	nav {
		list-style: none;
		margin: 0px;
		padding: 8px 0px;
		position: relative;
	}
	.main {
		-webkit-box-flex: 1;
		flex-grow: 1;
		position: relative;
		overflow: auto;
	}
</style>
