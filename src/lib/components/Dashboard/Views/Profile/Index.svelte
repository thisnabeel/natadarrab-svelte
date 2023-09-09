<script>
    import API from "$lib/api/api";
    import { onMount } from "svelte";
    import {user} from "$lib/stores/user";

    import Nav from "./Nav.svelte"
import { goto } from "$app/navigation";

    let profile = null;
    onMount(async () => {
        user.subscribe(value => {profile = value})
    })

    async function signOut() {
        user.set(null);
        goto("/")
    }

</script>

<Nav></Nav>

{#if $user}
        <div class="wrapper">

            <input type="text" class="form-control" placeholder="First Name" bind:value={$user.first_name}>
            <input type="text" class="form-control" placeholder="Last Name" bind:value={$user.last_name}>

            <div class="btn btn-danger btn-lg" on:click={signOut}>Sign Out</div>
        </div>
        <hr>
{/if}


<style>
    .wrapper {
        padding: 3vw;
    }


</style>