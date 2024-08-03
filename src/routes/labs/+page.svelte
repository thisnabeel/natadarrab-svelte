<script>
	import { goto } from '$app/navigation';

	let cards = [
		{
			title: 'Sarf Lab',
			description: 'Practice Conjugating different Verbs',
			url: '/labs/arabic/verbs/conjugator'
		},
		{
			title: 'Baabs Lab',
			description: 'Practice Identifying different Baabs',
			url: '/labs/arabic/sarf/forms'
		}
	];
</script>

<div class="cards">
	{#each cards as card}
		<div class="card" style="width: 18rem;">
			<div class="card-body">
				<h5 class="card-title">{card.title}</h5>
				<!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
				<p class="card-text">
					{card.description}
				</p>
				<button on:click={() => goto(card.url)} class="card-link btn btn-outline-primary"
					>Visit</button
				>
			</div>
		</div>
	{/each}
</div>

<style>
	.cards {
		display: flex;
	}

	.card {
		margin: 10px;
	}
</style>
