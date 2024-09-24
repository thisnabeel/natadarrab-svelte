<script>
	import { onMount, afterUpdate } from 'svelte';
	import Nav from './Nav/Index.svelte';
	import API from '$lib/api/api';
	import SelectedChapter from './Chapter/Edit.svelte';
	import ListItem from './ListItem.svelte';
	import debounceSave from '$lib/functions/debounce';
	import { user } from '$lib/stores/user';

	let chapters = [];
	let selectedChapter = null;
	let visitingChapter = null;
	let organizedChapters = [];

	let unsaved = false;
	let saving = false;

	onMount(async () => {
		const res = await API.get('/chapters.json');
		chapters = res;
		console.log('first chapter fetch', chapters);
		organizedChapters = organizeChapters(chapters);
		console.log('organized chapters', organizedChapters);
	});

	afterUpdate(() => {
		// Add event listeners for arrow key navigation
		window.addEventListener('keydown', handleKeyDown);

		return () => {
			// Remove event listeners on component destruction
			window.removeEventListener('keydown', handleKeyDown);
		};
	});

	afterUpdate(() => {
		// Add event listeners for arrow key navigation
		window.addEventListener('keydown', handleKeyDown);

		return () => {
			// Remove event listeners on component destruction
			window.removeEventListener('keydown', handleKeyDown);
		};
	});

	function handleKeyDown(event) {
		if (!selectedChapter || !organizedChapters) return;

		let index = -1;
		let siblings = findSiblings(organizedChapters, selectedChapter.id);

		if (selectedChapter.chapter_id) {
			index = siblings.findIndex((chapter) => chapter.id === selectedChapter.id);
		} else {
			siblings = organizedChapters;
			index = organizedChapters.findIndex((chapter) => chapter.id === selectedChapter.id);
		}

		if (event.key === 's' || event.key === 'w') {
			handleUpDownKey(event, siblings, index);
		} else if (event.key === 'd') {
			handleRightKey(siblings, index);
		} else if (event.key === 'a') {
			handleLeftKey(siblings, index);
		}

		organizedChapters = organizedChapters.map((chapter) => {
			if (chapter.id === selectedChapter.id && selectedChapter.chapter_id) {
				return {
					...chapter,
					children: [...siblings]
				};
			}
			return chapter;
		});

		unsaved = true;

		// saveOrder(organizedChapters);
		// saveOrder(updatePositions(organizedChapters));
	}

	async function saveOrder() {
		// console.log({ array });
		saving = true;
		const array = updatePositions(organizedChapters);
		await debounceSave('/chapters/reorder', {
			list: flattenTree(array).map((g) => {
				return { id: g.id, chapter_id: g.chapter_id, position: g.position };
			})
		});
		saving = false;
		unsaved = false;
	}

	function updatePositions(array) {
		// console.log('GOTTEN', array);
		if (!array) return;
		for (let i = 0; i < array.length; i++) {
			array[i].position = i + 1;
			array[i].children = updatePositions(array[i].children);
		}

		return array;
	}

	function handleUpDownKey(event, container, index) {
		if (selectedChapter) {
			if (!container) {
				console.log('no parent');
			} else {
				console.log({ container });
			}

			if (event.key === 's' && index < container.length - 1) {
				// Move the chapter down
				swapPositions(container, index, index + 1);
			} else if (event.key === 'w' && index > 0) {
				// Move the chapter up
				swapPositions(container, index, index - 1);
			}
		}
	}

	function handleRightKey(siblings, index) {
		const currentIndex = siblings.indexOf(selectedChapter);
		const futureParentIndex = currentIndex - 1;

		console.log({ futureParentIndex });

		if (futureParentIndex >= 0 && futureParentIndex < siblings.length - 1) {
			// Save the removed element
			const removedElement = siblings.splice(currentIndex, 1)[0];

			selectedChapter.chapter_id = siblings[futureParentIndex].id;
			if (!siblings[futureParentIndex].children) {
				siblings[futureParentIndex].children = [];
			}
			siblings[futureParentIndex].children = [
				...siblings[futureParentIndex].children,
				removedElement
			];
		}
	}

	function handleLeftKey(siblings, index) {
		if (!selectedChapter || !selectedChapter.chapter_id) {
			return;
		} else {
			const grandparentId = findGrandparentId(organizedChapters, selectedChapter.chapter_id);
			let newParent;
			let currentParent;
			let currentParentIndex;
			if (grandparentId !== null) {
				newParent = findChapter(organizedChapters, grandparentId);
				currentParent = findChapter(organizedChapters, selectedChapter.chapter_id);
				currentParentIndex = newParent.children.findIndex(
					(chapter) => chapter.id === currentParent.id
				);

				console.log({ newParent });
				console.log({ currentParent });
				console.log({ currentParentIndex });
			} else {
				newParent = organizedChapters;
				currentParent = findChapter(organizedChapters, selectedChapter.chapter_id);
				currentParentIndex = newParent.findIndex((chapter) => chapter.id === currentParent.id);
			}

			if (currentParentIndex >= 0) {
				// Remove the selected chapter from its parent
				const removedElement = currentParent.children.splice(index, 1)[0];
				console.log(currentParent.children);
				removedElement.chapter_id = newParent.id;
				if (Array.isArray(newParent)) {
					newParent.splice(currentParentIndex + 1, 0, removedElement);
				} else {
					newParent.children.splice(currentParentIndex + 1, 0, removedElement);
				}
				return;
			}
			return;
		}
	}

	function swapPositions(array, indexA, indexB) {
		const temp = array[indexA];
		array[indexA] = array[indexB];
		array[indexB] = temp;
	}

	function flattenTree(tree) {
		return tree.reduce((acc, node) => {
			acc.push(node);
			if (node.children) {
				acc.push(...flattenTree(node.children));
			}
			return acc;
		}, []);
	}
	function findGrandparentId(arr, chapterId) {
		for (let chapter of arr) {
			if (chapter.children && chapter.children.some((child) => child.id === chapterId)) {
				return chapter.id;
			}
			if (chapter.children) {
				const result = findGrandparentId(chapter.children, chapterId);
				if (result !== null) {
					return result; // Return if found in children
				}
			}
		}
		return null;
	}

	function findChapter(arr, chapterId) {
		// console.log({ chapterId });
		for (let chapter of arr) {
			if (chapter.id === chapterId) {
				return chapter;
			}
			if (chapter.children) {
				const result = findChapter(chapter.children, chapterId);
				if (result !== null) {
					return result; // Return if found in children
				}
			}
		}
		return null;
	}
	// function findChapterIndex(arr, chapterId) {
	// 	for (let chapter of arr) {
	// 		// console.log({ chapter }, chapterId);
	// 		if (chapter.id === chapterId) {
	// 			return chapter;
	// 		}
	// 		const result = findParent(chapter.children || [], chapterId);
	// 	}
	// 	return chapter;
	// }

	function findSiblings(arr, chapterId) {
		for (let chapter of arr) {
			if (chapter.children && chapter.children.some((child) => child.id === chapterId)) {
				return chapter.children;
			}
			if (chapter.children) {
				const result = findSiblings(chapter.children, chapterId);
				if (result.length > 0) {
					console.log('FOUND IN CHILDREN');
					return result; // Return if found in children
				}
			}
		}
		return [];
	}

	// $: organizedChapters = organizeChapters(chapters);
	// $: console.log({ organizedChapters });

	function organizeChapters(chapters, parentId = null) {
		// Filter chapters based on the current parent ID
		const filteredChapters = chapters.filter((chapter) => chapter.chapter_id === parentId);

		// Recursively organize children for each filtered chapter
		const organizedChildren = filteredChapters.map((parentChapter) => {
			const children = organizeChapters(chapters, parentChapter.id);
			return { ...parentChapter, children };
		});

		return chapters;
	}

	function selectChapter(chapter) {
		selectedChapter = chapter;
		console.log({ selectedChapter });
	}

	function visitChapter(chapter) {
		visitingChapter = chapter;
		console.log({ visitingChapter });
	}
	let newChapterTitle;
	async function createChapter() {
		if (newChapterTitle.length < 2) return;
		const res = await API.post('/chapters', {
			title: newChapterTitle,
			positon: organizedChapters.length + 1
		});
		console.log({ res });
		chapters = [...chapters, res];
		organizedChapters = organizeChapters(chapters);
		newChapterTitle = '';
	}
