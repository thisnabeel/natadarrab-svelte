<script>    

    import { closeModal } from 'svelte-modals';

    export let session;

</script>


<div class="contents">
    <div class="wrapper">
        <div class="left">
            <div class="top">
                <h2 class="">{session.category}:<br> {session.title}</h2>
            </div>
            <br>
            <div class="appointment">
                <div class="time"><div class="clock"><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#424750" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path></svg></div>
                <div class="text"><p>{session.time}</p></div></div>
            </div>
        </div>
    </div>
</div>


<style>

  .contents {
    min-width: 240px;
    /* padding: 16px; */
    /* max-width: 500px; */
    width: 80vw;
    padding: 1vw;
    border-radius: 10px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    pointer-events: auto;
    overflow-y: scroll;
    max-height: 90vh;
  }

  .wrapper {
    display: flex;
    border: 0px solid rgb(236, 242, 254);
}

.left {
    
    border-right: 1px solid rgb(231, 232, 234);
    border-top-color: rgb(231, 232, 234);
    border-bottom-color: rgb(231, 232, 234);
    border-left-color: rgb(231, 232, 234);
    width: 395px;
    flex-shrink: 0;
    max-height: calc(100vh - 64px);
    padding: 32px 0px 96px 32px;
    box-sizing: border-box;
    overflow-y: scroll;

}
.top h2 {
    
    margin: 0px;
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.3;
    font-family: "Avenir Next", sans-serif;
    color: rgb(35, 39, 45);

}

.time {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 8px;
}

.clock {
    line-height: 1;
    width: 16px;
    height: 16px;
    margin-right: 8px;
}

.text {
    display: flex;
    gap: 8px;
}

.text p {
    margin: 0px;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    font-family: "Avenir Next", sans-serif;
    color: rgb(35, 39, 45);
}
</style>
