<script>
    import {onMount} from "svelte";
    import Api from "$lib/api/api.js";
    import Nav from "./Nav.svelte";

    let surah = "1";
    let segments = [];
    let selected;
    onMount(() => {
        fetchSurah()
    })

    async function fetchSurah() {
        segments = await Api.get(`/quranflow/surah/${surah}.json`);
        console.log(segments);
    }

    function selectSegment(segment) {        
        if (selected === segment) {
            selected = null;
        } else {
            selected = segment;
        }
    }
</script>

<Nav></Nav>
<div class="wrapper">
    <div class="left-col">
        <div class="select-holder">
    
                <select class="surah-select" bind:value={surah} on:change={fetchSurah}>

                        <option value="1">1. الفاتحة</option>
                        <option value="2">2. البقرة</option>
                        <option value="3">3.  آل عمران</option>
                        <option value="4">4. النساء</option>
                        <option value="5">5. المائدة</option>
                        <option value="6">6. الأنعام</option>
                        <option value="7">7. الأعراف</option>
                        <option value="8">8. الأنفال</option>
                        <option value="9">9. التوبة</option>
                        <option value="10">10. يونس</option>
                        <option value="11">11. هود</option>
                        <option value="12">12. يوسف</option>
                        <option value="13">13. الرّعد</option>
                        <option value="14">14. إبراهيم</option>
                        <option value="15">15. الحجر</option>
                        <option value="16">16. النحل</option>
                        <option value="17">17. الإسراء</option>
                        <option value="18">18. الكهف</option>
                        <option value="19">19. مريم</option>
                        <option value="20">20. طه</option>
                        <option value="21">21. الأنبياء</option>
                        <option value="22">22. الحج</option>
                        <option value="23">23. المؤمنون</option>
                        <option value="24">24. النّور</option>
                        <option value="25">25. الفرقان</option>
                        <option value="26">26. الشعراء</option>
                        <option value="27">27. النمل</option>
                        <option value="28">28. القصص</option>
                        <option value="29">29. العنكبوت</option>
                        <option value="30">30. الروم</option>
                        <option value="31">31. لقمان</option>
                        <option value="32">32. السجدة</option>
                        <option value="33">33. الأحزاب</option>
                        <option value="34">34. سبإ</option>
                        <option value="35">35. فاطر</option>
                        <option value="36">36. يس</option>
                        <option value="37">37. الصّافّات</option>
                        <option value="38">38. ص</option>
                        <option value="39">39. الزمر</option>
                        <option value="40">40. غافر</option>
                        <option value="41">41. فصّلت</option>
                        <option value="42">42. الشورى</option>
                        <option value="43">43. الزخرف</option>
                        <option value="44">44. الدخان</option>
                        <option value="45">45. الجاثية</option>
                        <option value="46">46. الأحقاف</option>
                        <option value="47">47. محمد</option>
                        <option value="48">48. الفتح</option>
                        <option value="49">49. الحجرات</option>
                        <option value="50">50. ق</option>
                        <option value="51">51. الذاريات</option>
                        <option value="52">52. الطور</option>
                        <option value="53">53. النجم</option>
                        <option value="54">54. القمر</option>
                        <option value="55">55. الرحمن</option>
                        <option value="56">56. الواقعة</option>
                        <option value="57">57. الحديد</option>
                        <option value="58">58. المجادلة</option>
                        <option value="59">59. الحشر</option>
                        <option value="60">60. الممتحنة</option>
                        <option value="61">61. الصف</option>
                        <option value="62">62. الجمعة</option>
                        <option value="63">63. المنافقون</option>
                        <option value="64">64. التغابن</option>
                        <option value="65">65. الطلاق</option>
                        <option value="66">66. التحريم</option>
                        <option value="67">67. الملك</option>
                        <option value="68">68. القلم</option>
                        <option value="69">69. الحاقة</option>
                        <option value="70">70. المعارج</option>
                        <option value="71">71. نوح</option>
                        <option value="72">72. الجن</option>
                        <option value="73">73. المزمل</option>
                        <option value="74">74. المدثر</option>
                        <option value="75">75. القيامة</option>
                        <option value="76">76. الإنسان</option>
                        <option value="77">77. المرسلات</option>
                        <option value="78">78. النبأ</option>
                        <option value="79">79. النازعات</option>
                        <option value="80">80. عبس</option>
                        <option value="81">81. التكوير</option>
                        <option value="82">82. الانفطار</option>
                        <option value="83">83. المطففين</option>
                        <option value="84">84. الانشقاق</option>
                        <option value="85">85. البروج</option>
                        <option value="86">86. الطارق</option>
                        <option value="87">87. الأعلى</option>
                        <option value="88">88. الغاشية</option>
                        <option value="89">89. الفجر</option>
                        <option value="90">90. البلد</option>
                        <option value="91">91. الشمس</option>
                        <option value="92">92. الليل</option>
                        <option value="93">93. الضحى</option>
                        <option value="94">94. الإنشراح</option>
                        <option value="95">95. التين</option>
                        <option value="96">96. العلق</option>
                        <option value="97">97. القدر</option>
                        <option value="98">98. البينة</option>
                        <option value="99">99. الزلزلة</option>
                        <option value="100">100. العاديات</option>
                        <option value="101">101. القارعة</option>
                        <option value="102">102. التكاثر</option>
                        <option value="103">103. العصر</option>
                        <option value="104">104. الهمزة</option>
                        <option value="105">105. الفيل</option>
                        <option value="106">106. قريش</option>
                        <option value="107">107. الماعون</option>
                        <option value="108">108. الكوثر</option>
                        <option value="109">109. الكافرون</option>
                        <option value="110">110. النصر</option>
                        <option value="111">111. المسد</option>
                        <option value="112">112. الإخلاص</option>
                        <option value="113">113. الفلق</option>
                        <option value="114">114. الناس</option>
                </select>
                <hr>
            </div>

        <div class="summary">
            {#each segments as segment}
                <div class="segment">
                    <span class="verses" on:click={() => selectSegment(segment)} class:selected={selected && selected.id === segment.id}>
                        {segment.summary}
                    </span>
                </div>
            {/each}
        </div>
    </div>

</div>

<style>
.wrapper {
    display: flex;
}

.mini-header {
    max-width: 350px;
    display: block;
    margin: 0 auto;
}

img {
    vertical-align: middle;
}

.left-col {
    flex: 1 1 66%;
    max-width: 66%;
    padding: 3em;
    /* height: 74vh; */
    /* overflow-y: scroll; */
}

.select-holder {
    display: table;
    margin: 0 auto;
    max-width: 740px;
    font-size: 34px;
}

.select-holder hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eeeeee;
    box-sizing: content-box;
    height: 0;
}

.verses.selected {
    background-color: #b5ffea;
    display: block;
    border: 6px dashed #93e0ca;
    padding: 13px;
}
</style>
