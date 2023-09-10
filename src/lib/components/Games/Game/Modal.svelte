<script>
    import Api from "$lib/api/api.js";
    import {onMount} from "svelte";
    import shuffler from "$lib/functions/shuffler.js";
    import { closeModal } from 'svelte-modals';
    import Game from "./Game.svelte";

    export let game;
    onMount(async () => {
        // const response = await Api.get("/skills_sets/1.json");
        // skillSets = [...skillSets, response];

        game = await Api.get("/games/"+game.id+".json");
        game.folder.questions = shuffler(game.folder.questions);
        console.log(game);

        updateURLParams("game", game.id)

    })

    function updateURLParams(paramName, paramValue) {
        const currentURL = new URL(window.location.href);
        const searchParams = new URLSearchParams(currentURL.search);
        searchParams.set(paramName, paramValue);

        const newURL = new URL(currentURL);
        newURL.search = searchParams.toString();

        window.history.pushState({}, '', newURL.href);
    }
</script>

    <div class="contents">

            <i class="fa fa-arrow-left go-back" on:click={closeModal}></i>


        <Game {game}></Game>
    </div>

<style>
  .contents {
    min-width: 240px;
    /* padding: 16px; */
    /* max-width: 500px; */
    width: 80vw;
    /* padding: 4vw; */
    border-radius: 10px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    pointer-events: auto;

    overflow: scroll;
    overflow-x: hidden;
  }

    .wrapper {
        /* overflow-y: scroll; */
        /* max-height: 70vh; */
    }

    .go-back {
        position: fixed;
        top: 10px;
        left: 10px;
        font-size: 34px;
    }

    .title {
        text-align: center;
    }
</style>