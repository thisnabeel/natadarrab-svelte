<script>
	export let size = 'lg';
</script>

<div class={size}>
	<img src="/logo.svg" class="logo" alt="" />
	<br />
	<h1><slot /></h1>
	<img src="/spinner.gif" alt="" />
</div>

<style>
	div {
		max-width: 350px;
		margin: 0 auto;
		margin-top: 4em;
		display: block;
		text-align: center;
	}
	.logo {
		max-width: 250px;
		margin: 0 auto;
		display: block;
	}

	.lg div {
		max-width: 350px;
	}

	.lg .logo {
		max-width: 250px;
	}

	.sm div {
		max-width: 250px;
	}

	.sm .logo {
		max-width: 150px;
	}
	img {
		max-width: 250px;
		margin: 0 auto;
		display: block;
	}
</style>
