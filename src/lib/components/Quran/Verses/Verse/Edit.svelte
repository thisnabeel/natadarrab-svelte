<script>
	import VerseSliced from './VerseSliced.svelte';
	import { openModal } from 'svelte-modals';
	import Modal from '$lib/components/Modal/Index.svelte';
	import { onMount } from 'svelte';
	import { closeModal } from 'svelte-modals';
	import Options from './Options.svelte';
	export let verse;

	let selectedSlice;
	let selectedSliceIndex;

	function selectSlice(payload) {
		selectedSlice = payload.slice;
		selectedSliceIndex = payload.index;
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

	function testQuiz() {
		openModal(Modal, {
			iraaber_game_verse: verse.item.ref,
			preventOutClick: false
		});
	}

	function saveManifest(payload) {
		console.log({ payload });
		console.log({ selectedSlice });
		selectedSlice.dataset.manifest = JSON.stringify(payload);
		selectedSlice.dataset.wordType = payload.word_type;
	}
</script>

<div class="verse">
	<div class="ref" class:ready={verse.item.ready} class:unready={!verse.item.ready}>
		{verse.item.ref}
		<div class="status">
			<span
				class="btn"
				class:btn-outline-success={!verse.item.ready}
				class:btn-success={verse.item.ready}>Ready</span
			>
			<span
				class="btn"
				class:btn-outline-danger={verse.item.ready}
				class:btn-danger={!verse.item.ready}>Unready</span
			>
		</div>
	</div>

	<div class="content">
		<div>
			{verse.version}
			<div class="btn btn-warning float-end" on:click={testQuiz}>Test Quiz</div>
		</div>

		<div class="iraab" style="padding: 1em;">
			<VerseSliced {selectSlice} lineHeight={'2.5em'} html={verse.iraab} />
		</div>

		{#if selectedSlice}
			<Options {saveManifest} />
			<div class="slice_details">
				<table class="table">
					<thead>
						<td>Name</td>
						<td>Value</td>
					</thead>
					<tbody>
						{#each getAttributesAsArray(selectedSlice) as attr}
							<tr>
								<td>{attr.name}</td>
								<td>
									{#if typeof attr.value === 'object'}
										{#each Object.entries(attr.value) as [key, value]}
											<div>{key}: {value}</div>
										{/each}
									{:else}
										{attr.value}
									{/if}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}
	</div>
</div>

<style>
	.verse {
		margin: 14px;
		background-color: #f4f4f4;
	}

	.ref {
		font-size: 34px;
		position: relative;
	}

	.ref .status {
		position: absolute;
		right: 10px;
		top: 10px;
	}

	.ref {
		padding: 0.4em;
	}

	.ref.ready {
		background-color: #aeff86;
	}

	.ref.unready {
		background-color: #ffc8c8;
	}

	:global([data-word-type='Ism']) {
		background-color: #aeff86;
	}

	:global([data-word-type='Fil']) {
		background-color: #f9dcff;
	}
</style>
