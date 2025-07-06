<script lang="ts">
    import { leavesParticles } from "$lib/particles/leaves";
    import {
        easterEggStore,
        setEasterEgg,
        SupportedEasterEggs,
    } from "../../../../stores/easter-egg-store";
    import Particles from "@tsparticles/svelte";

    let firstHit: boolean = false;
    let nextKeyWithinTimeframe: boolean = false;
    function handleEasterEggKey(event: KeyboardEvent) {
        if (event.key === "3" && !firstHit) {
            firstHit = true;
            nextKeyWithinTimeframe = true;
            setTimeout(() => {
                firstHit = false;
                nextKeyWithinTimeframe = false;
            }, 200);
        } else if (event.key === "3" && nextKeyWithinTimeframe) {
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
