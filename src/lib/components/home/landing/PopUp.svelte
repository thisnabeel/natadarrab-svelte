<script>
	import Api from '$lib/api/api';
	import { goto } from '$app/navigation';
	import { user } from '$lib/stores/user';

	let username;
	let password;
	export let hidePopUp;

	$: console.log(username);

	const authenticate = async () => {
		const response = await Api.post('/users/sign_in.json', {
			login: username,
			password: password
		});
		console.log(response);
		if (response['id']) {
			user.set(response);
			hidePopUp();
			goto(`/dashboard`);
		}
	};
</script>

<div class="form">
	<img src="/sign-in.png" alt="" class="sign-up-img creds-header-img" />

	<label>Username or Email:</label>
	<input type="text" bind:value={username} />

	<label>Password:</label>
	<input type="password" bind:value={password} />

	<button on:click={authenticate}>Log In</button>
</div>

<style>
	.form {
		max-width: 300px;

		background: #fff;
		padding: 30px;
		border-radius: 6px;
		border: 9px solid #f6f8ff;
		text-align: left;
	}

	img.creds-header-img {
		margin: 10px auto;
		display: block;
		width: 100%;
	}

	input {
		width: 100%;
		font-family: GreyCliffCF-Regular;
		color: rgb(49, 49, 49);
		border: solid 1px #ccc;
	}

	button {
		margin-top: 10px;
		background-color: #fffe8b;
		display: block;
		width: 100%;
		height: calc(1.5em + 0.75rem + 2px);
		padding: 0.375rem 0.75rem;
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.5;
		color: #495057;
		background-clip: padding-box;
		border: 1px solid #ced4da;
		border-radius: 0.25rem;
		transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	}
</style>
