<script>    
    import {openModal} from "svelte-modals";
    import Modal from "$lib/components/Modal/Index.svelte"
    import {onMount} from "svelte";
    import { closeModal } from 'svelte-modals';
    import api from "$lib/api/api";
    export let skill;
    import {user} from "$lib/stores/user";
    import MeetingCards from "./MeetingCards/Index.svelte"

    let openedChapter;
    onMount(async () => {
        const response = await api.get(`/skills/${skill.id}.json`);
        skill.games = response.games;
        skill.meeting_cards = response.meeting_cards;
        
        const chapters = skill.games.map(game => game.chapter);
        if (chapters.length === 1) {
            openedChapter = chapters[0].id;
        }
    })

</script>


<div class="contents">


    <h1>
        {skill.title}
    </h1>
    <hr>

    <article class="description">
        {@html skill.description}
    </article>
    {#if skill.games}
    <ul class="clean-list chapters">
        {#each skill.games.map(game => game.chapter) || [] as chapter }
            {#if chapter}
                <li class="chapter" on:click={() => openedChapter = chapter.id}>{chapter.title}</li>
                {#if openedChapter === chapter.id}
                    <article>
                        {@html chapter.post}
                    </article>
                {/if}
            {/if }
        {/each}
    </ul>
    {/if}

    {#if skill.games}
        {#each skill.games as game}
            <div class="btn btn-primary" on:click={() => {
                closeModal()
                openModal(Modal, {
                    game: game,
                    preventOutClick: true
                })
            }}>Take Quiz: {game.title}</div>
        {/each}
    {/if}

    {#if $user && $user.admin}
        <MeetingCards {skill}></MeetingCards>
    {/if}
</div>


<style>

.delete-skill {
    position: absolute;
    top: 10px;
    right: 10px;
}
 .description{
    padding: 10px;
    background: #fafafa;
    text-align: center;
}
  .contents {
    min-width: 240px;
    /* padding: 16px; */
    /* max-width: 500px; */
    width: 80vw;
    padding: 4vw;
    border-radius: 10px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    pointer-events: auto;
    overflow-y: scroll;
    max-height: 90vh;
    position: relative;
  }

  .chapter {
      background: rgba(255, 203, 105, 0.884);
      padding: 14px;
      text-align: center;
  }

  .chapter article {
      padding: 22px;
  }
</style>
