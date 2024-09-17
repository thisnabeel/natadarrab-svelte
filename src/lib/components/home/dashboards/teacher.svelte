<script>
	import { user } from '$lib/stores/user';
</script>

<div class="wrapper">
	<h1 class="extra-bold">
		<div class="salam lalezar-regular">السلام عليكم<br /> {$user.first_name}</div>
	</h1>

	<i class="fa fa-sign-out sign-out" on:click={() => user.set(null)} />
</div>

<style>
	.sign-out {
		position: absolute;
		top: 10px;
		right: 10px;
		font-size: 32px;
	}
	.wrapper {
		padding: 2em;
	}
	@import url('https://fonts.googleapis.com/css2?family=Lalezar&display=swap');

	.extra-bold {
		font-size: 58px;
		color: #000;
		font-weight: bold;
	}

	.lalezar-regular {
		font-family: 'Lalezar', system-ui;
		font-weight: 400;
		font-style: normal;
	}
</style>
