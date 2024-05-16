<script>
	import API from '$lib/api/api';
	import { user } from '$lib/stores/user';

	let input;
	let results = [];
	let selectedUser;

	async function search() {
		results = await API.post('/students/search.json', {
			name: input,
			user: $user.id
		});

		console.log({ results });
	}
</script>

{#if selectedUser}
	<div style="padding: 10px">
		Viewing As: {selectedUser.first_name}
		{selectedUser.last_name}
		<div
			class="fa fa-times"
			on:click={() => {
				selectedUser = null;
				results = null;
				input = '';
			}}
		/>
	</div>
{:else}
	<div class="flex">
		<input type="text" class="form-control" placeholder="Search Student..." bind:value={input} />
		<div class="btn btn-outline-info" on:click={search}><i class="fa fa-search" /></div>
	</div>

	{#if results}
		<ul class="results clean-list">
			{#each results as user}
				<li on:click={() => (selectedUser = user)}>{user.first_name} {user.last_name}</li>
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
</style>
