<script>
    import Box from "../Boxes/Box.svelte"
    export let verse;
    export let index;
 

    $: hebrew = verse.ref.split(":")[0] < 40;

    let hoveredIndex = -1;

    function setHovered(payload){
        hoveredIndex = payload;
    }

    function unHover() {
        hoveredIndex = -1;
    }
</script>

<div class="original" 
    class:hebrew={hebrew}
    class:unhovered={(hoveredIndex > -1) && hoveredIndex !== index} 
    class:hovered={(hoveredIndex > -1) && hoveredIndex === index} 
>
    <span class="ref">{verse.ref.split(":").slice(1, 3).join(':')}</span>
    <div class="boxes">
        {#each verse.boxes || [] as box, index}
            <Box {box} {hebrew} hover={setHovered} unHover={unHover} {hoveredIndex}  {index}></Box>
        {/each}
    </div>
</div>
<style>



    .original {
        display: flex;
    }

    .original .boxes {
        padding: 20px;
        background: rgba(255, 255, 255, 0.404);
        border-radius: 10px;
    }
    .original .ref {
        width: 70px;
        text-align: center;
        margin: 0 10px;
        height: fit-content;
    }

    .hebrew {
    direction: rtl;
    text-align: right;
    font-family: system-ui;
    }

.original .content {
    font-size: 28px;
}

.original :global(a) {
    text-decoration: none;
    color: #000;
}

</style>