<script>
    export let box;
    export let index;
    export let hover;
    export let unHover;
    export let hoveredIndex;
</script>

<div class="box" 
    class:unhovered={(hoveredIndex > -1) && hoveredIndex !== index} 
    class:hovered={(hoveredIndex > -1) && hoveredIndex === index} 
>
    <span class="word" 
        on:mouseover={() => hover(index)}
        on:mouseleave={unHover}
    >{box.word.replace(/[\u0591-\u05AF]/g, '')}</span>
    <span class="english">{box.english}</span>
    <span class="transliteration">{box.transliteration}</span>
</div>

<style>

    .unhovered {
        color: rgb(221, 221, 221);
    }

    .box .english {
        display: none;
        position: absolute;
        bottom: -40px;
        background: #fff;
        padding: 10px;
        width: max-content;
        left: 0;
    }

    .box .transliteration {
        display: none;
        position: absolute;
        top: -40px;
        background: #fff;
        padding: 10px;
        width: max-content;
        left: 0;
    }
    .box:hover {
        background: #fff;
        z-index: 999999999;
    }
    .box:hover .english { 
        display:block
    }

    .box:hover .transliteration { 
        display:block;
        background: rgb(255, 215, 255)
    }

    .word {
            font-size: 28px;
    }
    .box {
        display: inline-block;
        margin-right: 10px;
        margin-left: 0;
        position: relative;
        /* z-index: 999999; */
        z-index: 999999999;
    }

    .hebrew.box {
        margin-left: 10px;
        margin-right: 0;
    }
</style>