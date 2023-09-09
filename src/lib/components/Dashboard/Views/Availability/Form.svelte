<script>

    import Api from "$lib/api/api";
    import {onMount} from "svelte";
    import TimePicker from "./TimePicker.svelte"



    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]

    let form = {}
    days.forEach(day => {
        form[day.toLowerCase()] = {
            slots: []
        }
    })

    onMount(async () => {
        // const response = await Api.get("/skills_sets/1.json");
        // skillSets = [...skillSets, response];

        const gotten = await Api.get("/time_slots/as_user/1.json");
        gotten.forEach(g => {
            form[g.day_name].slots = [...form[g.day_name].slots, g]
        })
    })




    $: active = (day) => {
        const d = day.toLowerCase();
        if (form[d].slots.length > 0) {
            return true
        }
        return false
    }

    $: slots = (day) => {
        const d = day.toLowerCase();
        return form[d].slots || []
    }


    function generateSmallUUID() {
        const cryptoObj = window.crypto || window.msCrypto;
        if (!cryptoObj) {
            console.log("Cryptographically secure random number generation is not supported in this browser.");
            return null;
        }

        const array = new Uint8Array(8);
        cryptoObj.getRandomValues(array);

        let uuid = '';
        for (let i = 0; i < array.length; i++) {
            uuid += array[i].toString(16).padStart(2, '0');
        }

        return uuid;
    }
    function activate(day) {
        addSlot(day)
    }

    function deactivate(day) {
        const d = day.toLowerCase();
        form[d].slots = []
    }

    async function addSlot(day) {
        const ss = form[day.toLowerCase()].slots
        const response = await Api.post("/time_slots.json", {
            user_id: 1,
            day_name: day.toLowerCase(),
            start_time: "1:00pm",
            end_time: "3:00pm"
        })
        form[day.toLowerCase()].slots = [...ss, response]

    }

    async function removeSlot(day, id) {
        const response = await Api.delete(`/time_slots/${id}.json`);
        const ss = form[day.toLowerCase()].slots
        form[day.toLowerCase()].slots = ss.filter(s => s.id !== id);
    }
</script>

<div class="form">
    {#each days as day}
        <div class="day">
            <label for="" class="tick">
                {#if !active(day)} 
                    <i class="fa fa-square-o unchecked" on:click={() => activate(day)}></i>
                {:else}
                    <i class="fa fa-check-square checked" on:click={() => deactivate(day)}></i>
                {/if}
            </label>

            <div class="day-name">
                {day.substring(0, 3)}
            </div>

            <div class="slots">
                {#each slots(day) as slot}
                    <TimePicker {slot} {day} {removeSlot}></TimePicker>
                {/each}
            </div>
            
            <div class="add-slot" on:click={() => addSlot(day)}>
                <i class="fa fa-plus"></i>
            </div>
        </div>
    {/each}
</div>
<style>
.form {
    width: max-content;
    min-width: 400px;
    border: 1px solid rgb(231, 232, 234);
    border-radius: 8px;
    margin-top: 16px;
}

.day {
    display: flex;
    grid-template-columns: max-content max-content 2fr;
    row-gap: 16px;
    -webkit-box-align: center;
    /* align-items: center; */
    border-bottom: 1px solid rgb(231, 232, 234);
    border-top-color: rgb(231, 232, 234);
    border-right-color: rgb(231, 232, 234);
    border-left-color: rgb(231, 232, 234);
    padding-left: 8px;
    padding-top: 16px;
    padding-bottom: 16px;
}

.day label {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
    width: inherit;
    margin: 0px;
    /* padding: 0px; */
    align-self: start;

    padding: 8px;
    font-size: 26px;
}

.day-name {
    margin-bottom: 0px;
    margin-left: 0px;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5;
    font-family: "Avenir Next", sans-serif;
    text-transform: uppercase;
    width: 52px;
    margin-right: 8px;
    margin-top: initial;
}

.time-picker {
    grid-column: 3 / auto;
    padding-bottom: 10px;
}

.time-picker .content{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}

.time-input-container {
    display: inline-flex;
    flex-direction: column;
    position: relative;
    min-width: 0px;
    padding: 0px;
    margin: 0px;
    border: 0px;
    vertical-align: top;
}

.toucher {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4375em;
    font-family: "Avenir Next", sans-serif;
    color: rgb(35, 39, 45);
    box-sizing: border-box;
    cursor: text;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    border-radius: 4px;
    width: 88px;
    text-align: center;
}

.time-selector {
    padding-left: 8px;
    padding-right: 8px;
}

.time-picker hr {
    margin: 0px 4px;
    flex-shrink: 0;
    border-width: 0px 0px thin;
    border-style: solid;
    border-color: rgb(98, 104, 114);
    width: 8px;
}

.fa.checked {
    color: #29bf29;
    /* color: #fff; */
    /* border: 1px solid #000; */
}

.tick {
    padding: 10px;
}

.toucher > div {
    padding-left: 8px;
    padding-right: 8px;
}

.toucher > .fieldset {
    text-align: left;
    position: absolute;
    inset: -5px 0px 0px;
    margin: 0px;
    padding: 0px 8px;
    pointer-events: none;
    border-radius: inherit;
    border-style: solid;
    border-width: 1px;
    overflow: hidden;
    min-width: 0%;
    border-color: rgba(0, 0, 0, 0.23);
}

.fieldset legend {
    float: unset;
    width: auto;
    overflow: hidden;
    padding: 0px;
    line-height: 11px;
    transition: width 150ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}


.adder {
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
    margin: 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-family: "Avenir Next", sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    padding: 6px 16px;
    border-radius: 4px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: none;
    color: rgb(14, 99, 246);
    height: 40px;
    min-width: 0px;
    text-transform: none;
    grid-area: 1 / 4 / auto / auto;
    bottom: 1px;
}

.remove-slot {
    padding: 10px;
}

.day-name, .add-slot {
    padding-top: 4px;

}
</style>