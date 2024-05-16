<script>
	import { goto } from '$app/navigation';
	import API from '$lib/api/api';
	export let skill;
	import { user } from '$lib/stores/user';
	import { selectedGame, selectedChapter } from '../store';

	let expanded = false;
	let chapters = [];
	let openedChapter = -1;
	let learned = false;
	function toggleTodo() {
		learned = !learned;
	}

	async function addChapter() {
		const chapter = await API.post('/chapters.json', {
			title: 'untitled',
			skill_id: skill.id
		});

		chapters = [...chapters, chapter];
	}

	async function fetchSkill() {
		// console.log(skill);
		if (expanded) return (expanded = false);
		expanded = true;
		const response = await API.get(`/skills/${skill.id}.json`);
		skill.games = response.games;
		skill.meeting_cards = response.meeting_cards;

		chapters = skill.games.map((game) => game.chapter);
		console.log({ chapters });
		if (chapters.length === 1) {
			// openedChapter = chapters[0].id;
		}
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="wrapper">
	<div class="deckHead" class:learned on:click={fetchSkill}>
		<span class="title"
			>{skill.title}
			<hr style="color:#ccc;margin: 10px;" />
			<small style="font-size; 12px;color: #404040">{@html skill.description}</small>
		</span>

		{#if $user && $user.admin}
			<div class="pull-right clean-a btn-warning btn test-now edit-deck">
				<a href="/decks/3/edit">Edit</a>
			</div>
			<div
				class="pull-right clean-a btn-success btn test-now edit-deck"
				style="position: absolute; right: -100px;"
			>
				<i class="fa fa-toggle-on" aria-hidden="true" />
			</div>
			<span class="btn btn-outline-danger remove-deck">Delete</span>
		{/if}

		<div class="expand">
			<i class="fa" class:fa-expand={true} />
		</div>
	</div>

	<div class="todo" on:click={toggleTodo}>
		<i class="fa" class:fa-check-square-o={learned} class:learned class:fa-square-o={!learned} />
	</div>

	{#if expanded}
		<div class="expanded">
			{#if chapters}
				<div>
					Learn:
					{#if $user && $user.admin}
						<i class="fa fa-plus" on:click={() => addChapter()} />
					{/if}
				</div>
				<ul class="chapters">
					{#each chapters.filter((c) => c && c.title) as chapter}
						<li on:click={selectedChapter.set(chapter)}>
							{chapter.title}
							<div class="btn btn-outline-info"><i class="fa fa-link" /></div>
						</li>
					{/each}
				</ul>
			{/if}
			{#if skill.games}
				<div>Practice:</div>
				<ul class="chapters">
					{#each skill.games as game}
						<li on:click={() => selectedGame.set(game)}>
							{game.title}
							<div class="btn btn-outline-info"><i class="fa fa-link" /></div>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/if}
</div>

<style>
	.expand {
		position: absolute;
		right: 20px;
		top: 10px;
		color: rgba(104, 110, 71, 0.186);
	}
	.wrapper {
		position: relative;
	}
	.courseTitle {
		text-align: center;
		/* font-family: Maragsa; */
		text-shadow: 0 5px 6px #fff;
		font-size: 79px;
		border-radius: 14px;
		padding: 0;
		color: #000;
	}

	.todo {
		position: absolute;
		left: -24px;
		top: -8px;
		color: #e4ebc2;
		font-size: 34px;
	}
	.learned {
		color: #686e47;
	}

	.deckHead {
		padding: 20px;
		font-family: Avenir Next, sans-serif;
		font-size: 22px;
		color: #291f13;
		margin: 10px;
		/* background: #e4ebc2; */
		background-color: #f0dbc3;
		border-radius: 7px;
	}

	.chapters {
		list-style-type: disc;
		font-size: 18px;
		padding-left: 28px;
	}

	.title {
		font-size: 24px;
	}

	.expanded {
		padding: 10px;
		border-top: 1px solid #ccc;
		margin-top: 10px;
	}

	.deckHead.learned {
		background-color: #a4ffbb;
	}
</style>
