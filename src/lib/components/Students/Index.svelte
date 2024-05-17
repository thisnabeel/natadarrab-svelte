<script>
	import Api from '$lib/api/api.js';
	import { onMount } from 'svelte';
	import Nav from './Nav/Index.svelte';
	import Form from './Form.svelte';
	import API from '$lib/api/api.js';
	import { user } from '$lib/stores/user';

	let students;
	let generating = false;
	onMount(async () => {
		// const response = await Api.get("/skills_sets/1.json");
		// skillSets = [...skillSets, response];

		students = await Api.get(`/teachers/${$user.id}/students.json`);
		console.log(students);
	});

	async function addStudent(payload) {
		generating = true;
		const res = await API.post('/users.json', payload);
		students = [res, ...students];
		generating = false;
	}

	async function deleteStudent(student) {
		const res = await API.delete(`/users/${student.id}.json`);
		students = students.filter((s) => s.id !== student.id);
	}
</script>

<Nav />

<input type="text" placeholder="Search..." class="form-control" />

<Form {addStudent} {generating} />
<ul class="clean-list students">
	{#each students || [] as student}
		<li class="student">
			<h3>{student.first_name} {student.last_name}</h3>
			<div class="remove-student" on:click={() => deleteStudent(student)}>
				<i class="fa fa-trash" />
			</div>
			<hr />
			{#if student.stuck_at}
				<span class="stuck">{student.stuck_at.title}</span>
			{/if}
		</li>
	{/each}
</ul>

<style>
	.student {
		padding: 14px;
		margin: 10px;
		background: rgb(255, 248, 248);
		position: relative;
	}

	.student h3 {
		font-size: 34px;
	}

	.remove-student {
		position: absolute;
		right: 10px;
		top: 10px;
		font-size: 34px;
		color: #ccc;
	}

	.stuck {
		font-size: 12px;
	}
</style>
