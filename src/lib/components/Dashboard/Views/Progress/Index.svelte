<script>
    import Nav from "./Nav/Index.svelte";
    import Api from "$lib/api/api.js";
    import {onMount} from "svelte";
    import Set from "./Set/Set.svelte";

    let skillSets = [];
    onMount(async () => {
        // const response = await Api.get("/skills_sets/1.json");
        // skillSets = [...skillSets, response];

        skillSets = await Api.get("/skills_sets/as_user/1.json");
        console.log(skillSets)
    })
</script>

<div class="content">
    <Nav></Nav>

    <div class="wrapper">
        {#each skillSets as set}
            <Set {set} />
        {/each}
    </div>
</div>

<style> 
    .content {
        background: #FAFAFA;    
        height: 100vh;    
        overflow-y: scroll;
    }
</style>