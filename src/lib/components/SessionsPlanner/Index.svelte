<script>
import API from "$lib/api/api";

import { onMount } from "svelte";
        import moment from "moment";

    import Nav from "./Nav.svelte"

    let students = null;
    onMount(async () => {
        students = await API.get("/meetings/plan/weekly.json")
        console.log({students})
    })

    let selectedSlot = null;
    async function bookMeeting(day, slot) {
        selectedSlot = {day, slot}
        const res = await API.get(`/time_slots/${slot.id}/bookables.json`);
        console.log({res})
        selectedSlot.options = res
    }

    async function createMeeting(option, student) {
        console.log({option})
        const response = await API.post('/meetings/generate', {
            option: option,
            student: student
        })
        console.log({response})
        selectedSlot = null;
    }
    
</script>

<Nav></Nav>
<!-- <h1>HI</h1> -->

<ul class="clean-list students">
    {#each students || [] as obj}
        <li class="student">
            <div class="name">{obj.student.first_name}  {obj.student.last_name}</div>
            <hr>
            <ul class="clean-list days">
                {#each ['monday', 'tuesday', "wednesday", "thursday", "friday", "saturday", "sunday"] as day}
                    <li>
                        <div class="day-name">
                            {day}
                        </div>
                        <div class="slots">
                            {#each obj.slots.filter(slot => slot.day_name === day) as slot}
                                <div class="slot">
                                    <div class="btn btn-info" on:click={() => bookMeeting(day, slot)}>{moment(slot.start_time).format('h:mm a')} - {moment(slot.end_time).format('h:mm a')}</div>
                                    {#if selectedSlot && selectedSlot.slot.id === slot.id}
                                        <div class="booker">
                                            {#if selectedSlot.options}
                                            <ul class="cards clean-list">

                                                {#each selectedSlot.options as option}
                                                    <li class="btn btn-outline-primary btn-block card" on:click={() => createMeeting(option, obj.student)}>
                                                        <div class="card-teacher">{option.teacher.first_name + " "+ option.teacher.last_name}</div>
                                                        <div class="card-title">{option.card.title}</div>
                                                        <div class="card-time">{option.time}</div>
                                                    </li>
                                                {/each}
                                            </ul>
                                            {/if}
                                        </div>
                                    {/if}
                                </div>
                            {/each}
                        </div>

                    </li>
                {/each}
            </ul>
        </li>
    {/each}
</ul>

<style>

    .days {
        display: flex;
    }

    .days > li {
        flex: 1 1 13%;
    }
    .students {
        margin: 2em;
    }
    .student {
        padding: 14px;
        border: 4px solid rgb(232, 232, 255)
    }
    .student .name {
        font-size: 28px;
    }

    .day-name {
        text-align: center;
        background: #ccc;
        padding: 10px;
    }
    .slots {
        padding: 10px 0;
    }

    .slot {
        position: relative;
    }

    .booker {
        position: absolute;
    background: #fff;
    padding: 14px;
    width: 250px;
    border: 1px solid #0dcbf0;
    left: -30%;
    }

    .card-title {
        font-size: 14px;
    }

    .card-teacher {
        font-size: 18px;
    }

    .card {
        display: block;
    }
</style>