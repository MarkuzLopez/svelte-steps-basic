<script>
import Button from "./Button.svelte";

    let someText = `FrontEnd Developer at Platzi`;
    let count = 0;
    let styles = { darkMode: false }

    function hadleClick() { 
        count += 1;
    }

    function toggle() { 
        styles.darkMode = !styles.darkMode;
        window.document.body.classList.toggle("dark-mode");
    }

</script>

<style>
/* estilos */
p {
    color: var(--theme-color);
}

</style>

<div class="About" >

    { #if !styles.darkMode}
        <p>{someText} (con if)</p>
        {:else}
        <p>
            <span>Hellou DarkMode (con el else)</span>
        </p>
    {/if }
<p>
    { someText }
</p>
<Button 
    text="click u.u"
    count={count}
    on:click={hadleClick}
/>

<Button 
    text="Dark Mode"
    count={count}
    on:click={toggle}
/>
<button on:click={hadleClick} > Click { count === 0 ? '' : count }</button>
<button on:click={toggle} >DarkMode</button>
</div>