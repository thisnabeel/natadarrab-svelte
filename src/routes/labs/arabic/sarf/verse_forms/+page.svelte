<script>
	// @ts-nocheck

	import API from '$lib/api/api';
	import { onMount } from 'svelte';
	import { roomOpen, currentRoomCode, members } from '$lib/stores/interaction_rooms';
	import uuid from '$lib/functions/uuid';

	let examples = [];
	let starting_verse = '2:4';
	let ending_verse = '2:14';

	let currentExampleIndex = 0;

	let includeSickLetters = false;

	let randomize = true;

	let showCorrectBanner = false;
	let showWrongBanner = false;
	onMount(() => {
		getExamples();
	});
	async function getExamples() {
		clearBanners();
		examples = await API.post(`/examples/forms_quiz.json`, {
			starting_verse: randomize ? null : starting_verse,
			ending_verse: randomize ? null : ending_verse,
			forms: selectedForms,
			include_sick_letters: includeSickLetters,
			roomCode: $currentRoomCode
		});
		currentExampleIndex = 0;

		examples = examples.filter((e) => e.verse_original.includes('auu'));
	}

	let roomCode = null;

	roomOpen.subscribe((value) => {
		if (value == true) {
			currentRoomCode.set(uuid());
			makePusherRoom();
		}
	});

	currentRoomCode.subscribe((value) => {
		if (value && value.length > 1) {
			makePusherRoom(value);
		}
	});

	function makePusherRoom(code) {
		const pusher = new Pusher('7e649cff1bea807a7ce6', {
			cluster: 'us2'
		});

		let channel = pusher.subscribe('room-' + code);

		channel.bind('add-member', function (data) {
			console.log(data);
			members.set([...$members, data.name]);
		});
	}

	let forms = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
	let selectedForms = ['II', 'III', 'IV'];

	function toggleForm(form) {
		if (selectedForms.includes(form)) {
			selectedForms = selectedForms.filter((f) => f !== form);
		} else {
			selectedForms = [...selectedForms, form];
		}
	}

	let form_breakdown = {
		I: {
			past: 'فَعَلَ',
			present: 'يَفْعُلُ',
			masdar: 'فَعْلٌ'
		},
		II: {
			past: 'فَعَّلَ',
			present: 'يُفَعِّلُ',
			masdar: 'تَفْعِيلٌ'
		},
		III: {
			past: 'فَاعَلَ',
			present: 'يُفَاعِلُ',
			masdar: 'مُفَاعَلَةٌ'
		},
		IV: {
			past: 'أَفْعَلَ',
			present: 'يُفْعِلُ',
			masdar: 'إِفْعَالٌ'
		},
		V: {
			past: 'تَفَعَّلَ',
			present: 'يَتَفَعَّلُ',
			masdar: 'تَفَعُّلٌ'
		},
		VI: {
			past: 'تَفَاعَلَ',
			present: 'يَتَفَاعَلُ',
			masdar: 'تَفَاعُلٌ'
		},
		VII: {
			past: 'اِنْفَعَلَ',
			present: 'يَنْفَعِلُ',
			masdar: 'اِنْفِعَالٌ'
		},
		VIII: {
			past: 'اِفْتَعَلَ',
			present: 'يَفْتَعِلُ',
			masdar: 'اِفْتِعَالٌ'
		},
		IX: {
			past: 'اِفْعَلَّ',
			present: 'يَفْعَلُّ',
			masdar: 'اِفْعِلَالٌ'
		},
		X: {
			past: 'اِسْتَفْعَلَ',
			present: 'يَسْتَفْعِلُ',
			masdar: 'اِسْتِفْعَالٌ'
		}
	};

	let showQuizResult = false;
	function nextQuiz(chosen) {
		if (chosen == true) {
			showCorrectBanner = true;
		} else {
			showWrongBanner = true;
		}

		setTimeout(function () {
			clearBanners();
			if (!examples[currentExampleIndex + 1]) {
				return getExamples();
			} else {
				currentExampleIndex = currentExampleIndex + 1;
			}
		}, 2000);
	}

	function clearBanners() {
		showQuizResult = false;
		showCorrectBanner = false;
		showWrongBanner = false;
	}

	function dice() {
		randomize = !randomize;
	}
