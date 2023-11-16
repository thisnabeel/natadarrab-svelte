<script>
    import Api from "$lib/api/api.js";
    import {onMount} from "svelte";
    import Nav from "./Nav/Index.svelte";

    let students;
    onMount(async () => {
        // const response = await Api.get("/skills_sets/1.json");
        // skillSets = [...skillSets, response];

        students = await Api.get("/users.json");
        console.log(students)
    })
</script>

<Nav />

<input type="text" placeholder="Search..." class="form-control">
<ul class="clean-list students">
    {#each students || [] as student}
        <li class="student">
            <h3>{student.first_name} {student.last_name}</h3>
            <hr>
            <span class="stuck ">{student.stuck_at.title}</span>
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