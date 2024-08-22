<script lang="ts">
    import Particles, { particlesInit } from "@tsparticles/svelte";
    import { loadFull } from "tsparticles";
    import {
        holidayStore,
        SupportedHolidays,
    } from "../../../../stores/holiday-store";
    import { mode } from "mode-watcher";

    let holidayParticleConfig = {
        christmas: {
            particles: {
                color: {
                    value: "#FFF",
                },
                move: {
                    direction: "bottom",
                    enable: true,
                    outModes: "out",
                    speed: 4,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 800,
                },
                opacity: {
                    value: 0.7,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: 4,
                },
                wobble: {
                    enable: true,
                    distance: 10,
                    speed: 10,
                },
                zIndex: {
                    value: {
                        min: 0,
                        max: 100,
                    },
                },
            },
        },
        halloween: {
            emitters: [
                {
                    position: {
                        x: 0,
                        y: 30,
                    },
                    rate: {
                        quantity: 7,
                        delay: 0.15,
                    },
                    particles: {
                        move: {
                            direction: "top-right",
                            outModes: {
                                top: "none",
                                left: "none",
                                default: "destroy",
                            },
                        },
                    },
                },
                {
                    position: {
                        x: 100,
                        y: 30,
                    },
                    rate: {
                        quantity: 7,
                        delay: 0.15,
                    },
                    particles: {
                        move: {
                            direction: "top-left",
                            outModes: {
                                top: "none",
                                right: "none",
                                default: "destroy",
                            },
                        },
                    },
                },
            ],
            particles: {
                color: {
                    value: ["#FF7600", "#52006A"],
                },
                move: {
                    decay: 0.05,
                    direction: "top",
                    enable: true,
                    gravity: {
                        enable: true,
                    },
                    outModes: {
                        top: "none",
                        default: "destroy",
                    },
                    speed: {
                        min: 20,
                        max: 70,
                    },
                },
                rotate: {
                    value: {
                        min: 0,
                        max: 360,
                    },
                    direction: "random",
                    animation: {
                        enable: true,
                        speed: 30,
                    },
                },
                tilt: {
                    direction: "random",
                    enable: true,
                    value: {
                        min: 0,
                        max: 360,
                    },
                    animation: {
                        enable: true,
                        speed: 30,
                    },
                },
                size: {
                    value: {
                        min: 2,
                        max: 4,
                    },
                },
                roll: {
                    darken: {
                        enable: true,
                        value: 25,
                    },
                    enable: true,
                    speed: {
                        min: 5,
                        max: 15,
                    },
                },
                wobble: {
                    distance: 30,
                    enable: true,
                    speed: {
                        min: -7,
                        max: 7,
                    },
                },
                shape: {
                    type: ["circle", "square", "star"],
                    options: {},
                },
            },
        },
        newYears: {
            particles: {
                color: {
                    value: ["#CB00F0", "#FFF6C7", "#F05200"],
                },
                shape: {
                    type: ["circle", "square"],
                    options: {},
                },
                opacity: {
                    value: {
                        min: 0,
                        max: 1,
                    },
                    animation: {
                        enable: true,
                        speed: 2,
                        startValue: "max",
                        destroy: "min",
                    },
                },
                size: {
                    value: {
                        min: 3,
                        max: 4,
                    },
                },
                life: {
                    duration: {
                        sync: true,
                        value: 7,
                    },
                    count: 1,
                },
                move: {
                    enable: true,
                    gravity: {
                        enable: true,
                        acceleration: 10,
                    },
                    speed: {
                        min: 10,
                        max: 50,
                    },
                    decay: 0.1,
                    direction: "none",
                    straight: false,
                    outModes: {
                        default: "destroy",
                        top: "none",
                    },
                },
                rotate: {
                    value: {
                        min: 0,
                        max: 360,
                    },
                    direction: "random",
                    move: true,
                    animation: {
                        enable: true,
                        speed: 60,
                    },
                },
                tilt: {
                    direction: "random",
                    enable: true,
                    move: true,
                    value: {
                        min: 0,
                        max: 360,
                    },
                    animation: {
                        enable: true,
                        speed: 60,
                    },
                },
                roll: {
                    darken: {
                        enable: true,
                        value: 25,
                    },
                    enable: true,
                    speed: {
                        min: 15,
                        max: 25,
                    },
                },
                wobble: {
                    distance: 30,
                    enable: true,
                    move: true,
                    speed: {
                        min: -15,
                        max: 15,
                    },
                },
            },
            emitters: {
                life: {
                    count: 0,
                    duration: 0.1,
                    delay: 0.4,
                },
                rate: {
                    delay: 0.25,
                    quantity: 200,
                },
            },
        },
    };

    let onParticlesLoaded = (event: any) => {
        const particlesContainer = event.detail.particles;
    };

    void particlesInit(async (engine) => {
        await loadFull(engine);
    });
</script>

{#if $holidayStore === SupportedHolidays.Halloween}
    {#if $mode === "dark"}
        <Particles
            id="tsparticles"
            class="hidden sm:block"
            style="z-index: -1;"
            options={holidayParticleConfig.halloween}
            on:particlesLoaded={onParticlesLoaded}
        />
    {:else}
        <Particles
            id="tsparticles"
            class="hidden sm:block"
            style="z-index: -1;"
            options={{
                ...holidayParticleConfig.halloween,
                particles: {
                    ...holidayParticleConfig.halloween.particles,
                    color: {
                        value: ["#F7D9FF", "#FFE8D2"],
                    },
                },
            }}
            on:particlesLoaded={onParticlesLoaded}
        />
    {/if}
{:else if $holidayStore === SupportedHolidays.Christmas}
    {#if $mode === "dark"}
        <Particles
            id="tsparticles"
            class="hidden sm:block"
            style="z-index: -1;"
            options={holidayParticleConfig.christmas}
            on:particlesLoaded={onParticlesLoaded}
        />
    {:else}
        <Particles
            id="tsparticles"
            class="hidden sm:block"
            style="z-index: -1;"
            options={{
                ...holidayParticleConfig.christmas,
                particles: {
                    ...holidayParticleConfig.christmas.particles,
                    color: {
                        value: ["#e3e3e3"],
                    },
                },
            }}
            on:particlesLoaded={onParticlesLoaded}
        />
    {/if}
{:else if $holidayStore === SupportedHolidays.NewYears}
    {#if $mode === "dark"}
        <Particles
            id="tsparticles"
            class="hidden sm:block"
            style="z-index: -1;"
            options={holidayParticleConfig.newYears}
            on:particlesLoaded={onParticlesLoaded}
        />
    {:else}
        <Particles
            id="tsparticles"
            class="hidden sm:block"
            style="z-index: -1;"
            options={{
                ...holidayParticleConfig.newYears,
                particles: {
                    ...holidayParticleConfig.newYears.particles,
                    color: {
                        value: ["#F9DBFF", "#FFF6C7", "#FFD4BE"],
                    },
                },
            }}
            on:particlesLoaded={onParticlesLoaded}
        />
    {/if}
{/if}
