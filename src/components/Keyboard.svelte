<script>
    import {
        currentRow,
        guesses,
        puzzleComplete,
        solution
    } from '../stores';
    
    const rows = [
      ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      ['DEL', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER']
    ]

    /**
     * Check if word matches solution
     * @param word - word entered in row
     */
    const checkWord = (word) => {

        if (word.join('') === $solution) {
            console.log('puzzle solved!')
            // TODO: pop a notif
            puzzleComplete.set(true);
        } else {
            word.forEach(function (key, i) {
                let colorResult = 0;

                const currentLetter = key.letter;
                const isFullMatch = $solution[i] === currentLetter;
                const isPartialMatch = $solution.includes(currentLetter);

                if (isFullMatch) {
                    colorResult = 1;
                } else if (isPartialMatch) {
                    colorResult = 2;
                } else {
                    colorResult = 3;
                }

                $guesses[$currentRow][i].col = colorResult;
            });
        }
    }

    /**
     * Handle when user initiates enter event
     */
    const handleEnter = () => {
        const rowComplete = $guesses[$currentRow].length === 5;

        if (rowComplete) {
            checkWord($guesses[$currentRow])

            if ($currentRow === 5) {
                puzzleComplete.set(true);

                return;
            }

            currentRow.update(currentRow => currentRow+1);
        }
    }

    /**
     * Handle when user initiates delete event
     */
    const handleDelete = () => {
        if ($guesses[$currentRow].length > 0) {
            guesses.update(stream => {
                stream[$currentRow].pop();

                return stream;
            })
        }
    }

    /**
     * Handle user keyboard clicks
     * @param event - User input event
     */
    const handleClick = (event) => {
        const clickedKey = event.target.getAttribute('data-key');

        if ($puzzleComplete) {
            return;
        }

        if (clickedKey === 'DEL')  return handleDelete()

        if (clickedKey === 'ENTER') return handleEnter()

        if ($guesses[$currentRow].length < 5) {
            guesses.update(stream => {
                stream[$currentRow].push({letter: clickedKey, col: 0});

                return stream;
            })
        }
    };

</script>
  
<div class='keyboard-container'>
    {#each rows as row}
        <div class='row'>
            {#each row as key}
                <button
                    class='key'
                    data-key={key}
                    on:click={handleClick}
                >
                    {key.toUpperCase()}
                </button>
            {/each}
        </div>
    {/each}
</div>
  
<style>
    .keyboard-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .row {
        display: flex;
    }

    .key {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2.5rem;
        min-width: 2rem;
        padding: 0.5rem;
        margin: .25rem;
        background-color: #818384;
        border-radius: .2rem;
        font-weight: 600;
        color: white;
        user-select: none;
    }

    .key:hover {
        cursor: pointer;
    }

</style>
