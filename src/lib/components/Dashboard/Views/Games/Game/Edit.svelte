<script>
	import API from '$lib/api/api';
	import { onMount } from 'svelte';
	import Editor from 'cl-editor/src/Editor.svelte';
	import uuid from '$lib/functions/uuid';
	export let selectedGame;
	export let goBack;

	import debounceSave from '$lib/functions/debounce';

	onMount(async () => {
		selectedGame = await API.get(`/games/${selectedGame.id}.json`);
		console.log({ selectedGame });
		if (!selectedGame.folder) {
			selectedGame.folder = { questions: [] };
		} else if (!selectedGame.folder.questions) {
			selectedGame.folder.questions = [];
		}
	});

	function addMultipleChoice(choices, id) {
		let letter = findNextAvailableLetter(choices);
		let hash = {};
		hash[letter] = { answer: 'Type Here', feedback: '' };

		// Create a copy of the selectedGame object
		let updatedGame = { ...selectedGame };

		// Find the index of the question in the array
		const questionIndex = updatedGame.folder.questions.findIndex((q) => q.id === id);

		// Update the choices of the specific question
		updatedGame.folder.questions[questionIndex].choices = { ...choices, ...hash };

		// Update the selectedGame variable, triggering a re-render
		selectedGame = updatedGame;
		console.log(selectedGame.folder.questions[questionIndex]);
	}

	function multipleChoiceCorrect(id, key) {
		// Create a copy of the selectedGame object
		let updatedGame = { ...selectedGame };
		const questionIndex = updatedGame.folder.questions.findIndex((q) => q.id === id);

		// Update the choices of the specific question
		updatedGame.folder.questions[questionIndex].correct = key;

		// Update the selectedGame variable, triggering a re-render
		selectedGame = updatedGame;
	}

	function findNextAvailableLetter(choices) {
		// Extract existing keys
		const existingKeys = Object.keys(choices);

		// Define all letters
		const allLetters = 'abcdefghijklmnopqrstuvwxyz';

		// Find the first available letter
		const nextLetter = allLetters.split('').find((letter) => !existingKeys.includes(letter));

		// If all letters are used, handle the edge case (e.g., return null)
		if (!nextLetter) {
			console.log('All letters are used.');
			return null;
		}

		return nextLetter;
	}

	function addSelectorOption(selector, id) {
		// Create a copy of the selectedGame object
		let updatedGame = { ...selectedGame };

		// Find the index of the question in the array
		const questionIndex = updatedGame.folder.questions.findIndex((q) => q.id === id);

		// Update the choices of the specific question
		let current = updatedGame.folder.questions[questionIndex].selectors.find((s) => s === selector);
		// console.log({ current });
		current.options = [...current.options, 'test'];
		// // Update the selectedGame variable, triggering a re-render
		selectedGame = updatedGame;

		// console.log(selector);
	}

	function selectorCorrect(selector, id, index) {
		// Create a copy of the selectedGame object
		let updatedGame = { ...selectedGame };

		// Find the index of the question in the array
		const questionIndex = updatedGame.folder.questions.findIndex((q) => q.id === id);

		// Update the choices of the specific question
		let current = updatedGame.folder.questions[questionIndex].selectors.find((s) => s === selector);
		// console.log({ current });
		current.correct = index;
		// // Update the selectedGame variable, triggering a re-render
		selectedGame = updatedGame;

		// console.log(selector);
	}
	// const hash = {
	// 	question:
	// 		'<h1>ذَهَبَ<strong>&nbsp;<span style="color: rgb(0, 168, 133);">ٱللهُ</span></strong></h1><h1>2:17</h1><h1><u>Allah</u> takes away</h1>',
	// 	choices: { a: { answer: 'type', feedback: '' }, b: { answer: 'type', feedback: '' } },
	// 	correct: 'a',
	// 	question_type: 'multiple-choice',
	// 	id: 7
	// };

	async function save() {
		const res = await API.put(`/games/${selectedGame.id}.json`, selectedGame);
		console.log({ res });
		// console.log({ selectedGame });
	}

	function deleteQuestion(question) {
		let updatedGame = { ...selectedGame };

		// Update the choices of the specific question
		updatedGame.folder.questions = updatedGame.folder.questions.filter((q) => q.id !== question.id);

		// // Update the selectedGame variable, triggering a re-render
		selectedGame = updatedGame;
	}
</script>

<div class="btn btn-outline-danger" on:click={goBack}>
	<i class="fa fa-left-arrow" />Go Back
</div>

<input
	type="text"
	class="form-control"
	style="font-size: 42px; text-align:center"
	bind:value={selectedGame.title}
/>

