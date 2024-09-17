<script>
	import storage from '$lib/stores/storage';
	import { user } from '$lib/stores/user';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { showSpotlight } from '$lib/stores/spotlight';

	export let expand;
	export let expanded;

	let profile = {
		tooltip: 'Profile',
		icon: 'fa-user',
		url: '/dashboard'
	};

	let availability = {
		tooltip: 'Availability',
		svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 256 256"><path d="M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"></path><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-38.34-85.66a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L116,164.69l42.34-42.35A8,8,0,0,1,169.66,122.34Z"></path></svg>`,
		url: '/availability'
	};
	let divider = {
		divider: true
	};
	let timeline = {
		tooltip: 'Timeline',
		svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"  viewBox="0 0 256 256"><path d="M72,112v32a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V112a8,8,0,0,1,8-8H64A8,8,0,0,1,72,112ZM216,40H168a8,8,0,0,0-8,8V96a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V48A8,8,0,0,0,216,40Zm0,112H168a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V160A8,8,0,0,0,216,152Z" opacity="0.2"></path><path d="M168,112h48a16,16,0,0,0,16-16V48a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16V64h-8a32,32,0,0,0-32,32v24H80v-8A16,16,0,0,0,64,96H32a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16v-8h32v24a32,32,0,0,0,32,32h8v16a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V160a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16v16h-8a16,16,0,0,1-16-16V96a16,16,0,0,1,16-16h8V96A16,16,0,0,0,168,112ZM64,144H32V112H64v32Zm104,16h48v48H168Zm0-112h48V96H168Z"></path></svg>`,
		url: '/progress'
	};
	let schedule = {
		tooltip: 'Schedule',
		svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 256 256"><path d="M160,72V216L96,184V40Z" opacity="0.2"></path><path d="M228.92,49.69a8,8,0,0,0-6.86-1.45L160.93,63.52,99.58,32.84a8,8,0,0,0-5.52-.6l-64,16A8,8,0,0,0,24,56V200a8,8,0,0,0,9.94,7.76l61.13-15.28,61.35,30.68A8.15,8.15,0,0,0,160,224a8,8,0,0,0,1.94-.24l64-16A8,8,0,0,0,232,200V56A8,8,0,0,0,228.92,49.69ZM104,52.94l48,24V203.06l-48-24ZM40,62.25l48-12v127.5l-48,12Zm176,131.5-48,12V78.25l48-12Z"></path></svg>`,
		url: '/schedule'
	};

	let labs = {
		tooltip: 'Labs',
		icon: `fa-flask`,
		url: '/labs'
	};

	let recite = {
		tooltip: 'Recite',
		icon: `fa-volume-up`,
		url: '/unzyla'
	};

	let seerah = {
		tooltip: 'Seerah',
		img: 'seerah.png',
		url: '/seerah'
	};

	let quranflow = {
		tooltip: 'QuranFlow',
		icon: 'fa-book',
		url: '/quranflow'
	};

	let springs = {
		tooltip: 'Springs',
		img: 'springs.png',
		url: '/springs'
	};

	let bibleflow = {
		tooltip: 'BibleFlow',
		img: 'bible.png',
		url: '/bibleflow'
	};

	let students = {
		tooltip: 'Students',
		icon: 'fa-users',
		url: '/students'
	};

	let teacher = {
		tooltip: 'Teacher',
		img: 'teacher.png',
		url: '/teachers'
	};
	let planner = {
		tooltip: 'Planner',
		icon: 'fa-university',
		url: '/planner'
	};

	let games = {
		tooltip: 'Games',
		icon: 'fa-puzzle-piece',
		url: '/games'
	};

	let buttons = [
		profile,
		availability,
		divider,
		timeline,
		schedule,
		divider,
		labs,
		recite,
		seerah,
		quranflow,
		springs,
		bibleflow
	];

	let adminButtons = [
		profile,
		students,
		teacher,
		planner,
		availability,
		divider,
		timeline,
		schedule,
		divider,
		labs,
		games,
		recite,
		springs,
		seerah,
		quranflow,
		divider,
		bibleflow
	];

	$: console.log('user', $user);
</script>

