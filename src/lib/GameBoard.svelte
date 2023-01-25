<script>
    import {
        currentRow,
        letterStream,
        puzzleComplete
    } from "../stores";

	let rows = [[], [], [], [], [], []];

	letterStream.subscribe(value => {
		rows = value;
	});

</script>
  
<div class='board-container'>
    {#each rows as _, rowIndex}
        <div class={`row row-${rowIndex}`}>
            <div class={`letter-box box`}>{rows[rowIndex][0] || ''}</div>
            <div class={`letter-box box`}>{rows[rowIndex][1] || ''}</div>
            <div class={`letter-box box`}>{rows[rowIndex][2] || ''}</div>
            <div class={`letter-box box`}>{rows[rowIndex][3] || ''}</div>
            <div class={`letter-box box`}>{rows[rowIndex][4] || ''}</div>
        </div>
    {/each}
</div>
  
<style>
    .board-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
    }

    .row {
        display: flex;
    }

    .letter-box {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px;
        width: 3.5rem;
        height: 3.5rem;
        padding: 5px;   
        border: 2px solid #818384;
        font-weight: 600;
        font-size: 1.5rem;
    }
</style>

<!-- wrong answer color: background-color: #3A3A3C; -->
