<script>
    import Progress from "./Views/Progress/Index.svelte";
    import Seerah from "./Views/SeerahFlow/Index.svelte";
    import QuranFlow from "./Views/QuranFlow/Index.svelte";

    import LeftBar from "./LeftBar/LeftBar.svelte";
    import {onMount} from "svelte";

    export let selectedTab = Progress;

    function selectTab(tab) {
        selectedTab = tab;
    }

    onMount(() => {
        const hash = window.location.hash.substring(1);

        switch (hash) {
            case "seerah":
            // If pressed up
                selectedTab = Seerah;
                return;
            case "quranflow":
            // If pressed down
                selectedTab = QuranFlow;
                return;
            default:
                selectedTab = Progress;
                return;
        }
    })
</script>

<div class="dashboard">
    <div class="leftShelf">
        <LeftBar {selectTab} {selectedTab} />
    </div>

    <div class="main">
        {#if selectedTab}
            <svelte:component this={selectedTab}/>
        {/if}
    </div>
</div>

<style>
    .dashboard {
        height: 100vh;
        min-width: 1200px;
        display: flex;
        background-color: rgb(255, 255, 255);
    }

    .leftShelf {
        flex: 0 0 auto;
        border-right: 1px solid rgb(231, 232, 234);
        border-top-color: rgb(231, 232, 234);
        border-bottom-color: rgb(231, 232, 234);
        border-left-color: rgb(231, 232, 234);
        background-color: rgb(255, 255, 255);
        transition: width 0.2s ease 0s;
        width: 60px;
    }


    nav {
        list-style: none;
        margin: 0px;
        padding: 8px 0px;
        position: relative;

    }
    .main {
        -webkit-box-flex: 1;
        flex-grow: 1;
        position: relative;
        overflow: auto;
    }

</style>