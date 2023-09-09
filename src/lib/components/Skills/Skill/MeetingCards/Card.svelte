<script>
import API from "$lib/api/api";

    export let card;
    export let remove;
    import {admin} from "$lib/stores/user";
    import debounceSave from "$lib/functions/debounce"
    async function save() {
        await debounceSave("/meeting_cards/"+card.id,{
            title: card.title
        })
    }
</script>

<li class="card">
    {#if admin}
        <input type="text" class="form-control" bind:value={card.title} on:keyup={save}>
        <i on:click={remove} class="remove fa fa-times"></i>
    {:else }
        <div>{card.title}</div>
    {/if}
</li>

<style>
    .card {
        padding: 10px;
        margin: 10px 0;
        position: relative;
    }

    .remove {
        position: absolute;
        top: 10px;
        left: -20px;
    }
</style>