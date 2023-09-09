<script>
import API from "$lib/api/api";

    import Game from "$lib/components/Games/Game/Game.svelte"
    import { onMount } from "svelte";
    import {page} from "$app/stores"

    let game = null;

    onMount(async () => {
        const id = $page.params.id
        game = await API.get("/games/"+id+".json");
        game.folder.questions = shuffler(game.folder.questions);
        console.log(game);
    })
</script>

{#if game}
    <div class="game">
        <Game {game}></Game>
    </div>
{/if}

<style>
    .game {
        padding: 3em;
    }


</style>