</script>

<div class="wrapper" style="position: relative">
	<div
		class="controls"
		class:randomize
		style="display: block; margin: 0 auto; width: max-content;margin-bottom: 60px"
	>
		<button class="button" on:click={dice}><i class="fa fa-dice" /></button>
		<input type="text" bind:value={starting_verse} /><input
			type="text"
			bind:value={ending_verse}
		/><button class="btn btn-outline-primary" on:click={() => getExamples()}>Find</button>

		<div class="forms-select">
			{#each forms as form}
				<button class:active={selectedForms.includes(form)} on:click={() => toggleForm(form)}
					>{form}</button
				>
			{/each}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="btn"
				class:btn-success={includeSickLetters}
				class:btn-outline-success={!includeSickLetters}
				on:click={() => {
					includeSickLetters = !includeSickLetters;
				}}
			>
				🤒
			</div>
		</div>
	</div>
	<!-- <ul class="clean-list">
		{#each examples as example}
			<li>
				{@html example.verse_original}
			</li>
		{/each}
	</ul> -->

	{#if examples.length > 0}
		<div class="quiz">
			<div class="verse">
				{@html examples[currentExampleIndex].verse_original} - [{examples[currentExampleIndex].ref}]
			</div>

			<div class="quiz-options">
				<div class="forms-select" class:results={showQuizResult}>
					{#each selectedForms as form}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div
							on:click={() => {
								showQuizResult = true;
								nextQuiz(form === examples[currentExampleIndex].form);
							}}
							class:correct={form === examples[currentExampleIndex].form}
							class:incorrect={form !== examples[currentExampleIndex].form}
						>
							<div>
								<span style="background:#fff; padding: 8px; border-radius: 6px"
									>{form_breakdown[form].past}</span
								>
								{' / '}
								<span style="background:#fff; padding: 8px; border-radius: 6px"
									>{form_breakdown[form].present}</span
								>
							</div>

							<div
								style="margin-top: 12px; border: 3px solid rgb(229 229 227); border-radius: 10px; padding-top: 10px; padding-bottom: 8px;"
							>
								{form_breakdown[form].masdar}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		{#if showCorrectBanner}
			<div class="text-center correct banner"><h1>Correct!</h1></div>
		{/if}

		{#if showWrongBanner}
			<div class="text-center wrong banner"><h1>Wrong!</h1></div>
		{/if}
	{/if}

	<div
		class="btn btn-outline-info"
		on:click={() => {
			roomOpen.set(!$roomOpen);
		}}
		style="position: absolute; top: 10px; right: 10px;"
	>
		Room
	</div>
	{#if $currentRoomCode}
		<a
			href={'/rooms/' + $currentRoomCode}
			target="_blank"
			class="btn btn-primary"
			style="position: absolute; top: 50px; right: 10px;"
		>
			<i class="fa fa-link" />
		</a>
	{/if}
</div>

<style>
	.banner {
		font-size: 44px;
		padding: 1em;
		margin: 1em 0;
	}

	.banner.correct {
		background: #adff2f;
	}

	.banner.wrong {
		background: #ff0000;
		color: #fff;
	}

	.randomize input {
		background-color: #000;
		color: #000;
	}
	.quiz-options .forms-select.results > .correct {
		background-color: rgb(195, 255, 104);
	}

	.quiz-options .forms-select.results > .incorrect {
		background-color: rgb(255, 94, 94);
	}
	input {
		background-color: #eee;
		padding: 10px;
		margin: 10px;
	}
	.quiz {
		display: block;
		max-width: 750px;
		margin: 0 auto;
	}

	.quiz-options .forms-select {
		display: flex;
		width: 100%;
		margin: 0 auto;
	}

	.quiz-options .forms-select > div {
		flex: 1 1;
		font-size: 24px;
		text-align: center;
		background-color: #eee;
		padding: 24px;
		margin: 4px;
	}
	.verse {
		text-align: right;
		font-size: 34px;
		display: block;
		max-width: 750px;
		margin: 0 auto;
	}
	:global(.auu) {
		color: #fff;
	}

	.forms-select button {
		padding: 6px;
		margin: 6px;
		background-color: #eee;
	}

	.forms-select button.active {
		background-color: greenyellow;
	}
</style>
