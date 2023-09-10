<script>
    import Dashboard from "$lib/components/Dashboard/Index.svelte";
    import { onMount } from "svelte";
    import {user} from "$lib/stores/user"
    import { goto } from "$app/navigation";
    import getQueryParam from "$lib/functions/params"


    onMount(() => {
        if (getQueryParam("game") && getQueryParam("game").length > 0) {
            if (!$user) {
                goto(`/games/${getQueryParam("game")}`);
            }
        }
    })

</script>

<Dashboard />