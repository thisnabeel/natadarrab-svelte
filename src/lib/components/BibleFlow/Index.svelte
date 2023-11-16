<script>
    import API from "$lib/api/api";
    import { onMount } from "svelte";
    import EditSegments from "./EditSegments.svelte";
    import Segments from "./Segments.svelte";
    import Reader from "./Reader.svelte";
    import Nav from "./Nav.svelte"

    // let newTitle = "";
    // let newYear = "";

    let books = [];

    onMount(async () => {
        books = await API.get("/bible_books.json");
    })


    async function addEvent() {
        // const event = await API.post("/historical_events.json", {
        //     title: newTitle,
        //     year: newYear
        // });
        // events = [...events, event];
        // newTitle = "";
        // newYear = "";
    }

    let views = ["segments", "editSegments"]
    let viewIndex = 0;

    let view = views[viewIndex]

    function toggleSegmentsView() {
        viewIndex = (viewIndex + 1) % views.length;
        view = views[viewIndex];
    }

    // $: timeline = events.sort((a,b) => a.year - b.year)
</script>

<Nav toggleView={toggleSegmentsView}></Nav>


    {#if books.length > 1}
        <div class="wrapper">
            {#if view === "segments"}
                <Segments {books}></Segments>
            {/if}

            {#if view === "reader"}
                    <Reader {books}></Reader>
            {/if}

            {#if view === "editSegments"}
                <EditSegments></EditSegments>
            {/if}
        </div>
    {/if}




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