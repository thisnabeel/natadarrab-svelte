<script>
    export let gif;
    export let remove;
    export let update;
</script>

<li class="gif">
    <div class="row">
        <div class="col-lg-4">
            <img src={gif}  /> 
        </div>
        <div class="col-lg-8">
            <input class="form-control" bind:value={gif} on:keyup={() => {
                update(gif)
            }}/>
            <div class="btn btn-outline-danger" on:click={remove}><span class="fa fa-trash"></span></div>
        </div>
    </div>
</li>

<style>

</style>