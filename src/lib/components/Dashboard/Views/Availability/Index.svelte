<script>
    import Nav from "./Nav/Index.svelte";
    import Form from "./Form.svelte";
</script>

<div class="content">
    <Nav></Nav>

    <div class="wrapper">
        <p>Your Weekly Availability</p>
        <p>
            For sessions, availability during our peak hours of 9am - 6pm Monday through Thursday.
            <br>Pacific Daylight Time is especially useful as that's when many of our sessions are held.
        </p>
    
        <Form></Form>
    </div>
</div>

<style> 
    .wrapper {
        padding: 20px;
    }
</style>