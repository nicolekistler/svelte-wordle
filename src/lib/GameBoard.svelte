<script>
    import {
        letterStream,
        puzzleComplete
    } from "../stores";

	let rows = [[], [], [], [], [], []];

	letterStream.subscribe(value => {
		rows = value;
	});

</script>
  
<div class='board-container'>
    {#each rows as _, ind}
        <div class={`row row-${ind}`}>
            {#each Array(5) as _, i}
                <div class={`letter-box box-${rows[ind][i]?.col || ''}`}>
                        {rows[ind][i]?.letter || ''}
                </div>
            {/each}
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

    .box-1 {
        background-color: #42713E;
    }

    .box-2 {
        background-color: #917F2F;
        
    }

    .box-3 {
        background-color: #2C3032;
    }

</style>
