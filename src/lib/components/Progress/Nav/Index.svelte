<script>
	import API from '$lib/api/api';
	import { selectedSet, selectedGame, selectedChapter } from '../store';
	import { onMount } from 'svelte';

	let skillSets = [];

	onMount(async () => {
		// const response = await Api.get("/skills_sets/1.json");
		// skillSets = [...skillSets, response];

		skillSets = await API.get('/skills_sets/as_user/1.json');
		console.log(skillSets);

		//
		selectedSet.set(skillSets[0]);
	});
</script>

<div class="top-nav">
	<div class="head">
		<span>Progress: </span>
		{#if skillSets}
			<select name="" id="" class="form-control" bind:value={$selectedSet}>
				{#each skillSets as set}
					<option value={set}>{set.title}</option>
				{/each}
			</select>
		{/if}
		<!-- <div class="arrow-space"></div>
            <div class="left-arrow arrow"><div class=""><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#626872" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg></div></div>
            <div class="arrow-space"></div>
            <div class="right-arrow arrow"><div class=""><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#626872" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg></div></div> -->
	</div>

	<div class="hori-divider" />
	{#if $selectedGame || $selectedChapter}
		<div class="go-back">
			<div
				on:click={() => {
					selectedGame.set(null);
					selectedChapter.set(null);
				}}
			>
				<i class="fa fa-arrow-left" /> Go Back
			</div>
		</div>
	{:else}
		<div class="nav">
			<div class="tab activeTab">Lessons</div>
			<div class="tab">Mastery</div>

			<br />
		</div>
	{/if}
</div>

<style>
	select {
		margin-left: 14px;
		font-size: 20px;
	}
	.nav {
		display: flex;
		/* margin: 30px auto; */
		margin-top: 0;
		position: sticky;
		top: 0;
		z-index: 99999;
		background-color: #ffffeb;
		font-size: 30px;
		justify-content: flex-end;
		flex: 1 1 50%;
	}

	.tab {
		flex: 1 1 50%;
		text-align: center;
		padding: 20px 20px 10px;
		color: #2e2e2e;
		font-size: 24px;
		border-bottom: 6px solid #efdbc2;
	}

	.activeTab {
		border-bottom: 6px solid #efdbc2;
		background: #efdbc2;
		border-radius: 10px 10px 0 0;
	}

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
		flex: 1 1 30%;
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
