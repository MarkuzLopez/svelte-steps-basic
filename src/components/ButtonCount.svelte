<script>

    import { count } from '../store/store';
    
    function hadlClick() {
        count.update(valor => valor + 1);
    }

</script>

<style>
    button { 
        background-color: #f76027;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 0.5rem;
        text-transform: uppercase;
        cursor: pointer;
    }
</style>

<button on:click={hadlClick} >
    Click {$count === 0 ? '' : $count }
</button>