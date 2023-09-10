<script>
  import { closeModal } from 'svelte-modals';
  import OutClick from 'svelte-outclick';
  import {onMount} from "svelte";
  import { onBeforeClose } from 'svelte-modals'
  import Skill from "$lib/components/Skills/Skill/Modal.svelte"
  import Game from "$lib/components/Games/Game/Modal.svelte"
  import Session from "$lib/components/Sessions/Session/Modal.svelte"

  // provided by <Modals />
  export let isOpen;
  export let skill;
  export let game;
  export let session;
  export let preventOutClick = false;

    onMount(async function(){
        document.body.style["overflow-y"] = 'hidden';
    })

    onBeforeClose(() => {
        document.body.style["overflow-y"] = 'initial';
    })

    const handleOutsideClick = () => {
      if (!preventOutClick) {
        closeModal()
      }
    }

</script>

{#if isOpen}
  <div role="dialog" class="modal" class:game={game != null} on:click|stopPropagation>
    <div class="barrier" on:click|stopPropagation>
    <OutClick on:outclick={handleOutsideClick}>
          {#if skill}
            <Skill {skill}></Skill>
          {/if}

          {#if game}
            <Game {game}></Game>
          {/if}

          {#if session}
            <Session {session}></Session>
          {/if}
    </OutClick>
    </div>
  </div>
{/if}

<style>

  .modal.game {
    z-index: 9999;
    overflow-y: hidden;
    
  }

  .modal.game :global(.contents) {
    border-radius: 0px !important;
    min-width: 240px;
    height: 100vh;
    width: 100vw;
    padding: 8vw;
    border-radius: 10px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    pointer-events: auto;
  }

    [role="dialog"] {
        background: rgba(0,0,0,0.5);
    }

  .modal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    /* allow click-through to backdrop */
    /* pointer-events: none; */
  }


</style>