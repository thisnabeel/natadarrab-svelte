<script>
	import { afterUpdate, onMount } from 'svelte';
	import { prevent_default } from 'svelte/internal';

	export let question;
	export let done;
	export let refreshed;
	export let showingGraded;

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
					if (question.correct > -1) return;
					check(option);
				}}
			>
				<button
					class="btn"
					class:btn-success={question.correct === 1 && question.chosenOption === option}
					class:btn-danger={question.correct === 0 && question.chosenOption === option}
					>{option}</button
				>
			</li>
		{/each}
	</ul>
</div>

<style>
	.options li .btn.btn-success {
		background-color: greenyellow;
		color: #000;
	}
	.options li .btn.btn-danger {
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
