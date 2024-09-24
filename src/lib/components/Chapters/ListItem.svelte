<script>
	import { goto } from '$app/navigation';
	import { user } from '$lib/stores/user';
	import ListItem from './ListItem.svelte';

	export let chapter;
	export let selectedChapter;
	export let selectChapter;
	export let visitChapter;
</script>

<li class="chapter" class:selected={selectedChapter ? selectedChapter.id === chapter.id : false}>
	<div class="head" on:click={() => selectChapter(chapter)}>
		{chapter.title}

		{#if $user && $user.admin}
			<div
				class="btn btn-warning"
				on:click={() => {
					goto(`/chapters/${chapter.id}/edit`);
				}}
			>
				<i class="fa fa-link" />
			</div>
		{/if}

		<div
			class="btn btn-outline-primary"
			on:click={() => {
				goto(`/chapters/${chapter.id}`);
			}}
		>
			<i class="fa fa-eye" />
		</div>
	</div>

	<div class="children">
		{#each chapter.children || [] as child}
			<ListItem {selectedChapter} chapter={child} {selectChapter} {visitChapter} />
		{/each}
	</div>
</li>

<style>
	.selected > .head {
		background-color: #b8eeff !important;
	}

	.wrapper {
		padding: 20px;
	}

	.chapter {
		padding-left: 10px;
	}
	.chapter.selected {
		padding-left: 6px;
		border-left: 4px solid #b8eeff;
	}

	.head {
		padding: 8px;
		font-size: 24px;
		background: rgb(255 248 222);
		margin: 4px;
		border-radius: 8px;
	}

	.children {
		margin-left: 32px;
	}
</style>
