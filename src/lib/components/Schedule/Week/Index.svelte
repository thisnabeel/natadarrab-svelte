<script>
import { onMount } from "svelte";

    import Day from "./Day/Day.svelte"
    export let daysOfWeek = [];
    export let meetings;


    // let days = [
    //     {
    //         name: "Monday",
    //         number: 16,
    //         sessions: [{
    //             title: "Type of Words",
    //             time: "3:00pm - 4:30pm",
    //             category: "Coding Drills"
    //         }]
    //     },
    //     {
    //         name: "Tuesday",
    //         number: 17,
    //         sessions: [{
    //             title: "Fi'ls",
    //             time: "3:00pm - 4:30pm",
    //             category: "Coding Drills"
    //         }]
    //     },
    //     {
    //         name: "Wednesday",
    //         number: 18,
    //     },
    //     {
    //         name: "Thursday",
    //         number: 19,
    //     },
    // ]
</script>

{#if daysOfWeek}
<div class="content">
    <div class="week-container">
        <div class="week">
            <div class="days">
                {#each daysOfWeek || [] as day}
                    <!-- <h1>Hi</h1> -->
                    <Day meetings={meetings} {day}></Day>
                {/each}
            </div>
        </div>
    </div>
</div>
{:else}
    <h1>Loading</h1>
{/if}

<style>
    .content {
        overflow: hidden;
        display: flex;
    }

    .week-container {
        overflow: scroll visible;
        background-color: rgb(250, 250, 250);
        -webkit-box-flex: 1;
        flex-grow: 1;
        flex-shrink: 0;
        width: calc((((max(100vw, 1200px) - 4px) - 60px) - 0px) - 464px);
    }

    .week {
        display: flex;
        width: max-content;
        -webkit-box-pack: start;
        justify-content: flex-start;
    }


</style>