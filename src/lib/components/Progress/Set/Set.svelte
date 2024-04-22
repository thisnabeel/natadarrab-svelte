<script>
	import { openModal } from 'svelte-modals';
	import Modal from '$lib/components/Modal/Index.svelte';
	import Api from '$lib/api/api';
	export let set;

	import { user } from '$lib/stores/user';
	import Skill from './Skill.svelte';

	let expanded = false;

	let bankSkillsChanged = 0; // Variable to track changes in $user.bank_skills

	// Function to increment the change counter
	const incrementChangeCounter = () => {
		bankSkillsChanged += 1;
	};

	async function addSkillToSet() {
		const newSkill = await Api.post('/skills.json', {
			title: 'NewSkill',
			description: '',
			position: set.skills[set.skills.length - 1],
			subject: set.title,
			skills_set_id: set.id
		});
		set.skills = [...set.skills, newSkill];
	}

	async function removeSkill(skill) {
		const response = await Api.delete(`/skills/${skill.id}.json`);
		console.log(response);
		set.skills = set.skills.filter((s) => s.id !== skill.id);
	}

	async function moveSkill(skill, direction) {
		const response = await Api.post(`/skills/move.json`, {
			skill_id: skill.id,
			direction: direction
		});

		// const arrayToBeRearranged = [...set.skills];

		response.forEach((ns) => (set.skills.filter((s) => s.id === ns.id)[0].position = ns.position));

		set.skills = set.skills.sort((a, b) => {
			if (a.position < b.position) return -1;
			if (a.position > b.position) return 1;
			return 0;
		});
		// console.log(response);
	}
</script>

<div class="wrapper">
	<!-- <h3 class="courseTitle">
		{set.title}
	</h3> -->

	<div class="decks">
		{#each set.skills as skill}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<Skill {skill} />
		{/each}
	</div>
</div>

<style>
	.wrapper {
		background: #ffffeb;
		font-family: GreycliffCF-Light;
		background-size: cover;
		border-radius: 8px;
		/* box-shadow: 0 20px 20px 0 rgba(35, 35, 35, 0.26), 0 9px 45px 0 hsla(0, 0%, 6%, 0.53); */
		padding: 70px 50px;
		font-size: 16px;
		box-sizing: border-box;
		max-width: 700px;
		color: #000;
		position: relative;
		margin: 100px auto 20px;
		margin-top: 0;
	}
</style>
