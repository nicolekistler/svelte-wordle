<script>
    import {
        currentRow,
        letterStream,
        puzzleComplete
    } from "../stores";

    const rows = [
      ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      ['DEL', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER']
    ]

    const handleDelete = () => {
        if ($letterStream[$currentRow].length > 0) {
            letterStream.update(stream => {
                stream[$currentRow].pop();

                return stream;
            })
        }
    }

    const handleEnter = () => {
        const rowComplete = $letterStream[$currentRow].length === 5;

        if (rowComplete) {
            currentRow.update(currentRow => currentRow+1);

            if ($currentRow === 6) {
                puzzleComplete.set(true);
            }
        }
    }

    const handleClick = (event) => {
        const clickedKey = event.target.getAttribute('data-key');

        if ($puzzleComplete) {
            return;
        }

        if (clickedKey === 'DEL')  return handleDelete()

        if (clickedKey === 'ENTER') return handleEnter()

        if ($letterStream[$currentRow].length < 5) {
            letterStream.update(stream => {
                stream[$currentRow].push(clickedKey);

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
