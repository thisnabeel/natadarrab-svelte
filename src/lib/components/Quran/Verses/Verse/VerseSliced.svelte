<script>
	import { afterUpdate } from 'svelte';

	afterUpdate(() => {
		sanitizeVerse();
	});

	let verseBox;
	let selectedSlice;
	let selectedSliceIndex;
	export let tips = true;
	export let selectSlice;
	export let clickable = true;
	export let fontSize = '32px';
	export let lineHeight = '3.5em';
	export let textAlign = 'right';
	export let html;
	const ism_tagger = [
		{
			category: 'specificity',
			key: 'Penentuan',
			options: [
				{
					query: ['معرفة'],
					tag: 'definite'
				},
				{
					query: ['نكرة'],
					tag: 'indefinite'
				}
			]
		},
		{
			category: 'case',
			key: 'Hukum I’rab',
			options: [
				{
					query: ['مرفوع'],
					tag: "Raf'a"
				},
				{
					query: ['منصوب'],
					tag: 'Nasb'
				},
				{
					query: ['مجرور'],
					tag: 'Jarr'
				}
			]
		},
		{
			category: 'number',
			key: 'al-‘dad',
			options: [
				{
					query: ['مفرد'],
					tag: 'singular'
				},
				{
					query: ['جمع'],
					tag: 'plural'
				}
			]
		}
	];

	const fil_tagger = [
		{
			category: 'tense',
			key: 'al-Fi‘l Man Hith al-Zaman (Sorof (Fi‘l))',
			options: [
				{
					query: ['فعل ماض'],
					tag: 'past'
				},
				{
					query: ['فعل مضارع'],
					tag: 'present'
				},
				{
					query: ['فعل أمر'],
					tag: 'command'
				}
			]
		}
	];

	function sanitizeVerse() {
		const spans = verseBox.querySelectorAll('.verse span');
		// console.log('starting', spans);
		spans.forEach(function (span) {
			// console.log({ span });
			// Check if the content of the span includes a specific text
			if (span.textContent.includes('ﻴ')) {
				// span.style.color = 'red';
				span.style.display = 'inherit';
				// Add more styles as needed
			}
		});
	}

	function handleClick(event) {
		if (!clickable) return;
		selectedSlice = event.target.closest('.sliced');
		console.log({ selectedSlice });
		// selectedSlice.classList.toggle('selected', true);

		const words = verseBox.getElementsByClassName('sliced');
		const index = Array.from(words).indexOf(selectedSlice);
		// console.log({ index });
		selectedSliceIndex = index;
		// console.log('clicked', blocks[index]);

		for (let i = 0; i < words.length; i++) {
			const word = words[i];
			if (i !== selectedSliceIndex) {
				word.classList.toggle('selected', false);
				const elementsToRemove = word.getElementsByClassName('tip');

				// Remove each child with the specified class
				while (elementsToRemove.length > 0) {
					elementsToRemove[0].remove();
				}
			} else {
				word.classList.toggle('selected', true);

				// Create a new span element
				const newSpan = document.createElement('aside');
				newSpan.classList.add('tip');

				// Set content or attributes for the new span
				newSpan.textContent = getTip(word);

				if (tips) {
					// Append the new span element to the parent
					word.appendChild(newSpan);
				}
			}
		}

		let triggerType = '';
		try {
			const meta = getAttributesAsArray(selectedSlice).find((m) => m.name === 'class').value;
			if (meta.includes('ism')) {
				triggerType = 'non_verbs';
			} else {
				triggerType = 'verbs';
			}
		} catch (error) {}

		selectSlice({
			slice: selectedSlice,
			index: selectedSliceIndex,
			triggerType: triggerType
		});

		function getTip(word) {
			const attrs = getAttributesAsArray(word);
			console.log({ attrs });
			let tagger;
			let fil = false;

			const classList = String(word.classList);
			if (classList.includes('ism')) {
				tagger = ism_tagger;
			} else if (classList.includes('fil')) {
				tagger = fil_tagger;
				fil = true;
			}
			return analyze(attrs, tagger, fil);
		}

		function analyze(attrs, tagger, fil) {
			let output = [];

			let key = 'data-dependencies';
			if (fil) {
				key = 'data-trigger-verb-info';
			}
			const attr = attrs.find((a) => a.name === key);

			if (attr) {
				for (let rule of tagger) {
					const val = attr.value[rule.key];
					console.log(rule.key, { rule });
					console.log(val);
					if (val) {
						for (let option of rule.options) {
							if (option.query.some((element) => val.includes(element))) output.push(option.tag);
						}
					}
				}
			}
			return output.join(' - ');
		}

		function getAttributesAsArray(element) {
			const attributesArray = Array.from(element.attributes);

			const attributesObjectArray = attributesArray.map((attribute) => {
				let value = attribute.value;

				if (value.indexOf('{') === 0) {
					value = value.replaceAll('=>', ':');
					console.log({ value });
					const jsonParsed = JSON.parse(value);
					console.log({ jsonParsed });
					value = jsonParsed;
				}

				return {
					name: attribute.name,
					value: value
				};
			});

			console.log({ attributesObjectArray });

			return attributesObjectArray;
		}
		// if (gradedElement) {
		// 	// Log information to the console or perform actions
		// 	// console.log('Clicked on a graded block:', gradedElement);
		// 	if (verseHTML) {
		// 		const words = verseHTML.getElementsByClassName('sliced');
		// 		const index = Array.from(words).indexOf(gradedElement);
		// 		console.log({ index });
		// 		selectedGradedBlockIndex = index;
		// 		console.log('clicked', blocks[index]);

		// 		for (let i = 0; i < words.length; i++) {
		// 			const word = words[i];
		// 			if (i !== selectedGradedBlockIndex) {
		// 				word.classList.toggle('selectedGradedBlock', false);
		// 			} else {
		// 				word.classList.toggle('selectedGradedBlock', true);
		// 			}
		// 		}
		// 	}
		// }
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="verse"
	bind:this={verseBox}
	on:click={handleClick}
	style="font-size:{fontSize};line-height:{lineHeight};text-align:{textAlign}"
>
	{@html html}
</div>

<style>
	.verse {
		font-family: 'me_quran2' !important;
		direction: rtl;
	}

	.verse :global(.wordBlock) {
		display: inline-block;
		margin: 0;
		padding: 0;
		font-family: 'me_quran2' !important;
	}

	.verse :global(.sliced) {
		display: inline-block;
		margin: 0;
		padding: 0;
		cursor: pointer;
		font-size: inherit;
		line-height: inherit;
		font-family: 'me_quran2' !important;
		position: relative;
	}

	.verse :global(.selected.sliced) {
		color: #ca56ff;
		border-bottom: 1px dashed;
		height: 87px;
		padding: 0;
	}
	.verse :global(.sliced span) {
		display: initial;
	}

	.verse :global(.sliced span[id='char_614']) {
		display: inherit;
	}
	.verse :global(.sliced.graded) {
		padding: 0px 10px !important;
		border-radius: 10px;
		margin: 0 -5px;
	}

	.verse :global(.sliced.incorrect) {
		background: #ffdcdc;
	}

	.verse :global(.sliced.correct) {
		background: #daffa2;
	}

	.verse :global(.sliced.graded + span) {
		z-index: 999999;
		position: relative;
		right: -4px;
	}

	.verse :global(.selectedGradedBlock) {
		border-bottom: 6px dashed purple !important;
	}

	.verse :global(.tip) {
		position: absolute;
		font-size: 12px;
		background: #fff;
		line-height: normal;
		width: max-content;
		text-align: center;
		bottom: -31px;
	}
</style>
