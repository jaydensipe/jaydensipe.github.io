<script lang="ts">
    import NavButton from "./nav-button.svelte";
</script>

<nav class="container mb-12 backdrop-opacity-0 bg-slate-100 shadow-inner">
    <ul class="flex flex-row text-center justify-center">
        <NavButton name="About" />
        <NavButton name="Games" />
        <NavButton name="Personal Projects" />
        <NavButton name="Resume" />
    </ul>
</nav>
