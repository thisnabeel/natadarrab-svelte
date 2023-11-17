<script>
	import API from '$lib/api/api';
	import { afterUpdate, onMount } from 'svelte';
	import Question from './Question.svelte';

	let blocks = null;
	export let verseRef = null;
	let verse = null;
	let selectedSlice = null;
	let verseHTML;
	let refreshed = 0;

	let questionIndex = 0;
	let oneByOne = true;

	let progressBarPercentage = 0;
	let loadingVerse = false;

	onMount(async () => {
		nextVerse();
	});

	async function nextVerse(randomize = false) {
		loadingVerse = true;
		let res;

		if (randomize || !verseRef) {
			res = await API.get(`/quran/test.json`);
		} else if (verseRef) {
			res = await API.get(`/quran/test/${verseRef}.json`);
		} else {
			loadingVerse = false;
			return;
		}
		blocks = res.blocks;
		console.log({ blocks });
		verse = res.verse;
		refreshed = refreshed + 1;
		showingGraded = false;
		loadingVerse = false;
		selectedSlice = null;
		questionIndex = 0;
	}

	afterUpdate(() => {
		updateSelectedClass();
	});

	function updateSelectedClass() {
		if (verseHTML) {
			const words = verseHTML.getElementsByClassName('sliced');
			for (let i = 0; i < words.length; i++) {
				const word = words[i];
				const isSliced = word.classList.contains('sliced');
				const isSelected = i === selectedSlice;
				word.classList.toggle('selected', isSelected && isSliced);
			}
		}
	}

	$: selectedSlice = blocks ? (blocks[questionIndex] ? blocks[questionIndex].sliceIndex : -1) : -1;
	$: console.log({ selectedSlice });

	$: {
		if (
			blocks &&
			blocks.every((block) => block.questions.every((question) => question.done === true))
		) {
			showGrading();
		}
	}

	let showingGraded = false;
	let selectedGradedBlockIndex = null;

	function showGrading() {
		selectedSlice = null;
		// console.log('show grding');

		if (verseHTML) {
			const words = verseHTML.getElementsByClassName('sliced');
			for (let i = 0; i < words.length; i++) {
				const word = words[i];
				const isSliced = word.classList.contains('sliced');
				// const slice = blocks.find(b => b.question.fin)
				if (blocks.find((b) => b.sliceIndex === i).questions.length > 0) {
					if (
						blocks
							.find((b) => b.sliceIndex === i)
							.questions.every((question) => question.correct === 1)
					) {
						word.classList.toggle('correct', isSliced);
					} else {
						word.classList.toggle('incorrect', isSliced);
					}
				}
				word.classList.toggle('graded', isSliced);
				// const word = words[i];
				// const isSliced = word.classList.contains('sliced');
				// const isSelected = i === selectedSlice;
				// word.classList.toggle('selected', isSelected && isSliced);
				// const slice = blocks.find(b => b.question.fin)
			}
		}
		showingGraded = true;

		// Count of all questions
		const totalQuestions = blocks.reduce((count, block) => count + block.questions.length, 0);

		// Count of questions where correct === 1
		const correctQuestions = blocks.reduce((count, block) => {
			return count + block.questions.filter((question) => question.correct === 1).length;
		}, 0);

		progressBarPercentage = parseFloat(
			(parseFloat(correctQuestions, 10) * 100) / parseFloat(totalQuestions, 10)
		);

		// console.log({ progressBarPercentage });
		// for (let block of blocks) {
		// }
	}

	function handleClick(event) {
		const gradedElement = event.target.closest('.graded');

		// gradedElement.classList.toggle('selectedGradedBlock', true);
		if (showingGraded && gradedElement) {
			// Log information to the console or perform actions
			// console.log('Clicked on a graded block:', gradedElement);
			if (verseHTML) {
				const words = verseHTML.getElementsByClassName('sliced');
				const index = Array.from(words).indexOf(gradedElement);
				console.log({ index });
				selectedGradedBlockIndex = index;
				console.log('clicked', blocks[index]);

				for (let i = 0; i < words.length; i++) {
					const word = words[i];
					if (i !== selectedGradedBlockIndex) {
						word.classList.toggle('selectedGradedBlock', false);
					} else {
						word.classList.toggle('selectedGradedBlock', true);
					}
				}
			}
		}
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="wrapper" on:click={handleClick}>
	<!-- <h1>{selectedSlice}</h1> -->

	<!-- svelte-ignore empty-block -->
	{#if loadingVerse}
		<div class="jumbotron">
			<h1>Loading Quiz...</h1>
		</div>
	{:else}
		{#if verse && verse.folder}
			<div class="text-center">
				{verse.ref}
				{' '}
				<span class="btn btn-info" on:click={() => nextVerse(true)}
					><i class="fa fa-refresh" /></span
				>
			</div>
			{#if verse.folder.finale}
				<div class="verse" bind:this={verseHTML}>{@html verse.folder.finale}</div>
			{:else}
				<div class="verse" bind:this={verseHTML}>{@html verse.folder.iraab_v2}</div>
			{/if}
		{/if}

		{#if blocks}
			<!-- svelte-ignore empty-block -->
			{#if oneByOne}
				<div class="oneByOne">
					{#if showingGraded}
						<div>
							<br />
							Click each <span class="selectedGradedBlock">word</span> above to see your graded
							blocks.
							<br /><br />
						</div>
					{:else}
						<div>
							For the <span class="guideSelected">highlighted</span> portion, select each
							characteristic
							<br /><br />
						</div>
					{/if}

					{#each selectedGradedBlockIndex !== null ? blocks[selectedGradedBlockIndex].questions : blocks[questionIndex].questions as question}
						{#key question}
							<li>
								<Question
									{question}
									{refreshed}
									{showingGraded}
									done={(payload, correct, chosenOption) => {
										question.done = true;
										question.correct = correct;
										question.chosenOption = chosenOption;
										console.log({ question });
										console.log({ blocks });
										// console.log(blocks[questionIndex]);
										if (
											blocks[questionIndex].questions.every((question) => question.done === true)
										) {
											if (!blocks[questionIndex + 1]) return;
											setTimeout(function () {
												questionIndex += 1;
												while (
													blocks[questionIndex] &&
													blocks[questionIndex].questions.length === 0
												) {
													questionIndex += 1;
												}
											}, 500);
										}
									}}
								/>
							</li>
							<hr />
						{/key}
					{/each}
				</div>
			{:else}
				<ul>
					{#each blocks as block}
						{#each block as question}
							<li on:mouseenter={() => (selectedSlice = question.sliceIndex)}>
								<Question
									{question}
									{refreshed}
									done={(payload) => {
										question.done = true;
										console.log({ question });
										console.log({ blocks });
									}}
								/>
							</li>
						{/each}
					{/each}
				</ul>
			{/if}

			{#if showingGraded}
				<div class="progress">
					<div
						class="progress-bar"
						role="progressbar"
						aria-valuemin="0"
						aria-valuemax={progressBarPercentage}
						style="width:{progressBarPercentage}%"
					/>
				</div>
				<p class="percentage text-center">{Math.round(progressBarPercentage)}%</p>
				<hr />
				<div class="btn btn-primary btn-lg" style="display:block;" on:click={() => nextVerse(true)}>
					Next Random Verse
				</div>
			{/if}
		{/if}
	{/if}
</div>

<style>
	.wrapper {
		padding: 2em;
		max-width: 550px;
		margin: 0 auto;
	}

	.verse {
		font-family: 'me_quran2' !important;
		line-height: 3.5em;
		font-size: 32px;
		direction: rtl;
		text-align: center;
	}

	.verse :global(.wordBlock) {
		display: inline-block;
		margin: 0;
		padding: 0;
		font-family: 'me_quran2' !important;
	}

	.verse :global(.sliced) {
		display: inline-block;
		margin: 0;
		padding: 0;
		cursor: pointer;
		font-size: inherit;
		line-height: inherit;
		font-family: 'me_quran2' !important;
	}

	.verse :global(.selected.sliced) {
		color: #ca56ff;
		border-bottom: 1px dashed;
		height: 87px;
		padding: 0;
	}

	.guideSelected {
		color: #ca56ff;
		border-bottom: 1px dashed;
		padding: 0;
	}

	.verse :global(.sliced span) {
		/* display: inherit; */
	}

	.oneByOne {
		max-width: 350px;
		margin: 0 auto;
		display: block;
	}

	.oneByOne li {
		list-style: none;
	}

	.verse :global(.sliced.graded) {
		padding: 0px 10px !important;
		border-radius: 10px;
		margin: 0 -5px;
	}

	.verse :global(.sliced.incorrect) {
		background: #ffdcdc;
	}

	.verse :global(.sliced.correct) {
		background: #daffa2;
	}

	.verse :global(.sliced.graded + span) {
		z-index: 999999;
		position: relative;
		right: -4px;
	}

	.verse :global(.selectedGradedBlock) {
		border-bottom: 6px dashed purple !important;
	}

	/* .verse :global(.harf + span + .graded) {
		padding-right: 0 !important;
		margin-right: -14px !important;
	} */
</style>
