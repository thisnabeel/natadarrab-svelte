<script>
    import {openModal} from "svelte-modals";
    import Modal from "$lib/components/Modal/Index.svelte";
    export let item;
</script>

<div class="item" on:click={() => {
    openModal(Modal, {
        session: item
    })
}}>
    <div class="flex">
        <div class="content">
            <div class="details">
                <h5>{item.card.title}</h5>
                <div class="more">
                    <div class="timeslot">
                       <i class="fa fa-clock" style="margin-right: 10px"></i>{item.time}
                    </div>
                    <div class="category">
                        <span></span>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .item {
        width: 100%;
        border-radius: 4px;
        margin-bottom: 16px;
        box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
        background-color: rgb(255, 255, 255);
        box-sizing: border-box;
        padding: 16px;
        border: 0px solid transparent;
    }

    .content {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-flex: 1;
        flex-grow: 1;
    }

    .details {
        -webkit-box-flex: 1;
        flex-grow: 1;
        padding: 0px 8px;
        box-sizing: border-box;
    }

    h5 {
        margin: 0px 0px 8px;
        font-weight: 600;
        font-size: 1rem;
        font-family: "Avenir Next", sans-serif;
        color: rgb(35, 39, 45);
        line-height: 1;
    }

    .more, .timeslot {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }

    .category {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        margin-left: 8px;
    }

    .more {
        margin: 0px 0px 0px 4px;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.5;
        font-family: "Avenir Next", sans-serif;
        color: rgb(35, 39, 45);
        /* max-width: 100px; */
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>