<script>
import API from "$lib/api/api";
import { onMount } from "svelte";
import getBooks from "./books"
import SegmentEdit from "./Segment/Edit.svelte";


    let newSegmentDescription = "";
    let activeContainer = {
        id: null
    }
    let newContainerTitle = "";
    let containers = [];
    let segments = [];
    let bibleBooks = getBooks().map((c) => c.books.map((b)=> b)).flat();
    let selectedBookPosition = 1;

    $: if (activeContainer.id) {
        getContainerSegments();
    }


    onMount(() => {
        getContainers();

    })

    async function addSegment() {
        const segment = await API.post("/bible_segments.json", {
            bible_segment: {
                description: newSegmentDescription,
                position: segments.length + 1,
                bible_segments_container_id: activeContainer.id,
                bible_book_id: selectedBookPosition
            },
        })

        segments = [...segments, segment]
        newSegmentDescription = '';
    }

    async function addContainer() {
        // newContainerTitle;
        const container = await API.post("/bible_segments_containers.json", {
            title: newContainerTitle,
            position: containers.length + 1
        })

        containers = [...containers, container]
        newContainerTitle = '';
    }


    async function getContainers() {
        containers = await API.get("/bible_segments_containers.json");
    }

    async function getContainerSegments() {
        segments = await API.get("/bible_segments_containers/"+activeContainer.id+"/segments.json");
        console.log({segments})
    }
</script>

<input type="text" class="form-control" bind:value={newContainerTitle}>
<div class="btn btn-info" on:click={addContainer}>Add Container</div>
<div class="containers clean-list">
    {#each containers as container}
        <li class="container" class:active={activeContainer.id === container.id} on:click={() => activeContainer = container}>{container.title}</li>
    {/each}
</div>

<div class="wrapper">

    {#if activeContainer.id}
    <br><br>
    <div class="segment-adder">
        <h3>Add a Segment</h3>
        <textarea class="form-control" placeholder="Title" bind:value={newSegmentDescription}></textarea>
        <select name="" id="" bind:value={selectedBookPosition}>
            {#each bibleBooks as book, index}
            <option value="{index + 1}">{book}</option>
            {/each}
        </select>
        <div class="btn btn-info" on:click={addSegment}>Add</div>
    </div>
    <hr style="margin-top: 13em;">
    
    <div class="segments clean-list">
        {#each segments as segment, index}
        <SegmentEdit {segment} {bibleBooks} {index}></SegmentEdit>
        {/each}
    </div>
    
    {/if}
</div>

<style>

    .wrapper {
        padding: 0 4vw;
    }
    .containers {
        list-style: none;
        display: inline;
    }

    .segment-adder {
        position: fixed;
        z-index: 999;
        background: #c1f5ff;
        display: block;
        width: 100%;
        border: 2px solid #0dcbf0;
        padding: 24px;
    }
</style>