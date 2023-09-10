<script>
        import shuffler from "$lib/functions/shuffler.js";

    export let question;
    export let showStatus;
    export let sendStatusUp;
    export let percentage;

    $: q = question;
    $: selectedChoice && console.log(question);

    let selectedChoice;
    let qs;
    let selections = {};

    $: console.log(selections)

    $: {
        // Define a reactive statement to rerun the status() function when showStatus changes
        qs = status(selectedChoice, question, showStatus);
    }

    function status(choice, question, showStatus) {
        if (showStatus) {
            if (question.selected) {
                // console.log("cimpa", choice.id);
                console.log("com", question.selected);
                console.log("answer", question.correct);

                if (question.correct === question.selected) {
                    sendStatusUp({
                        question: question,
                        choice: selectedChoice,
                        status: true
                    });
                    return "correct";
                } else {
                    sendStatusUp({
                        question: question,
                        choice: selectedChoice,
                        status: false
                    });
                    return "incorrect";
                }
            } 

            if (q.selectors) {
                // if (q.selectors.options[q.selectors.correct] === )
                // console.log({selections})
                // q.selectors 
                // for (let s of q.selectors) {

                // }
                let allGood = false;
                q.selectors.forEach((s,i) => {
                    if (question.selectors[i].correct !== selections[i]) {
                        allGood = false;

                        sendStatusUp({
                            question: question,
                            choice: selections,
                            status: false
                        });
                        return "incorrect";
                    }
                });

                sendStatusUp({
                    question: question,
                    choice: selections,
                    status: true
                });
                return "correct";
            }
            

            sendStatusUp({
                question: question,
                status: false
            });
            return "incorrect";
        }
        return "";
    }


    // function reCheck() {
    //     console.log("recheck")
    //     for (let i = 0; i < question.selectors.length; i++){
    //         checkSelection(i);
    //     }
    // }
</script>

<li class="question" class:show-status={showStatus}>
                <div><h3 class="prompt">{@html q.question}</h3></div>
                
                {#if q.choices}
                    <ul class="clean-list choices">
                        {#each Object.entries(q.choices).map(([key, value]) => ({ ...value, id: key })) || [] as choice}
                            <li class="choice {qs}" class:selected={selectedChoice ? selectedChoice.id === choice.id : false} on:click={() => {
                                    if (showStatus) return;
                                    selectedChoice = choice; question.selected = selectedChoice.id}
                                }>{choice.answer}</li>
                        {/each}
                    </ul>
                {/if}

                {#if q.selectors}
                    <ul class="clean-list horizontal-list">
                        {#each q.selectors || [] as choice, i}
                            <li>
                                <select 
                                    disabled={showStatus}
                                    class:correct={question.selectors[i].correct === selections[i]}
                                    class:incorrect={question.selectors[i].correct !== selections[i]} name="" id="" bind:value={selections[i]} >
                                    <option value="-1"></option>
                                    {#each choice.options || [] as option, j}
                                        <option value="{j}">{option}</option>
                                    {/each}
                                </select>
                            </li>
                        {/each}
                    </ul>
                {/if}
            </li>

<style>
    .prompt {
        padding: 14px;
    }
    .question {
        background: #fafcff;
        margin: 17px;
        padding: 13px;
        border: 10px solid #e6f7ff;
    }

    .choice {
        background: #fff;
        margin: 10px 0;
        padding: 14px;
        border: 1px solid rgba(207, 207, 207, 0.822);
        cursor: pointer;
    }

    .choice:hover {
        background: rgb(241, 241, 241);
    }

    .choice.selected {
        background: #123774;
        color: rgb(236, 236, 236);
    }

    .show-status .choice.selected.correct {
        background: #a7ffd3;
        color: #000;
    }

    .show-status .choice.selected.incorrect {
        background: #ff2121;
        color: #fff;
    }

    .show-status select.incorrect {
        background: #ff2121;
        color: #fff;
    }

    .show-status select.correct {
        background: #a7ffd3;
        color: #000;
    }
</style>