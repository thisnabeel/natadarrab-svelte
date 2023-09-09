<script>
import API from "$lib/api/api";

    import debounceSave from "$lib/functions/debounce"
    export let index;
    export let segment;
    export let bibleBooks;

    async function save(){
        // console.log(await API.get("/bible_segments/"+segment.id+".json"));

        const response = await debounceSave("/bible_segments/"+segment.id, {
            description: segment.description,
            verses: segment.verses
        }, "post");
        console.log(response);
    }

</script>

<li class="segment">
    <span class="position">{index + 1}</span>
    <div class="description">
        <textarea name="" id="" class="form-control" bind:value={segment.description} 
        on:keyup={save}
        ></textarea>
    </div>

    <div class="verse-inputter">
        <span>{bibleBooks[segment.bible_book_id - 1]}</span>
        <input type="text" class="verses form-control" bind:value={segment.verses} 
        on:keyup={save}>
    </div>
</li>

<style>

    .verse-inputter span {
        font-weight: bold;
    }

    .verse-inputter input {
        display: inline-flex;
        width: 30%;
        background: #FFF3EA;
        font-size: 18px;
    }

    .segment {
        margin: 10px 0;
        position: relative;
    }

    .position {
        position: absolute;
        top: 0;
        left: -40px;
        font-size: 24px;
        padding: 10px;
        border-radius: 14px;
        background: #FFF3EA;
    }
</style>