<script>
	// @ts-nocheck

	import API from '$lib/api/api';
	import { onMount } from 'svelte';
	import Swal from 'sweetalert2';

	let words = [];
	let selected = [];
	let fala_mode = false;
	let tags = {
		I: [],
		II: ['Shaddah in the middle', 'Present begins with YU'],
		III: ['Present begins with YU'],
		IV: ['Present begins with YU'],
		V: ['Shaddah in the middle', 'Present begins with YA'],
		VI: ['Present begins with YA'],
		VII: ['Starts with IN', 'Starts with YAN', 'Present begins with YA'],
		VIII: ['Present begins with YA'],
		IX: ['Present begins with YA'],
		X: ['Present begins with YA']
	};
	let tagsToFind = [];

	$: litForms = highlightTags(...tagsToFind);

	function highlightTags(...tagsToFind) {
		if (tagsToFind.length < 1) return [];
		let matchingKeys = [];

		for (let key in tags) {
			if (tagsToFind.every((tag) => tags[key].includes(tag))) {
				matchingKeys.push(key);
			}
		}

		console.log(matchingKeys);
		return matchingKeys;
	}

	onMount(() => {
		getExamples();
	});

	async function getExamples() {
		const examples = await API.get('/words/forms/sample.json');
		words = examples;
		selected = [];
		tagsToFind = [];
	}

	function selectAnswer(passing, index = -1) {
		selected = [...selected, index];

		if (passing) {
			Swal.fire('Perfect!', 'You Passed This Quiz', 'success');
			getExamples();
		}
	}

	function starter(html) {
		// Create a temporary DOM element
		const temp = document.createElement('div');
		temp.innerHTML = html;

		// Find the span with class 'auu'
		const auuSpan = temp.querySelector('.auu');

		if (auuSpan) {
			// Get the text content of the span
			const text = auuSpan.textContent;

			// Extract the first three characters
			const firstThree = text.slice(0, 2);

			return firstThree;
		} else {
			return null; // or return an appropriate value if the span is not found
		}
	}
</script>

<h1>Sarf</h1>

<div
	class="fa fa-refresh text-center"
	style="font-size: 34px; display:block; color: #ccc"
	on:click={getExamples}
/>
{#each words as word}
	<div class="examples">
		{#each word.examples as example}
			<div class="example">
				<div class="ayah_html">
					{@html example.ayah_html}
				</div>
			</div>
		{/each}
	</div>
	<div class="parts">
		<!-- <div class="btn btn-outline-warning">Starter: {starter(word.examples[0].ayah_html)}</div> -->
		<div class="part-2">
			<ul>
				{#each [...new Set(Object.values(tags).flat())] as tag}
					<li
						class:litTag={tagsToFind.includes(tag)}
						on:click={() => {
							const tagSet = new Set(tagsToFind);

							if (tagSet.has(tag)) {
								tagSet.delete(tag);
							} else {
								tagSet.add(tag);
							}

							tagsToFind = Array.from(tagSet);
						}}
					>
						{tag}
					</li>
				{/each}
			</ul>
		</div>
		<div class="part-1">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<i
				class="fa"
				class:fa-toggle-on={!fala_mode}
				class:fa-toggle-off={fala_mode}
				on:click={() => {
					fala_mode = !fala_mode;
				}}
			/>
			<div class="combos clean-list">
				{#each word.forms_past_present as form, index}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<li
						class:litForms={litForms.includes(form.form)}
						class:wrong={selected.includes(index)}
						class:correct={form.form === word.form && selected.includes(index)}
						on:click={() => selectAnswer(form.form === word.form, index)}
					>
						{#if !fala_mode}
							<div class="past_present">
								{form.products[0][0]} / {form.products[1][0]}
							</div>
							<div class="masdar">
								{form.products[2][0]}
							</div>
						{:else}
							<div class="past_present">
								{form.products[0][1]} / {form.products[1][1]}
							</div>
							<div class="masdar">
								{form.products[2][1]}
							</div>
						{/if}
					</li>
				{/each}
			</div>
		</div>
	</div>
{/each}

<style>
	.combos {
		text-align: center;
		direction: rtl;
	}
	.combos > li {
		display: inline-block;
		padding: 10px;
		margin: 10px;
		border: 1px solid #ccc;
		border-radius: 10px;
		font-size: 28px;
	}

	.example {
		font-size: 34px;
		/* line-height: 24px; */
		text-align: center;
		margin: 1.5em 0;
	}

	.masdar {
		background-color: #f3f3f3;
		border-radius: 10px;
		margin-top: 10px;
		font-size: 26px;
		color: #874d9f;
	}

	.wrong {
		background-color: #ff6a6a;
	}

	.correct {
		background-color: #b4ff5f;
	}

	.litForms,
	.litTag {
		background-color: #faff9c;
	}
</style>
