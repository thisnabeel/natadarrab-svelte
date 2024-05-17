<script>
	import API from '$lib/api/api';
	import save from '$lib/functions/debounce';
	import { user } from '$lib/stores/user';

	let input;
	let results = [];
	let selectedUser;
	export let selectStudent;
	export let emptyStudent;

	async function search() {
		results = await save(
			'/students/search',
			{
				name: input,
				teacher_id: $user.id
			},
			'post'
		);

		console.log({ results });
	}

	function selectUser(user) {
		selectedUser = user;
		selectStudent(user);
	}
</script>

{#if selectedUser}
	<div class="viewingAs">
		Progress for:
		<span class="name">
			{selectedUser.first_name}

			{selectedUser.last_name}
		</span>
		<div
			class="fa fa-times"
			on:click={() => {
				selectedUser = null;
				results = null;
				input = '';
				emptyStudent();
			}}
		/>
	</div>
{:else}
	<div class="flex">
		<input
			type="text"
			class="form-control"
			placeholder="Search Student..."
			on:keyup={search}
			bind:value={input}
		/>
		<div class="btn btn-outline-info" on:click={search}><i class="fa fa-search" /></div>
	</div>

	{#if results}
		<ul class="results clean-list">
			{#each results as user}
				<li on:click={() => selectUser(user)}>{user.first_name} {user.last_name}</li>
			{/each}
		</ul>
	{/if}
{/if}

<style>
	.results li {
		padding: 10px;
	}
	.flex {
		display: flex;
		width: 350px;
	}

	.viewingAs {
		padding: 10px;
		font-size: 34px;
	}

	.name {
		background: #ffffac;
		padding: 10px 20px;
		border-radius: 10px;
	}

	.results li {
		border: 1px solid #eee;
		margin: 6px;
	}

	.results li:hover {
		border-color: #000;
		background-color: #ffffac;
	}
</style>
