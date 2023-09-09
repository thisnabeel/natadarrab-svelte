<script>
import API from "$lib/api/api";

        import moment from "moment";


export let slot;
export let removeSlot;
export let day;

let startTimes = [];
let endTimes = [];

function getIncrements() {
        // Create a Moment.js object for the starting time
    const startMoment = moment("00:00", "hh:mm");

    // Create an array to store the 30-minute increments
    const increments = [];

    // Number of 30-minute increments you want to generate
    const numberOfIncrements = 48; // Change this to the desired number

    for (let i = 0; i < numberOfIncrements; i++) {
        // Create a new Moment.js object for each increment
        const currentIncrement = moment(startMoment);

        increments.push(currentIncrement);
        startMoment.add(30, 'minutes');
    }
    return increments
}

function toggleStartTimes() {
    if (startTimes.length > 0) {
        startTimes = [];
        return;
    };

    // Display the 30-minute increments
    startTimes = getIncrements().map((momentObject) => {
        return {
            clean: momentObject.format('h:mm a'),
            raw: momentObject.toDate(),
        };
    });
}

function toggleEndTimes() {
    if (endTimes.length > 0) {
        endTimes = [];
        return;
    };

    // Display the 30-minute increments
    endTimes = getIncrements().map((momentObject) => {
        return {
            clean: momentObject.format('h:mm a'),
            raw: momentObject.toDate(),
        };
    });
}

async function setStartTime(time) {
    slot.start_time = time.raw;
    await API.put(`/time_slots/${slot.id}.json`, {
        start_time: time.clean
    })
    toggleStartTimes()
}


async function setEndTime(time) {
    slot.end_time = time.raw;
    await API.put(`/time_slots/${slot.id}.json`, {
        end_time: time.clean
    })
    toggleEndTimes()
}

</script>

<div class="time-picker">
    <div class="content">
        <div class="time-input-container">
            <div class="toucher" >
                <div on:click={toggleStartTimes}>
                    {moment(slot.start_time).format('h:mm a')}
                </div>

                {#if startTimes.length > 0}
                    <ul class="clean-list pop-up-selector">
                        {#each startTimes as time}
                            <li on:click={() => setStartTime(time)}>
                                {time.clean}
                            </li>
                        {/each}
                    </ul>
                {/if}
            </div>

            
        </div>
        <hr>
        <div class="time-input-container">
            <div class="toucher">
                <div  on:click={toggleEndTimes}>
                    {moment(slot.end_time).format('h:mm a')}
                </div>
                {#if endTimes.length > 0}
                    <ul class="clean-list pop-up-selector">
                        {#each endTimes as time}
                            <li on:click={() => setEndTime(time)}>
                                {time.clean}
                            </li>
                        {/each}
                    </ul>
                {/if}
            </div>
        </div>
        <div class="fa fa-trash remove-slot" on:click={() => removeSlot(day, slot.id)}></div>
    </div>
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

.pop-up-selector {
    position: absolute;
    background: #e3fbff;
    width: max-content;
    padding: 10px;
    z-index: 999999;
    top: 31px;
    border: 1px solid #ccc;
    max-height: 250px;
    overflow-y: scroll;
}
</style>