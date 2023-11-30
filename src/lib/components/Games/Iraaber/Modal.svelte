<script>
	import { closeModal } from 'svelte-modals';

	import Iraaber from '$lib/components/Games/Iraaber/Index.svelte';
	export let verseRef;
</script>

<div class="contents">
	<Iraaber {verseRef} />
</div>

<style>
	.contents {
		min-width: 240px;
		/* padding: 16px; */
		/* max-width: 500px; */
		width: 80vw;
		padding: 1vw;
		border-radius: 10px;
		background: white;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		pointer-events: auto;
		overflow-y: scroll;
		max-height: 90vh;
	}

	.wrapper {
		display: flex;
		border: 0px solid rgb(236, 242, 254);
	}

	.left {
		border-right: 1px solid rgb(231, 232, 234);
		border-top-color: rgb(231, 232, 234);
		border-bottom-color: rgb(231, 232, 234);
		border-left-color: rgb(231, 232, 234);
		width: 395px;
		flex-shrink: 0;
		max-height: calc(100vh - 64px);
		padding: 32px 0px 96px 32px;
		box-sizing: border-box;
		overflow-y: scroll;
	}
	.top h2 {
		margin: 0px;
		font-weight: 700;
		font-size: 2rem;
		line-height: 1.3;
		font-family: 'Avenir Next', sans-serif;
		color: rgb(35, 39, 45);
	}

	.time {
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		margin-bottom: 8px;
	}

	.clock {
		line-height: 1;
		width: 16px;
		height: 16px;
		margin-right: 8px;
	}

	.text {
		display: flex;
		gap: 8px;
	}

	.text p {
		margin: 0px;
		font-weight: 400;
		font-size: 1rem;
		line-height: 1.5;
		font-family: 'Avenir Next', sans-serif;
		color: rgb(35, 39, 45);
	}
</style>
