<script>
	import { onMount, afterUpdate } from 'svelte';
	import Nav from './Nav/Index.svelte';
	import API from '$lib/api/api';
	import SelectedGame from './Game/Edit.svelte';
	import ListItem from './ListItem.svelte';
	import debounceSave from '$lib/functions/debounce';

	let games = [];
	let selectedGame = null;
	let visitingGame = null;
	let organizedGames = [];

	let unsaved = false;
	let saving = false;

	onMount(async () => {
		const res = await API.get('/games.json');
		games = res;
		console.log('first game fetch', games);
		organizedGames = organizeGames(games);
		console.log('organized games', organizedGames);
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
		if (!selectedGame || !organizedGames) return;

		let index = -1;
		let siblings = findSiblings(organizedGames, selectedGame.id);

		if (selectedGame.game_id) {
			index = siblings.findIndex((game) => game.id === selectedGame.id);
		} else {
			siblings = organizedGames;
			index = organizedGames.findIndex((game) => game.id === selectedGame.id);
		}

		if (event.key === 's' || event.key === 'w') {
			handleUpDownKey(event, siblings, index);
		} else if (event.key === 'd') {
			handleRightKey(siblings, index);
		} else if (event.key === 'a') {
			handleLeftKey(siblings, index);
		}

		organizedGames = organizedGames.map((game) => {
			if (game.id === selectedGame.id && selectedGame.game_id) {
				return {
					...game,
					children: [...siblings]
				};
			}
			return game;
		});

		unsaved = true;

		// saveOrder(organizedGames);
		// saveOrder(updatePositions(organizedGames));
	}

	async function saveOrder() {
		// console.log({ array });
		saving = true;
		const array = updatePositions(organizedGames);
		await debounceSave('/games/reorder', {
			list: flattenTree(array).map((g) => {
				return { id: g.id, game_id: g.game_id, position: g.position };
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
		if (selectedGame) {
			if (!container) {
				console.log('no parent');
			} else {
				console.log({ container });
			}

			if (event.key === 's' && index < container.length - 1) {
				// Move the game down
				swapPositions(container, index, index + 1);
			} else if (event.key === 'w' && index > 0) {
				// Move the game up
				swapPositions(container, index, index - 1);
			}
		}
	}

	function handleRightKey(siblings, index) {
		const currentIndex = siblings.indexOf(selectedGame);
		const futureParentIndex = currentIndex - 1;

		console.log({ futureParentIndex });

		if (futureParentIndex >= 0 && futureParentIndex < siblings.length - 1) {
			// Save the removed element
			const removedElement = siblings.splice(currentIndex, 1)[0];

			selectedGame.game_id = siblings[futureParentIndex].id;
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
		if (!selectedGame || !selectedGame.game_id) {
			return;
		} else {
			const grandparentId = findGrandparentId(organizedGames, selectedGame.game_id);
			let newParent;
			let currentParent;
			let currentParentIndex;
			if (grandparentId !== null) {
				newParent = findGame(organizedGames, grandparentId);
				currentParent = findGame(organizedGames, selectedGame.game_id);
				currentParentIndex = newParent.children.findIndex((game) => game.id === currentParent.id);

				console.log({ newParent });
				console.log({ currentParent });
				console.log({ currentParentIndex });
			} else {
				newParent = organizedGames;
				currentParent = findGame(organizedGames, selectedGame.game_id);
				currentParentIndex = newParent.findIndex((game) => game.id === currentParent.id);
			}

			if (currentParentIndex >= 0) {
				// Remove the selected game from its parent
				const removedElement = currentParent.children.splice(index, 1)[0];
				console.log(currentParent.children);
				removedElement.game_id = newParent.id;
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
	function findGrandparentId(arr, gameId) {
		for (let game of arr) {
			if (game.children && game.children.some((child) => child.id === gameId)) {
				return game.id;
			}
			if (game.children) {
				const result = findGrandparentId(game.children, gameId);
				if (result !== null) {
					return result; // Return if found in children
				}
			}
		}
		return null;
	}

	function findGame(arr, gameId) {
		// console.log({ gameId });
		for (let game of arr) {
			if (game.id === gameId) {
				return game;
			}
			if (game.children) {
				const result = findGame(game.children, gameId);
				if (result !== null) {
					return result; // Return if found in children
				}
			}
		}
		return null;
	}
	// function findGameIndex(arr, gameId) {
	// 	for (let game of arr) {
	// 		// console.log({ game }, gameId);
	// 		if (game.id === gameId) {
	// 			return game;
	// 		}
	// 		const result = findParent(game.children || [], gameId);
	// 	}
	// 	return game;
	// }

	function findSiblings(arr, gameId) {
		for (let game of arr) {
			if (game.children && game.children.some((child) => child.id === gameId)) {
				return game.children;
			}
			if (game.children) {
				const result = findSiblings(game.children, gameId);
				if (result.length > 0) {
					console.log('FOUND IN CHILDREN');
					return result; // Return if found in children
				}
			}
		}
		return [];
	}

	// $: organizedGames = organizeGames(games);
	// $: console.log({ organizedGames });

	function organizeGames(games, parentId = null) {
		// Filter games based on the current parent ID
		const filteredGames = games.filter((game) => game.game_id === parentId);

		// Recursively organize children for each filtered game
		const organizedChildren = filteredGames.map((parentGame) => {
			const children = organizeGames(games, parentGame.id);
			return { ...parentGame, children };
		});

		return organizedChildren;
	}

	function selectGame(game) {
		selectedGame = game;
		console.log({ selectedGame });
	}

	function visitGame(game) {
		visitingGame = game;
		console.log({ visitingGame });
	}
</script>

<div class="content">
	<Nav />

	<div class="wrapper">
		{#if !visitingGame}
			<ul class="clean-list games">
				{#each organizedGames || [] as game}
					<ListItem {selectedGame} {game} {selectGame} {visitGame} />
				{/each}
			</ul>
		{:else}
			<SelectedGame selectedGame={visitingGame} goBack={() => (visitingGame = null)} />
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

	.game {
		padding: 8px;
		font-size: 24px;
		background: rgb(255 248 222);
		margin: 4px;
		border-radius: 8px;
	}
</style>
