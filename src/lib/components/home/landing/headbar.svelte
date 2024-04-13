<script>
	import CredsPopUp from './PopUp.svelte';

	let showLogIn = false;
	import scrollIntoView from '$lib/functions/scrollIntoView';
</script>

<div class="head-bar">
	<div class="container">
		<div class="row">
			<div class="col-lg-8 col-xs-8 col-sm-8 col-md-8">
				<div class="main side-nav" id="main">
					<a href="#objective">Objective</a>
					<a href="#curriculum">Curriculum</a>
					<a href="#testimonials">Testimonials</a>
					<a href="#pricing">Pricing</a>
					<a href="#faq">F.A.Q.</a>
				</div>
			</div>
			<div class="col-lg-4 col-xs-4 col-sm-4 col-md-4 text-right">
				<div class="main" id="main">
					<span on:click={() => (showLogIn = !showLogIn)} href="/users/sign_in">SIGN-IN</span>

					{#if showLogIn}
						<div class="creds-pop">
							<CredsPopUp hidePopUp={() => (showLogIn = !showLogIn)} />
						</div>
					{/if}
					<a href="#pricing" class="user-charge top-sub">APPLY</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.head-bar {
		position: fixed;
		width: 100%;
		margin: 0 auto;
		padding: 15px 0 20px 0;
		z-index: 1000;
		background-color: #fff;
	}

	.text-right {
		text-align: right;
	}

	.head-bar {
		padding-top: 1vh;
		max-height: 10vh;
	}

	.main a {
		color: black;
		text-decoration: none;
		font-size: 16px;
		cursor: pointer;
		word-spacing: 10px;
		font-weight: 600;
	}

	.top-sub {
		background: #ffd55e;
		border-radius: 10px;
		padding: 10px;
	}

	#main {
		transition: margin-left 0.5s;
		padding-right: 6px;
		padding-top: 15px;
	}

	.side-nav a {
		font-weight: lighter;
		color: #8d8d8d;
		margin-right: 25px;
		transition: color 200ms linear;
	}

	.creds-pop {
		position: absolute;
	}
</style>
