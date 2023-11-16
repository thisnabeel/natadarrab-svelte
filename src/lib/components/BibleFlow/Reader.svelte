<script>
    import API from "$lib/api/api";
    import { onMount } from "svelte";
    import Verse from "./Verse/Verse.svelte"

    export let books;
    let selectedBookId = -1;
    let selectedBook = null;


    onMount(async () => {
        selectedBookId = books[0].id;
        console.log({books})
        getSelectedBook();
    })

    let content = null;



    const getSelectedBook = () => {
        selectedBook = books.filter(book => book.id === selectedBookId)[0];
    };

    let selectedChapter = 1;
    let verses = [];

    async function fetchChapter(key) {
        // console.log(key)
        const response = await API.get("/bible_books/get_chapter/"+key);
        console.log(response);
        verses = response;
    }

    $: if (selectedBook) {
        console.log(selectedBook.position, selectedChapter)
        fetchChapter(String(selectedBook.position) + ":" + selectedChapter);
    };


</script>


{#if books}
    <div class="selectors">

        <select name="" id="" class="form-control bookSelector" bind:value={selectedBookId} on:change={getSelectedBook}>
            {#each books as book}
                <option value="{book.id}">{book.title}</option>
            {/each}
        </select>
        {#if selectedBook}
            <select  class="form-control" name="" id="" bind:value={selectedChapter}>
                {#each Object.keys(selectedBook.selectable) as chapter}
                    <option value={chapter}>{chapter}</option>
                {/each}
            </select>
        {/if}
    </div>
{/if}

{#if verses}
        <ul class="clean-list verses" bind:this={content}>
            {#each verses as verse, index}
                <Verse {verse}></Verse>
            {/each}
        </ul>
{/if}

<style>

    .english, .original {
        display: flex;
    }
    .english .ref, .original .ref {
        width: 70px;
        text-align: center;
        margin: 0 10px;
        height: fit-content;
    }
.verse {
    padding: 8px;
    margin: 4px;
    /* background-color: rgb(221, 245, 255); */

    background-color: rgb(255 243 234);
    border-radius: 10px;
    line-height: initial;
}

.hebrew {
    direction: rtl;
    text-align: right;
}

.verse .ref {
    background: #c1c1ff54;
    color: #040404;
    padding: 4px 16px;
    border-radius: 10px;
}


.bookSelector {
    width: fit-content;
    display: block;
    margin: 0 auto;
    font-size: 34px;
}

.selectors {
    display: flex;
    width: max-content;
    margin: 0px auto;
}

.selectors select {
    display: inline-block;
}
</style>