<textarea
	name=""
	id=""
	cols="20"
	rows="3"
	class="form-control description"
	bind:value={selectedGame.description}
	on:keyup={() => {
		debounceSave(`/games/${selectedGame.id}`, {
			description: selectedGame.description
		});
	}}
/>

<div class="btn btn-outline-success" on:click={save}>Save</div>

<div class="questions">
	{#if selectedGame.folder && selectedGame.folder.questions}
		<ul class="clean-list">
			{#each selectedGame.folder.questions as q, index}
				<li class="question">
					<div class="index">
						{index + 1}
						<span class="fa fa-times delete-question" on:click={() => deleteQuestion(q)} />
					</div>
					<div class="body">
						<Editor
							html={q.question}
							on:change={(evt) => {
								const value = evt.detail;
								q.question = value;
								console.log('saving value', value);
							}}
						/>
					</div>

					<div class="choices">
						{#if q.question_type === 'multiple-choice'}
							{#each Object.entries(q.choices).sort( (a, b) => a[0].localeCompare(b[0]) ) as [key, choice]}
								<li class="choice" class:correct={key === q.correct}>
									<i
										class="fa fa-bullseye selectCorrect"
										on:click={() => multipleChoiceCorrect(q.id, key)}
									/>
									<span style="display:inline">{key}:</span>
									<input
										style="display:inline; width: 70%"
										type="text"
										class="form-control"
										bind:value={choice.answer}
									/>
								</li>
							{/each}

							<div class="btn btn-outline-info" on:click={() => addMultipleChoice(q.choices, q.id)}>
								<i class="fa fa-plus" />
							</div>
						{/if}

						{#if q.question_type === 'selector'}
							{#each q.selectors as selector}
								<li class="selector">
									{#each selector.options as option, index}
										<li class="option">
											<input
												type="text"
												class:correct={index === selector.correct}
												class="form-control"
												bind:value={option}
											/>
											<i
												class="fa fa-bullseye selectCorrect"
												on:click={() => selectorCorrect(selector, q.id, index)}
											/>
										</li>
									{/each}
									<i class="fa fa-plus" on:click={() => addSelectorOption(selector, q.id)} />
								</li>
							{/each}

							<!-- <div class="btn btn-outline-info" on:click={() => addMultipleChoice(q.choices, q.id)}>
								<i class="fa fa-plus" />
							</div> -->
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<div class="question adder">
	<div class="row">
		<div class="col-lg-6 col-md-6 col-sm-6">
			<div
				class="btn btn-warning"
				on:click={() => {
					const question = {
						question: '<p>Type Question Body...',
						choices: {},
						correct: '',
						question_type: 'multiple-choice',
						id: uuid(selectedGame.folder.questions)
					};

					selectedGame.folder.questions = [...selectedGame.folder.questions, question];
					// selectedGame.questions
					console.log(selectedGame);
				}}
			>
				Add Choices
			</div>
		</div>
		<div class="col-lg-6 col-md-6 col-sm-6">
			<div
				class="btn btn-warning"
				on:click={() => {
					const question = {
						question: '<p>Type Question Body...',
						selectors: [],
						question_type: 'selector',
						id: uuid(selectedGame.folder.questions.map((q) => q.id))
					};

					selectedGame.folder.questions = [...selectedGame.folder.questions, question];
					console.log(selectedGame);
					// selectedGame.questions
				}}
			>
				Add Selectors
			</div>
		</div>
	</div>
</div>

<style>
	.question {
		padding: 14px;
		margin: 14px 0;
		margin-left: 30px;
		border: 2px solid #e8e8e8;
		border-radius: 8px;
		position: relative;
	}

	.index {
		position: absolute;
		top: 10px;
		left: -34px;
		font-size: 24px;
	}

	.choices {
		padding: 14px;
		margin: 14px 0;
		border-top: 2px solid #e8e8e8;
	}

	.choices .choice {
		padding: 14px;
		margin: 14px 0;
		background-color: aliceblue;
	}

	:global(.cl-content) {
		height: max-content !important;
	}

	.selector {
		display: block;
		margin: 20px;
		background-color: aliceblue;
		padding: 8px;
		border-left: 4px dashed rgba(177, 177, 225, 0.216);
	}

	.selector .option {
		display: inline-block;
		width: max-content;
	}

	.selector .option .input {
		width: 100%;
	}

	.correct {
		background-color: rgb(212, 255, 148) !important;
	}

	.option {
		position: relative;
		padding-right: 30px;
	}

	.selectCorrect {
		position: absolute;
		right: 7px;
		top: 10px;
		color: #e5e5e5;
	}

	.selectCorrect:hover {
		color: #ccc;
	}

	.choice {
		position: relative;
	}

	.choice .selectCorrect {
		left: -20px;
	}
</style>
