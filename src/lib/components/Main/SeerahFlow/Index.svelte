<script>
    import API from "$lib/api/api";
import { onMount } from "svelte";
    import {user} from "$lib/stores/user";

    import Nav from "./Nav.svelte"

    let newTitle = "";
    let newYear = "";

    let events = [];

    onMount(async () => {
        events = await API.get("/historical_events.json");
    })

    async function addEvent() {
        const event = await API.post("/historical_events.json", {
            title: newTitle,
            year: newYear
        });
        events = [...events, event];
        newTitle = "";
        newYear = "";
    }

    $: timeline = events.sort((a,b) => a.year - b.year)
</script>

<Nav></Nav>

{#if $user && $user.admin}
    <div class="wrapper">
        <input type="text" class="form-control" placeholder="Title" bind:value={newTitle} >
        <input type="text" class="form-control" placeholder="Year" bind:value={newYear} >
        <div class="btn btn-info" on:click={addEvent}>Add</div>
    </div>
    <hr>
{/if}

<ul class="events clean-list">
    {#each timeline as event}
        <li class="event">
            <span>{event.year}</span> - <span>{event.title}</span>
        </li>
    {/each}
</ul>

<style>
    .wrapper {
        padding: 3vw;
    }

    .events {
        padding: 3vw;
    }
    .event {
        padding: 8px;
        margin: 4px;
        background-color: rgb(221, 245, 255);
        border-radius: 10px;
    }
</style>