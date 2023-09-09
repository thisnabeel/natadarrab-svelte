<script>
import API from "$lib/api/api";

import { onMount } from "svelte";

    import Nav from "./Nav/Index.svelte";
    import Week from "./Week/Index.svelte";
    import {user} from "$lib/stores/user";
    
    let daysOfWeek = [];
    let startOfWeek = null;
    let currentDate = null;

    let meetings = []

    onMount(() => {
        currentDate = new Date();
        startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
        populateWeek()
        getMeetings()
    });

    async function getMeetings() {
        meetings = await API.get(`/users/${$user.id}/meetings.json`);
        console.log({meetings})
    }



    function populateWeek() {

        daysOfWeek = [];

        const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
        ];

        for (let i = 0; i < 7; i++) {
            const date = new Date(startOfWeek);
            date.setDate(startOfWeek.getDate() + i);

            const dayName = date.toLocaleString('en-us', { weekday: 'long' });
            const monthName = months[date.getMonth()];
            const dateNumber = date.getDate();
            const sessions = [];
            const rawDate = date;
            const newDay = { rawDate, dayName, monthName, dateNumber, sessions };
            daysOfWeek = [...daysOfWeek, newDay];
        }
        // console.log(daysOfWeek);
    }

    function nextWeek() {
        const today = new Date();
        const nextSunday = new Date(today);

        nextSunday.setDate(today.getDate() + ((7 - today.getDay()) % 7));

        console.log(nextSunday.toDateString());
        startOfWeek = nextSunday;
        populateWeek();
    }

</script>

<div class="content">
    <Nav {nextWeek}></Nav>
    <Week {daysOfWeek} {meetings}></Week>
</div>

<style> 

</style>