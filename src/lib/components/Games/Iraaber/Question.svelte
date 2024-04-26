<script>
	import { afterUpdate, onMount } from 'svelte';
	import { prevent_default } from 'svelte/internal';

	export let question;
	export let done;
	export let refreshed;
	export let showingGraded;
	export let showNextButton;

	function check(option) {
		if (question.answer === option) {
			done(question, 1, option);
		} else {
			done(question, 0, option);
		}
	}

	$: {
		refreshed;
		// console.log({ correct });
		// console.log({ question });
		// correct = -1;
	}
</script>

<div>
	<ul class="options clean-list">
		{#each question.options as option}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<li
				on:click={(e) => {
					// if (question.correct > -1) return;
					check(option);
				}}
			>
				{#if showNextButton || showingGraded}
					<button
						class="btn"
						class:correct={question.correct === 1 && question.chosenOption === option}
						class:incorrect={question.correct === 0 && question.chosenOption === option}
						>{option}</button
					>
				{:else}
					<button class="btn" class:chosenBtn={question.chosenOption === option}>{option}</button>
				{/if}
			</li>
		{/each}
	</ul>
</div>

<style>
	.options li .btn.chosenBtn {
		background-color: rgb(37, 0, 123);
		color: #ffffff;
	}
	.options li .btn.correct {
		background-color: greenyellow;
		color: #000;
	}
	.options li .btn.incorrect {
		background-color: red;
		color: #fff;
	}
	.options li {
		display: inline-block;
		margin: 4px;
	}

	.options li .btn {
		background-color: #f3f3f3;
	}
</style>
