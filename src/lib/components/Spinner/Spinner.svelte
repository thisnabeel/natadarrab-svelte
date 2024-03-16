<script>
</script>

<div>
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
	img {
		max-width: 250px;
		margin: 0 auto;
		display: block;
	}
</style>
