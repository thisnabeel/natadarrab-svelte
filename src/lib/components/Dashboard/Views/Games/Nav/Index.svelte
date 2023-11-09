<script>
	export let nextWeek;
</script>

<div class="top-nav">
	<div class="head">
		<span>Quizzes</span>
	</div>

	<div class="hori-divider" />
</div>

<style>
	.top-nav {
		padding: 16px 16px 16px 40px;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		-webkit-box-pack: justify;
		justify-content: space-between;
		background-color: rgb(255, 255, 255);
		border-bottom: 1px solid rgb(231, 232, 234);
		border-top-color: rgb(231, 232, 234);
		border-right-color: rgb(231, 232, 234);
		border-left-color: rgb(231, 232, 234);
	}

	.top-nav .head {
		height: 48px;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		font-weight: 700;
		font-size: 1.5rem;
		line-height: 1.4;
		font-family: 'Avenir Next', sans-serif;
		margin-right: 16px;
		cursor: pointer;
	}

	.left-arrow {
		cursor: pointer;
		box-sizing: border-box;
		border: 1px solid transparent;
		border-radius: 4px;
		padding: 4px;
	}

	.left-arrow > div {
		line-height: 0;
		width: 20px;
		height: 20px;
	}

	.arrow-space {
		padding-left: 4px;
		padding-right: 4px;
	}

	.right-arrow {
		cursor: pointer;
		box-sizing: border-box;
		border: 1px solid transparent;
		border-radius: 4px;
		padding: 4px;
	}

	.right-arrow > div {
		line-height: 0;
		width: 20px;
		height: 20px;
	}

	.hori-divider {
		padding-left: 16px;
		margin-top: -16px;
		margin-bottom: -16px;
		height: 74px;
		border-right: 1px solid rgb(231, 232, 234);
		border-top-color: rgb(231, 232, 234);
		border-bottom-color: rgb(231, 232, 234);
		border-left-color: rgb(231, 232, 234);
	}

	.arrow:hover {
		background-color: rgb(250, 250, 250);
		border-color: rgb(231, 232, 234);
	}
</style>
