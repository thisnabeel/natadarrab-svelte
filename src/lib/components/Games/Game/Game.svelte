<script>
	import Question from './Question.svelte';
	// import Swal from "sweetalert2";
	import Swal from 'sweetalert2';
	import shuffler from '$lib/functions/shuffler';
	import API from '$lib/api/api';
	import { user } from '$lib/stores/user';

	export let game;
	let showStatus = false;

	function submit() {
		showStatus = true;
	}

	let results = [];
	let percentage = null;
	let showingVideo = false;

	function retry() {
		results = [];
		percentage = null;
		showStatus = false;

		game.folder.questions = shuffler(game.folder.questions);
	}

	function checkResults() {
		if (results.length !== game.folder.questions.length) {
			return;
		}

		console.log({ results });
		const total = results.length;
		const number = results.filter((r) => r.status === true).length;

		const result = parseFloat(parseFloat(number, 10) * 100) / parseFloat(total, 10);
		const final_perc = Math.round(result.toFixed(2));

		// alert(`${final_perc}%`)
		percentage = final_perc;
		console.log(percentage);
		// Swal.fire('Perfect!', 'You Passed This Quiz', 'success');

		if (percentage === 100) {
			Swal.fire('Perfect!', 'You Passed This Quiz', 'success');
		} else {
			Swal.fire('Oh No!', "You Didn't Pass This Quiz. Try Again.", 'warning');
		}

		saveGameAttempt();

		// results = [];
		// percentage = null;
	}

	async function saveGameAttempt() {
		if (!$user || !$user.id) {
			return;
		}
		const res = await API.post(`/game_attempts.json`, {
			user_id: $user.id,
			game_id: game.id,
			result: percentage,
			questions: results
		});
		console.log({ res });
		let newUser = { ...$user };
		newUser.bank_skills = res;
		user.set(newUser);
	}

	function handleStatus(payload) {
		console.log({ payload });
		results = [...results, payload];
		checkResults();
	}
</script>

<div class="title">
	<h1>{game.title}</h1>
</div>
<br />
{#if game.video && !showingVideo}
	<div class="btn btn-outline-info" on:click={() => (showingVideo = !showingVideo)}>
		Show Tutorial Video
	</div>
{/if}
{#if showingVideo}
	{#if game.video}
		{@html game.video}
	{/if}
{/if}
<div class="description">{@html game.description}</div>
<div class="wrapper">
	<ol class="clean-list">
		{#each game.folder.questions || [] as q}
			<Question question={q} {showStatus} {percentage} sendStatusUp={handleStatus} />
		{/each}
	</ol>

	{#if showStatus}
		<div class="btn btn-warning btn-lg" on:click={retry}>Retry</div>
	{:else}
		<div class="btn btn-outline-primary btn-lg" on:click={submit}>Submit</div>
	{/if}
</div>

<style>
	.description {
		padding: 2em;
	}
	.title {
		background: #deffe8;
		border: 5px solid #ccf6d9;
		padding: 20px;
		max-width: fit-content;
		margin: 0 auto;
	}
</style>
