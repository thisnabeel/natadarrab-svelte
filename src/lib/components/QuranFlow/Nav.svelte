<script>
	import { goto } from '$app/navigation';
	export let listMode = false;

	export let surah;
	export let fetchSurah;
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Search from '../Main/Search/Search.svelte';
	import { segments, editMode, flow, selectedSurah } from '$lib/components/QuranFlow/store';
	import { user } from '$lib/stores/user';

	let searchInput = '';

	let searchQuery = '';

	onMount(() => {
		if ($page.params.verses) {
			const ref_verses = $page.params.verses;
			const ref_surah = ref_verses.split(':')[0];
			surah = ref_surah;
			fetchSurah(surah);
			selectedSurah.set(surah);
		} else {
			fetchSurah('1');
			selectedSurah.set(surah);
		}
	});

	function visitSurah(s) {
		let path = '/';
		let ladder = ['quranflow', s];
		if ($page.params.language) ladder.push($page.params.language);
		path += ladder.join('/');
		goto(path);
		fetchSurah(s);
		selectedSurah.set(s);
	}

	function expandRange(rangeString) {
		const [start, end] = rangeString.split('-').map(Number);
		const [startLine, startColumn] = start.split(':').map(Number);
		const [endLine, endColumn] = end.split(':').map(Number);

		const result = [];

		for (let line = startLine; line <= endLine; line++) {
			for (
				let column = line === startLine ? startColumn : 1;
				column <= (line === endLine ? endColumn : Infinity);
				column++
			) {
				result.push(`${line}:${column}`);
			}
		}

		return result;
	}

	async function deliver(payload) {
		switch (payload.action) {
			case 'verse':
				// If pressed up
				const verse = payload.query;
				const s = verse.split(':')[0];
				surah = s;
				await visitSurah(verse);

				return;
			case 40:
				// If pressed down

				return;
			default:
				return;
		}
	}
</script>

<div class="top-nav">
	<div class="head">
		<span on:click={() => flow.set(!$flow)}
			>Qur'an<span class="gray" class:flow={$flow}>Flow</span></span
		>
		<!-- <img class="mini-header" src="/quranflow.png"> -->
		<div class="select-holder">
			<select
				class="surah-select"
				bind:value={surah}
				on:change={() => {
					visitSurah(surah);
				}}
			>
				<option value="1">1. الفاتحة</option>
				<option value="2">2. البقرة</option>
				<option value="3">3. آل عمران</option>
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

			{#if $user && $user.admin}
				<div
					class="btn"
					class:btn-info={$editMode}
					class:btn-outline-info={!$editMode}
					on:click={() => {
						editMode.set(!$editMode);
					}}
				>
					<i class="fa fa-pen" />
				</div>

				<div
					class="btn"
					class:btn-warning={listMode}
					class:btn-outline-warning={!listMode}
					on:click={() => {}}
				>
					<i class="fa fa-list" />
				</div>
			{/if}
			<hr />
			<div class="search">
				<!-- <input type="text" class="form-control" bind:value={searchQuery} />
				{#if searchQuery.length > 0}
					<div class="btn btn-outline-info" on:change={search}><i class="fa fa-search" /></div>
				{/if} -->
				<Search {deliver} {searchInput} padding={10} />
			</div>
		</div>
		<!-- <div class="arrow-space"></div>
            <div class="left-arrow arrow"><div class=""><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#626872" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg></div></div>
            <div class="arrow-space"></div>
            <div class="right-arrow arrow"><div class=""><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#626872" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg></div></div> -->
	</div>

	<div class="hori-divider" />
</div>

<style>
	.select-holder {
		display: flex;
		margin: 0 auto;
		max-width: 740px;
		font-size: 34px;
		padding-left: 20px;
		border-left: 2px solid #eee;
		margin-left: 20px;
	}

	.select-holder hr {
		margin-top: 20px;
		margin-bottom: 20px;
		border: 0;
		border-top: 1px solid #eeeeee;
		box-sizing: content-box;
		height: 0;
	}
	.mini-header {
		max-width: 180px;
	}
	.top-nav {
		padding: 16px 16px 16px 40px;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		-webkit-box-pack: justify;
		justify-content: space-between;
		background-color: rgb(255, 255, 255);
		border-bottom: 1px solid rgb(231, 232, 234);
		border-top-color: rgb(231, 232, 234);
		border-right-color: rgb(231, 232, 234);
		border-left-color: rgb(231, 232, 234);
	}

	.top-nav .head {
		height: 48px;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		font-weight: 700;
		font-size: 1.5rem;
		line-height: 1.4;
		font-family: 'Avenir Next', sans-serif;
		margin-right: 16px;
		cursor: pointer;
	}

	.left-arrow {
		cursor: pointer;
		box-sizing: border-box;
		border: 1px solid transparent;
		border-radius: 4px;
		padding: 4px;
	}

	.left-arrow > div {
		line-height: 0;
		width: 20px;
		height: 20px;
	}

	.arrow-space {
		padding-left: 4px;
		padding-right: 4px;
	}

	.right-arrow {
		cursor: pointer;
		box-sizing: border-box;
		border: 1px solid transparent;
		border-radius: 4px;
		padding: 4px;
	}

	.right-arrow > div {
		line-height: 0;
		width: 20px;
		height: 20px;
	}

	.hori-divider {
		padding-left: 16px;
		margin-top: -16px;
		margin-bottom: -16px;
		height: 74px;
		border-right: 1px solid rgb(231, 232, 234);
		border-top-color: rgb(231, 232, 234);
		border-bottom-color: rgb(231, 232, 234);
		border-left-color: rgb(231, 232, 234);
	}

	.arrow:hover {
		background-color: rgb(250, 250, 250);
		border-color: rgb(231, 232, 234);
	}

	.select-holder {
		display: inline-flex;
		height: 100%;
		margin: 0 auto;
		max-width: 740px;
		font-size: 34px;
		padding-left: 20px;
		border-left: 2px solid #eee;
		margin-left: 20px;
		z-index: 999999;
	}

	.gray {
		color: #ccc;
	}

	.gray.flow {
		color: #000;
	}
</style>
