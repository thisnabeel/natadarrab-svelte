<script>
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';

	let element;
	let editor;

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [StarterKit],
			content: '<p>Hello World! 🌍️ </p>',
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
				console.log('changed');
			}
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

{#if editor}
	<button
		on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
		class:active={editor.isActive('heading', { level: 1 })}
	>
		H1
	</button>
	<button
		on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
		class:active={editor.isActive('heading', { level: 2 })}
	>
		H2
	</button>
	<button
		on:click={() => editor.chain().focus().setParagraph().run()}
		class:active={editor.isActive('paragraph')}
	>
		P
	</button>
{/if}

<br /><br />
<div class="doc" bind:this={element} />

<style>
	button.active {
		background: #d6edff;
	}
	button {
		padding: 6px;
		border-radius: 10px;
	}

	.doc {
		padding: 10px;
		background: #fff;
		border-radius: 10px;
	}
	.doc :global(.ProseMirror:focus) {
		outline: none;
	}

	.doc :global(h1) {
		font-size: 34px;
	}
</style>
