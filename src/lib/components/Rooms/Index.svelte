<script>
	import { onMount } from 'svelte';
	import API from '$lib/api/api.js';
	import Spinner from '../Spinner/Spinner.svelte';
	import {
		grid,
		playlists,
		selectedSegment,
		rightNavTab,
		segments,
		editMode
	} from '$lib/components/QuranFlow/store';
	import { page } from '$app/stores';
	import { user } from '$lib/stores/user';

	import { device } from '$lib/utils/device.js';
	import Desktop from './Desktop/Index.svelte';
	import Mobile from './Mobile/Index.svelte';
	import Nav from './Nav/Index.svelte';
</script>

<Nav />
{#if $device === 'mobile'}
	<Mobile />
{:else}
	<Desktop />
{/if}
