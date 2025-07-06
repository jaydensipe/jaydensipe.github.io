<script lang="ts">
    import Particles, { particlesInit } from "@tsparticles/svelte";
    import { loadFull } from "tsparticles";
    import {
        holidayStore,
        SupportedHolidays,
    } from "../../../../stores/holiday-store";
    import { halloweenParticles } from "$lib/particles/halloween";
    import { christmasParticles } from "$lib/particles/christmas";
    import { newYearsParticles } from "$lib/particles/new-years";
    import { mode } from "mode-watcher";

    void particlesInit(async (engine) => {
        await loadFull(engine);
    });
</script>

{#if $holidayStore === SupportedHolidays.Halloween}
    {#if mode.current === "dark"}
        <Particles
            id="tsparticles"
            class="hidden sm:block"
            style="z-index: -1;"
            options={halloweenParticles}
        />
    {:else}
        <Particles
            id="tsparticles"
            class="hidden sm:block"
            style="z-index: -1;"
            options={{
                ...halloweenParticles,
                particles: {
                    ...halloweenParticles.particles,
                    color: {
                        value: ["#F7D9FF", "#FFE8D2"],
                    },
                },
            }}
        />
    {/if}
{:else if $holidayStore === SupportedHolidays.Christmas}
    {#if mode.current === "dark"}
        <Particles
            id="tsparticles"
            class="hidden sm:block"
            style="z-index: -1;"
            options={christmasParticles}
        />
    {:else}
        <Particles
            id="tsparticles"
            class="hidden sm:block"
            style="z-index: -1;"
            options={{
                ...christmasParticles,
                particles: {
                    ...christmasParticles.particles,
                    color: {
                        value: ["#e3e3e3"],
                    },
                },
            }}
        />
    {/if}
{:else if $holidayStore === SupportedHolidays.NewYears}
    {#if mode.current === "dark"}
        <Particles
            id="tsparticles"
            class="hidden sm:block"
            style="z-index: -1;"
            options={newYearsParticles}
        />
    {:else}
        <Particles
            id="tsparticles"
            class="hidden sm:block"
            style="z-index: -1;"
            options={{
                ...newYearsParticles,
                particles: {
                    ...newYearsParticles.particles,
                    color: {
                        value: ["#F9DBFF", "#FFF6C7", "#FFD4BE"],
                    },
                },
            }}
        />
    {/if}
{/if}
