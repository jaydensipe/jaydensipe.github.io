<script lang="ts">
    import { leavesParticles } from "$lib/particles/leaves";
    import {
        easterEggStore,
        setEasterEgg,
        SupportedEasterEggs,
    } from "../../../../stores/easter-egg-store";
    import Particles from "@tsparticles/svelte";

    function handleEasterEggKey(event: KeyboardEvent) {
        if (event.key === "3") {
            // Start timer
            setEasterEgg(SupportedEasterEggs.Expedition33);
        }
    }
</script>

<svelte:window on:keydown={handleEasterEggKey} />

{#if $easterEggStore === SupportedEasterEggs.Expedition33}
    <Particles
        id="tsparticles"
        class="hidden sm:block"
        style="z-index: -1;"
        options={leavesParticles}
    />
{/if}