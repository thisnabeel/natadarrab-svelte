<script>
	import Nav from './Nav/Index.svelte';
	import Api from '$lib/api/api.js';
	import { onMount } from 'svelte';
	import Set from './Set/Set.svelte';
	import Mastery from './Mastery.svelte';
	import {
		selectedSet,
		selectedGame,
		selectedChapter,
		selectedStudent,
		selectedStudentSkills,
		loadingStudentSkills,
		selectedTab
	} from './store';
	import Game from '../Games/Game/Game.svelte';
	// import Chapter from './Chapter.svelte';
	import Chapter from '$lib/components/Chapters/Show.svelte';
	// $: selectedSet = skillSets.find((s) => s.title === $selectedSet.id);
	import SearchStudents from '../Students/Search.svelte';
	import { user } from '$lib/stores/user';
	import API from '$lib/api/api.js';

	function selectStudent(payload) {
		selectedStudent.set(payload);
		fetchStudentSkills(payload);
	}

	async function fetchStudentSkills(student) {
		loadingStudentSkills.set(true);
		const studentSkills = await API.get(`/students/${student.id}/skills.json`);
		selectedStudentSkills.set(studentSkills);
		console.log({ studentSkills });
		loadingStudentSkills.set(false);
	}

	function emptyStudent() {
		selectedStudent.set(null);
		selectedStudentSkills.set([]);
	}
</script>

<div class="content">
	<Nav />
	{#if $user && $user.teacher}
		<SearchStudents {selectStudent} {emptyStudent} />
	{/if}

	{#if $selectedTab === 0}
		{#if $selectedGame}
			<Game game={$selectedGame} />
		{:else if $selectedChapter}
			<Chapter chapter={$selectedChapter} overrideGate={true} />
		{:else}
			<div class="wrapper">
				{#if $selectedSet}
					<Set set={$selectedSet} />
				{/if}
			</div>
		{/if}
	{:else if $selectedTab === 1}
		<div class="wrapper">
			<Mastery />
		</div>{/if}
</div>

<style>
	.content {
		background: #fafafa;
		height: 100vh;
		overflow-y: scroll;
	}
	.wrapper {
		height: 90vh;
		overflow-y: scroll;

		background: #ffffeb;
	}
</style>
