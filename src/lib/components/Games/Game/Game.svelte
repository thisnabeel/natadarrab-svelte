<script>
    import Question from "./Question.svelte";
    export let game;
    let showStatus = false;
</script>

<div class="title">

        <h1>{game.title}</h1>
    </div>
<p>{@html game.description}</p>
<div class="wrapper">

    <ol class="clean-list">
        {#each game.folder.questions || [] as q}
            <Question question={q} {showStatus}></Question>
        {/each}
    </ol>

    <div class="btn btn-outline-primary btn-lg" on:click={() => showStatus = true}>Submit</div>
</div>

<style>
    .title {
        background: #deffe8;
        border: 5px solid #ccf6d9;
        padding: 20px;
        max-width: fit-content;
        margin: 0 auto;
    }
</style>