</script>

<div class="content">
	<Nav />

	{#if $user && $user.admin}
		<div class="createChapter inline-form">
			<input
				type="text"
				class="form-control"
				placeholder="Create Chapter"
				bind:value={newChapterTitle}
			/>
			<div class="btn btn-info" on:click={createChapter}><i class="fa fa-plus" /></div>
		</div>
	{/if}

	<div class="wrapper">
		{#if !visitingChapter}
			<ul class="clean-list chapters">
				{#each organizedChapters || [] as chapter}
					<ListItem {selectedChapter} {chapter} {selectChapter} {visitChapter} />
				{/each}
			</ul>
		{:else}
			<SelectedChapter selectedChapter={visitingChapter} goBack={() => (visitingChapter = null)} />
		{/if}
	</div>

	<div class="saveProgress">
		{#if unsaved && !saving}
			<div class="btn btn-warning" on:click={saveOrder}>Unsaved Progress</div>
		{:else}
			<div class="btn btn-success"><i class="fa fa-check" /></div>
		{/if}

		{#if saving}
			<div class="btn btn-info">Saving</div>
		{/if}
	</div>
</div>

<style>
	.saveProgress {
		position: fixed;
		bottom: 10px;
		right: 10px;
	}
	/* ... (your existing styles) */
	.selected {
		background-color: #b8eeff !important;
	}

	.wrapper {
		padding: 20px;
	}

	.chapter {
		padding: 8px;
		font-size: 24px;
		background: rgb(255 248 222);
		margin: 4px;
		border-radius: 8px;
	}
</style>
