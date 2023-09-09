<script>
    import Dashboard from "$lib/components/Dashboard/Index.svelte";
    import { onMount } from "svelte";
    import {user} from "$lib/stores/user"
import { goto } from "$app/navigation";


    onMount(() => {
        if (getQueryParam("game").length > 0) {
            if (!$user) {
                goto(`/games/${getQueryParam("game")}`);
            }
        }
    })

</script>

<Dashboard />