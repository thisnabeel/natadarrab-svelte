
<script>
    import API from "$lib/api/api";

    export let day;
    export let meetings;

    import Item from "./Item/Show.svelte";
    import {user} from "$lib/stores/user";

    let fetched = [];
    async function fetchMore() {
        const response = await API.post("/meeting_cards/fetch_more", {
            user_id: 1,
            date: day.rawDate
        });
        // console.log(response, day)
        console.log(response)
        fetched = response;
        // fetched = response.filter(slot => slot.day.toLowerCase() === day.dayName.toLowerCase() );
    }

    // Specify the date to filter for
    const desiredDate = new Date(day.rawDate); // Change to your desired date
    $: console.log(day.rawDate)
    $: console.log({meetings})

    // Filter the array to find meetings that fall on the desired date
    $: meetingsOnDesiredDate = meetings.filter(meeting => {
        // Create a JavaScript Date object from the provided string
        const date1 = new Date(day.rawDate);

        // Create another JavaScript Date object from the string "2023-09-12T14:00:00.000-07:00"
        const date2 = new Date(meeting.start_time);

        // Compare if the two dates represent the same day
        return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
        );
    });
</script>

<div class="day">
    <div class="head">
        <div><div class="date" aria-label="{day.dayName}, {day.monthName} {day.dateNumber}"><div class="date-day">{day.dayName}</div><div class="date-number">{day.dateNumber}</div></div></div>
    </div>


    <div class="schedule">
        <div class="sessions">
            <div class="label">Sessions:</div>
            <div class="items">
                {#each meetingsOnDesiredDate || [] as session}
                    <!-- <li>{session}</li> -->
                    <Item item={session}></Item>
                {/each}
            </div>
        <div on:click={fetchMore} class="fetch-more btn btn-block btn-outline-info"><i class="fa fa-lightbulb"></i> Find More Open Meetings</div>
        </div>
        {#if fetched}
            <div class="items">

                {#each fetched as slot}
                    <Item item={slot}></Item>
                {/each}
            </div>
        {/if}

        <div class="tasks">
             <div class="label">Tasks:</div>
             <div class="items">
                {#each day.tasks || [] as task}
                    <Item item={task}></Item>
                {/each}
             </div>
        </div>
    </div>
</div>

<style>
    .fetch-more {
        display:block;
    }
    .day {
        display: inline-block;
        background-color: rgb(250, 250, 250);
        width: 435px;
        border-right: 1px solid rgb(231, 232, 234);
        border-top-color: rgb(231, 232, 234);
        border-bottom-color: rgb(231, 232, 234);
        border-left-color: rgb(231, 232, 234);

        overflow-y: scroll;
        height: 84vh;
        padding: 0px 8px 0px 24px;
        transition: padding 0.5s ease 0s;
    }

    .day::-webkit-scrollbar {
        display: none;
    }

    .head {
        padding: 16px 24px;
        /* display: flex; */
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        user-select: none;
        height: 86px;
        box-sizing: border-box;
        transition: height 0.5s ease 0s;
        border-bottom: 1px solid transparent;
        border-top-color: transparent;
        border-right-color: transparent;
        border-left-color: transparent;
    }

    .date .date-day {
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1.5;
        color: rgb(98, 104, 114);
        text-transform: uppercase;
        text-align: center;
    }

    .date .date-number {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.375;
        font-family: "Avenir Next", sans-serif;
        color: rgb(35, 39, 45);
        text-align: center;
        margin-left: 0px;
    }

    .label {
        color: rgb(98, 104, 114);
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 1.4;
        font-family: "Avenir Next", sans-serif;
        margin-top: 8px;
        padding-bottom: 8px;
    }

    .items {
        color: rgb(98, 104, 114);
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 1.4;
        font-family: "Avenir Next", sans-serif;
        margin-top: 8px;
        padding-bottom: 8px;
    }
</style>