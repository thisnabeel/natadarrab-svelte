<script>
import API from "$lib/api/api";
import Card from "./Card.svelte";


    export let skill;


    async function addCard() {
        const res = await API.post("/meeting_cards.json", {
            skill_id: skill.id,
            position: skill.meeting_cards.length + 1
        })
        skill.meeting_cards = [...skill.meeting_cards, res];
        console.log({res})
    }

    async function handleCardRemove(card) {
        await API.delete("/meeting_cards/"+card.id+".json");
        skill.meeting_cards = skill.meeting_cards.filter(c => c.id !== card.id);
    }

</script>
<div class="wrapper">

    <h1>Meeting Cards: <div class="btn btn-outline-info" on:click={addCard}><i class="fa fa-plus"></i></div></h1>
    <ul class="clean-list">
        {#each skill.meeting_cards || [] as card}
            <Card remove={() => handleCardRemove(card)} {card}></Card>
        {/each}
    </ul>
</div>

<style>

    .wrapper {
        padding: 10px 20px;
    }
</style>