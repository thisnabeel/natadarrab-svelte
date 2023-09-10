<script>
    import {openModal} from "svelte-modals";
    import Modal from "$lib/components/Modal/Index.svelte"
    import Api from "$lib/api/api"
    export let set;

    import {user} from "$lib/stores/user";

    let bankSkillsChanged = 0; // Variable to track changes in $user.bank_skills

    // Function to increment the change counter
    const incrementChangeCounter = () => {
        bankSkillsChanged += 1;
    };

    async function addSkillToSet() {

        const newSkill = await Api.post("/skills.json", {                          
            title: "NewSkill",                                
            description: "",                               
            position: set.skills[set.skills.length - 1],                                                 
            subject: set.title,
            skills_set_id: set.id
        })
        set.skills = [...set.skills, newSkill]

    }

    async function removeSkill(skill) {
        const response = await Api.delete(`/skills/${skill.id}.json`);
        console.log(response);
        set.skills = set.skills.filter(s => s.id !== skill.id);
    }

    async function moveSkill(skill, direction) {
        const response = await Api.post(`/skills/move.json`, {
            skill_id: skill.id,
            direction: direction,
        });

        // const arrayToBeRearranged = [...set.skills];

        response.forEach(ns => set.skills.filter(s => s.id === ns.id)[0].position = ns.position);

        set.skills = set.skills.sort((a, b) => {
            if (a.position < b.position) return -1;
            if (a.position > b.position) return 1;
            return 0;
        });
        // console.log(response);
    }

    // $: passing = checkPassing(skill);
    
    // function checkPassing(skill) {
    //     if (!$user || !$user.bank_skills) return false;
    //     // Increment the change counter when $user.bank_skills changes
    //     $: {
    //         incrementChangeCounter();
    //     }
    //     const bs = $user.bank_skills.filter(b => b.skill_id === skill.id);
    //     if (bs.length > 0) {
    //     if (bs[0].status > 0) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    //     } else {
    //     return false;
    //     }
    // }

</script>

<div class="set">
    <div class="head">
        <div class="details">
            <h5 class="title">{set.title}</h5>
            <h6 class="target">Target Pass Date: May 26th  </h6>
        </div>
    </div>

    <div class="skills">
        {#each set.skills as skill}
            <div class="skill" class:passing={$user.bank_skills.filter(bs => bs.skill_id === skill.id && bs.status === 100).length > 0}>
                <div class="content">
                    <span on:click={() => openModal(Modal, {
                        skill: skill
                    })}>
                    <div class="check text-center">
                        {#if $user.bank_skills.filter(bs => bs.skill_id === skill.id && bs.status === 100).length > 0 }
                            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="#07D57E" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
                        {:else}
                            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="#A0A4AC" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>

                            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="#A0A4AC" viewBox="0 0 256 256"><path d="M184.13,147.7a8.08,8.08,0,0,0-2.54,7.89l13.52,58.54a8,8,0,0,1-11.89,8.69l-51.1-31a7.93,7.93,0,0,0-8.24,0l-51.1,31a8,8,0,0,1-11.89-8.69l13.52-58.54a8.08,8.08,0,0,0-2.54-7.89L26.76,108.35A8,8,0,0,1,31.3,94.28l59.46-5.14a8,8,0,0,0,6.67-4.88L120.66,28.9a8,8,0,0,1,14.68,0l23.23,55.36a8,8,0,0,0,6.67,4.88l59.46,5.14a8,8,0,0,1,4.54,14.07Z" opacity="0.2"></path><path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path></svg> -->
                        {/if}
                    </div>
                    <h6 class="title">{skill.title}</h6>
                    </span>
                    {#if $user && $user.admin}
                        <div class="arrows">
                            <div class="i fa fa-arrow-left" on:click={() => moveSkill(skill, "left")}></div>
                            <div class="i fa fa-arrow-right" on:click={() => moveSkill(skill, "right")}></div>
                        </div>
                        <div class="delete-skill hover-gray" on:click={() => removeSkill(skill)}>
                            <div class="fa fa-times"></div>
                        </div>
                    {/if}
                </div>
                
            </div>
        {/each}
        
        {#if $user && $user.admin}
            <div class="skill light-hvr" on:click={addSkillToSet}>
                    <div class="content ">
                        <i class="fa-2x fa fa-plus"></i>
                    </div>
            </div>
        {/if}
    </div>
</div>

<style>

    .passing {
        background: #e2ffe3;
    }
    .set {
        margin: 2em;
    }

    .head {
        border: 1px solid rgb(231, 232, 234);
        padding: 16px;
        background-color: rgb(255, 255, 255);
        margin-bottom: 16px;
        border-radius: 8px 8px 0px 0px;
        position: relative;
    }
    .skills {
        border-bottom: 1px solid rgb(231, 232, 234);
        border-left: 1px solid rgb(231, 232, 234);
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        border-top-color: rgb(231, 232, 234);
        border-right-color: rgb(231, 232, 234);
        background-color: rgb(255, 255, 255);
        margin-bottom: 16px;
        margin-top: -16px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        flex-direction: row;
        overflow-x: scroll;
    }

    .skill {
        height: 112px;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        text-align: center;
        border-right: 1px solid rgb(231, 232, 234);
        border-top-color: rgb(231, 232, 234);
        border-bottom-color: rgb(231, 232, 234);
        border-left-color: rgb(231, 232, 234);
        padding-top: 24px;
        border-bottom-right-radius: 0px;
        width: 14.2857%;
        position: relative;
        box-sizing: border-box;
    }

    .skill .content {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        flex-direction: column;
        width: max-content;
    }

    .check {
        line-height: 1;
        width: 32px;
        height: 32px;
        margin: 0 auto;
    }

    .skill .title {
        margin: 8px 0px 0px;
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1.4;
        font-family: "Avenir Next", sans-serif;
        color: rgb(66, 71, 80);
        padding-left: 24px;
        padding-right: 24px;
        cursor: default;
    }

    .head .details {
        display: flex;
        flex-direction: column;
    }

    .head .title {
        margin: 0px;
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.5;
        font-family: "Avenir Next", sans-serif;
        color: rgb(35, 39, 45);
    }

    .head .target {
        margin: 0px;
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1.4;
        font-family: "Avenir Next", sans-serif;
        color: rgb(98, 104, 114);
    }

    .arrows {
        position: absolute;
        top: 0;
        color: rgb(241, 241, 241);
    }

    .arrows .i:hover {
        color: #000;
    }

    .hover-gray {
        color: rgb(241, 241, 241);
    }

     .hover-gray:hover {
        color: #000;
     }

    .delete-skill {
        position: absolute;
        top: 2px;
        right: 2px;
        
    }
</style>