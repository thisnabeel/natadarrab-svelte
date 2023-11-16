<script>
    import Api from "$lib/api/api.js";
    import {onMount} from "svelte";
    import Nav from "./Nav/Index.svelte";

    let teachers;
    onMount(async () => {
        // const response = await Api.get("/skills_sets/1.json");
        // skillSets = [...skillSets, response];

        teachers = await Api.get("users/tagged/teacher.json");
        console.log({teachers})
    })
</script>

<Nav />

<ul class="clean-list teachers">
    {#each teachers || [] as teacher}
        <li class="student">
            <h3>{teacher.first_name}</h3>
            <hr>
        </li>
    {/each}
</ul>

<style>
    .student {
        padding: 14px;
        margin: 10px;
        background: rgb(255, 248, 248);
    }

    .stuck {
        font-size: 12px;
    }
</style>