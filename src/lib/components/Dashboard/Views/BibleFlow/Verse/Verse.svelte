<script>
    import OriginalVerse from "./OriginalVerse.svelte"

    export let verse;
    export let index;

    let hoveredIndex = -1;

    function setHovered(payload){
        hoveredIndex = payload;
    }

    function unHover() {
        hoveredIndex = -1;
    }
</script>

<li class="verse">
    <div class="english">
        <span class="ref">{verse.ref.split(":").slice(1, 3).join(':')}</span>
        <span class="content">{verse.english}</span>
    </div>

    <OriginalVerse {verse} hover={setHovered} unHover={unHover} {hoveredIndex}  {index}></OriginalVerse>
</li>
<style>
    .english, .original {
        display: flex;
    }
    .english .ref, .original .ref {
        width: 70px;
        text-align: center;
        margin: 0 10px;
        height: fit-content;
    }
.verse {
    padding: 8px;
    margin: 4px;
    /* background-color: rgb(221, 245, 255); */

    background-color: rgb(255 243 234);
    border-radius: 10px;
    line-height: initial;
}

.hebrew {
    direction: rtl;
    text-align: right;
}

.verse .ref {
    background: #c1c1ff54;
    color: #040404;
    padding: 4px 16px;
    border-radius: 10px;
}


.bookSelector {
    width: fit-content;
    display: block;
    margin: 0 auto;
    font-size: 34px;
}

.selectors {
    display: flex;
    width: max-content;
    margin: 0px auto;
}

.selectors select {
    display: inline-block;
}
</style>