<div class="content">
	<div class="sections">
		<nav>
			<div class="buttons">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="expand" on:click={expand}>
					<div class="button">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24px"
							height="24px"
							fill="#A0A4AC"
							viewBox="0 0 256 256"
							><path
								d="M141.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L124.69,128,50.34,53.66A8,8,0,0,1,61.66,42.34l80,80A8,8,0,0,1,141.66,133.66Zm80-11.32-80-80a8,8,0,0,0-11.32,11.32L204.69,128l-74.35,74.34a8,8,0,0,0,11.32,11.32l80-80A8,8,0,0,0,221.66,122.34Z"
							/></svg
						>
					</div>
				</div>

				<!-- <a on:click={() => admin.set(!$admin)}><span class="fa button fa-toggle-on"></span></a> -->

				{#each ($user && ($user.admin || $user.teacher ? adminButtons : buttons)) || [] as button}
					{#if button.divider}
						<hr />
					{:else}
						<a
							href="#"
							on:click={() => {
								goto(button.url);
							}}
							class:selected={$page.url.pathname.includes(button.url)}
						>
							<div class="button">
								{#if button.svg}
									{@html button.svg}
								{:else if button.img}
									<img src="/{button.img}" alt="" class="icon" />
								{:else}
									<div class="fa {button.icon}" />
								{/if}

								{#if expanded}
									<span class="title">{button.tooltip}</span>
								{/if}
							</div>
						</a>
					{/if}
				{/each}
			</div>
		</nav>
		<div class="mid" />
		<i class="fa fa-search search-btn" on:click={() => showSpotlight.set(!$showSpotlight)} />
	</div>
</div>

<style>
	.search-btn {
		position: absolute;
		bottom: 0;
		left: 0;
		font-size: 30px;
		color: #c3c3ff;
		display: block;
		width: 100%;
		text-align: center;
		padding: 10px;
		cursor: pointer;
	}

	.search-btn:hover {
		background-color: aliceblue;
	}
	.title {
		position: absolute;
		left: 50px;
		top: 18%;
	}
	img.icon {
		width: 24px;
		height: 24px;
	}
	.content {
		background-color: rgb(255, 255, 255);
		color: rgb(35, 39, 45);
		box-shadow: none;
		overflow: hidden auto;
		display: flex;
		flex-direction: column;
		flex: 1 0 auto;
		z-index: 1200;
		position: fixed;
		top: 0px;
		outline: 0px;
		left: 0px;
		border-right: 1px solid rgba(0, 0, 0, 0.12);
		transition: width 0.2s ease 0s;
		height: 100vh;
		width: inherit;
	}

	.sections {
		display: flex;
		flex-direction: column;
		justify-content: stretch;
		height: 100vh;
	}

	nav {
		list-style: none;
		margin: 0px;
		padding: 8px 0px;
		position: relative;
	}

	.mid {
		-webkit-box-flex: 1;
		flex-grow: 1;
		overflow: hidden auto;
	}

	.buttons {
		padding-left: 0px;
		padding-right: 0px;
	}

	.expand {
		padding: 24px 8px;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		-webkit-box-pack: justify;
		justify-content: space-between;
	}

	.expand .button {
		display: inline-flex;
		-webkit-box-align: center;
		align-items: center;
		-webkit-box-pack: center;
		justify-content: center;
		position: relative;
		box-sizing: border-box;
		-webkit-tap-highlight-color: transparent;
		background-color: transparent;
		outline: 0px;
		border: 0px;
		margin: 0px 0px 0px 4px;
		cursor: pointer;
		user-select: none;
		vertical-align: middle;
		appearance: none;
		text-decoration: none;
		text-align: center;
		flex: 0 0 auto;
		font-size: 1.5rem;
		padding: 8px;
		border-radius: 50%;
		overflow: visible;
		color: rgba(0, 0, 0, 0.54);
		transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	}

	a {
		color: #424750;
		text-decoration: none;
	}
	a:hover .button {
		background: rgba(245, 245, 245, 0.541);
	}

	.selected .button {
		background: rgba(240, 240, 240, 0.74);
		/* border-top: 0.5px gray;
        border-bottom: 0.5px gray; */
	}

	.selected {
		fill: blue !important;
	}

	a .button {
		border: 1px solid rgba(0, 0, 0, 0.12);
		background-color: rgb(250, 250, 250);
		background-color: rgba(14, 99, 246, 0.08);
		-webkit-tap-highlight-color: transparent;
		background-color: transparent;
		outline: 0px;
		margin: 0px;
		cursor: pointer;
		user-select: none;
		vertical-align: middle;
		appearance: none;
		color: inherit;
		display: flex;
		-webkit-box-pack: start;
		justify-content: flex-start;
		-webkit-box-align: center;
		align-items: center;
		position: relative;
		text-decoration: none;
		width: 100%;
		box-sizing: border-box;
		text-align: left;
		padding: 8px 16px;
		transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
		border: 1px solid rgb(255, 255, 255);
		right: -1px;
		border-radius: 0px;
	}
</style>
