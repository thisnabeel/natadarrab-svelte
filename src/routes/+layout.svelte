
<script>
  import '../app.css';
  import "sweetalert2/dist/sweetalert2.min.css";
	import { fade } from 'svelte/transition';
	import { Modals, closeModal } from 'svelte-modals';	// 

</script>


<div>
    <slot></slot>
</div>
<Modals>
  <div
    slot="backdrop"
	class="backdrop"
	transition:fade
    on:click={closeModal}
  />
</Modals>

<style>
    div {
        font-family: 'Poppins', sans-serif;
    }
</style>