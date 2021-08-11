<script>
    export let text;
    export let count;

</script>

<button on:click>
    {text}
    { count  === 0 ? '' : count }
</button>