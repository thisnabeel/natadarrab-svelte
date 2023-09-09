<script>
import API from "$lib/api/api";

import { onMount } from "svelte";
import Verse from "./Verse/Verse.svelte";



export let books;

let segments = [];

let book_id = books[0].id;
async function fetchBookSegments() {
    // console.log(book_id)
    segments = await API.get(`/bible_segments/book/${book_id}.json`);
}

$: fetchBookSegments(book_id)


let selected = null;
let verses = null;
async function selectSegment(segment) {
    if (selected) {
        selected = null;
        verses = null;
        return;
    }
    selected = segment;
    verses = await API.get(`/bible_segments/${segment.id}/verses.json`);
    console.log(verses);
}

function capitalize(str) {
  // Check if the input string is empty
  if (str.length === 0) return str;

  // Capitalize the first letter and concatenate the rest of the string
  return str.charAt(0).toUpperCase() + str.slice(1);
}
</script>

<div class="wrapper">
    <div class="left-col">
        <div class="select-holder">
    
                <select class="book-select form-control" bind:value={book_id} >
                    {#each books as book}
                        <option value="{book.id}">{book.title.replaceAll("-", " ").split(" ").map(t => capitalize(t)).join(" ")}</option>
                    {/each}
                </select>
                <hr>
            </div>

        <div class="summary">
            {#each segments as segment}
                <div class="segment">
                    <span class="verses" on:click={() => selectSegment(segment)} class:selected={selected && selected.id === segment.id}>
                        {segment.description}
                    </span>

                    {#if selected && selected.id === segment.id}
                        {#if verses}
                            {#each verses as verse, index}
                                <Verse {verse} {index}></Verse>
                            {/each}
                        {/if}
                    {/if}
                </div>
            {/each}
            
        </div>
    </div>

</div>

<style>
.wrapper {
    display: flex;
}

.mini-header {
    max-width: 350px;
    display: block;
    margin: 0 auto;
}

img {
    vertical-align: middle;
}

.left-col {
    flex: 1 1 66%;
    max-width: 66%;
    padding: 3em;
    /* height: 74vh; */
    /* overflow-y: scroll; */
}

.select-holder {
    display: table;
    margin: 0 auto;
    max-width: 740px;
    font-size: 34px;
}

.select-holder hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eeeeee;
    box-sizing: content-box;
    height: 0;
}

.verses.selected {
    background-color: #b5ffea;
    display: block;
    border: 6px dashed #93e0ca;
    padding: 13px;
}
</style>
