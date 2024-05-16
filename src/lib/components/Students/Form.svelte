<script>
	import { user } from '$lib/stores/user';

	export let addStudent;
	export let generating;
	let first_name;
	let last_name;
	let email = 'placeholder@gmail.com';
</script>

<div class="newUser">
	{#if generating}
		<h1>Generating Student... Please Hold</h1>
	{/if}
	<input
		type="text"
		class="form-control"
		placeholder="First Name"
		required
		bind:value={first_name}
		disabled={generating}
	/>
	<input
		disabled={generating}
		type="text"
		class="form-control"
		placeholder="Last Name"
		required
		bind:value={last_name}
	/>
	<!-- <input type="text" class="form-control" placeholder="Email" bind:value={email} /> -->
	<button
		disabled={generating}
		class="btn btn-outline-info"
		on:click={() => {
			addStudent({
				user: {
					first_name: first_name,
					last_name: last_name,
					email: email,
					teacher_id: $user.id,
					password: '2024ntdrb',
					password_confirmation: '2024ntdrb'
				}
			});
		}}
	>
		Add Student
	</button>
</div>

<style>
	.newUser {
		padding: 20px;
	}
</style>
