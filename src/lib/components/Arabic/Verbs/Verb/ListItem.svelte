<script>
	import API from '$lib/api/api';
	import save from '$lib/functions/debounce';

	export let verb;

	async function updateVerb() {
		const res = await save(`/verbs/${verb.id}`, verb);
		console.log({ res });
	}
</script>

<div class="row">
	<div class="col-lg-4">
		<span style="font-size: 34px">
			{verb.v_word}
		</span>
	</div>
	<div class="col-lg-8">
		{verb.v_translation}
		<div class="row">
			<div class="col-md-4">
				<label for="">Past English Base:</label>
				<input
					type="text"
					class="form-control"
					bind:value={verb.past_english_base}
					on:keyup={updateVerb}
				/>
			</div>
			<div class="col-md-4">
				<label for="">Present English Base:</label>
				<input
					type="text"
					class="form-control"
					bind:value={verb.present_english_base}
					on:keyup={updateVerb}
				/>
			</div>
			<div class="col-md-4">
				<label for="">Infinitive English Base:</label>
				<input
					type="text"
					class="form-control"
					bind:value={verb.infinitive_english_base}
					on:keyup={updateVerb}
				/>
			</div>
		</div>
	</div>
</div>
