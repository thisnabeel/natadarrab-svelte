<script>
	import shuffler from '$lib/functions/shuffler.js';

	export let question;
	export let showStatus;
	export let sendStatusUp;
	export let percentage;

	$: q = question;
	$: selectedChoice && console.log(question);

	let selectedChoice;
	let qs;
	let selections = {};

	$: console.log(selections);

	$: {
		// Define a reactive statement to rerun the status() function when showStatus changes
		qs = status(selectedChoice, question, showStatus);
	}

	function status(choice, question, showStatus) {
		if (showStatus) {
			if (question.selected) {
				// console.log("cimpa", choice.id);
				console.log('com', question.selected);
				console.log('answer', question.correct);

				if (question.correct === question.selected) {
					sendStatusUp({
						question: question,
						choice: selectedChoice,
						status: true
					});
					return 'correct';
				} else {
					sendStatusUp({
						question: question,
						choice: selectedChoice,
						status: false
					});
					return 'incorrect';
				}
			}

			if (q.selectors) {
				if (q.selection_style === 'blockable') {
					console.log('BLOCAKBLE TEST');
					let allGood = true;

					for (let i = 0; i < question.selectors.length; i++) {
						let selectedBlock = selectedBlocks[i];
						let selector = question.selectors[i];

						if (!selectedBlock) {
							sendStatusUp({
								question: question,
								choice: selections,
								status: false
							});
							return 'incorrect';
						}

						let foundBlock = question.selectors[i].options.find((o) => o === selectedBlock);

						if (foundBlock) {
							console.log(selector, foundBlock);
							if (selector.correct === selector.options.indexOf(foundBlock)) {
							} else {
								sendStatusUp({
									question: question,
									choice: selections,
									status: false
								});
								return 'incorrect';
							}
						} else {
							sendStatusUp({
								question: question,
								choice: selections,
								status: false
							});
							return 'incorrect';
						}
					}

					sendStatusUp({
						question: question,
						choice: selections,
						status: true
					});
					return 'correct';
				} else {
					let allGood = false;
					q.selectors.forEach((s, i) => {
						if (question.selectors[i].correct !== selections[i]) {
							allGood = false;

							sendStatusUp({
								question: question,
								choice: selections,
								status: false
							});
							return 'incorrect';
						}
					});

					sendStatusUp({
						question: question,
						choice: selections,
						status: true
					});
					return 'correct';
				}
			}

			sendStatusUp({
				question: question,
				status: false
			});
			return 'incorrect';
		}
		return '';
	}

	// function reCheck() {
	//     console.log("recheck")
	//     for (let i = 0; i < question.selectors.length; i++){
	//         checkSelection(i);
	//     }
	// }

	let selectedBlocks = [];
</script>

<li class="question" class:show-status={showStatus}>
	<div><h3 class="prompt">{@html q.question}</h3></div>

	{#if q.choices}
		<ul class="clean-list choices">
			{#each Object.entries(q.choices).map( ([key, value]) => ({ ...value, id: key }) ) || [] as choice}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li
					class="choice {qs}"
					class:selected={selectedChoice ? selectedChoice.id === choice.id : false}
					on:click={() => {
						if (showStatus) return;
						selectedChoice = choice;
						question.selected = selectedChoice.id;
					}}
				>
					{choice.answer}
				</li>
			{/each}
		</ul>
	{/if}

	{#if q.selectors}
		{#if q.selection_style === 'blockable'}
			<ul class="clean-list horizontal-list selected">
				{#each selectedBlocks as block, i}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<li
						class:correct={question.selectors[i]
							? question.selectors[i].correct ===
							  question.selectors[i].options.indexOf(
									question.selectors[i].options.find((o) => o === block)
							  )
							: false}
						class:incorrect={question.selectors[i]
							? question.selectors[i].correct !==
							  question.selectors[i].options.indexOf(
									question.selectors[i].options.find((o) => o === block)
							  )
							: true}
						class="selector_block"
						on:click={() => {
							selectedBlocks = selectedBlocks.filter((b) => b !== block);
						}}
					>
						{block}
					</li>
				{/each}
			</ul>
			<hr />
			<ul class="clean-list horizontal-list">
				{#each [...new Set([].concat(...q.selectors.map((obj) => obj.options)))].filter((c) => c.length > 0) || [] as choice, i}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<li
						class="selector_block"
						on:click={() => {
							console.log(choice);
							selectedBlocks = [...selectedBlocks, choice];
						}}
					>
						{choice}
					</li>
				{/each}
			</ul>
		{:else}
			<ul class="clean-list horizontal-list">
				{#each q.selectors || [] as choice, i}
					<li>
						<select
							disabled={showStatus}
							class:correct={question.selectors[i].correct === selections[i]}
							class:incorrect={question.selectors[i].correct !== selections[i]}
							name=""
							id=""
							bind:value={selections[i]}
						>
							<option value="-1" />
							{#each choice.options || [] as option, j}
								<option value={j}>{option}</option>
							{/each}
						</select>
					</li>
				{/each}
			</ul>
		{/if}
	{/if}
</li>

<style>
	.prompt {
		padding: 14px;
	}
	.question {
		background: #fafcff;
		margin: 17px;
		padding: 13px;
		border: 10px solid #e6f7ff;
	}

	.choice {
		background: #fff;
		margin: 10px 0;
		padding: 14px;
		border: 1px solid rgba(207, 207, 207, 0.822);
		cursor: pointer;
	}

	.choice:hover {
		background: rgb(241, 241, 241);
	}

	.choice.selected {
		background: #123774;
		color: rgb(236, 236, 236);
	}

	.show-status .choice.selected.correct {
		background: #a7ffd3;
		color: #000;
	}

	.show-status .choice.selected.incorrect {
		background: #ff2121;
		color: #fff;
	}

	.show-status select.incorrect {
		background: #ff2121;
		color: #fff;
	}

	.show-status select.correct {
		background: #a7ffd3;
		color: #000;
	}

	.selector_block {
		margin: 6px;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 10px;
	}

	.selector_block:hover {
		background-color: rgba(220, 130, 130, 0.822);
	}

	.selected .selector_block {
		background-color: #fff;
		font-size: 24px;

		border: 2px dashed #f0f0f0;
	}

	.show-status .selected .correct {
		background: #a7ffd3;
		color: #000;
	}

	.show-status .selected .incorrect {
		background: #ff2121;
		color: #fff;
	}
</style>
