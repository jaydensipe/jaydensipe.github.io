<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import Badge from "$lib/components/ui/badge/badge.svelte";
    import * as Tooltip from "$lib/components/ui/tooltip";

    import Separator from "$lib/components/ui/separator/separator.svelte";

    import { inView, animate } from "motion";
    import { onMount } from "svelte";

    interface Props {
        name: string;
        link?: string;
        date: string;
        imgSrc: any;
        engineLogo: any;
        altImageText: string;
        githubLink?: string;
        description: string;
        archived?: boolean;
    }

    let {
        name,
        link = "",
        date,
        imgSrc,
        engineLogo,
        altImageText,
        githubLink = "",
        description,
        archived = false,
    }: Props = $props();

    onMount(() => {
        inView(".game-card", (element) => {
            animate(element, {
                opacity: [0, 1],
                transform: ["translateX(-20px)", "translateX(0)"],
                duration: 300,
            });
        });
    });
</script>

<div
    class="flex flex-col justify-center items-center gap-8 sm:gap-10 sm:mx-8 pb-8 game-card"
>
    <Badge variant="secondary">{date}</Badge>
    <Card.Root
        class="text-center rounded-lg shadow-md sm:border-0 bg-secondary sm:w-5/6"
    >
        <Card.Header class="flex flex-col items-center">
            <enhanced:img
                class="bg-red-100 rounded-lg scale-95"
                src={imgSrc}
                alt={altImageText}
            />
            <Separator class="my-2" />
            <Card.Title
                class="text-lg sm:text-2xl sm:mx-0 mx-4 p-2 bg-zinc-200 dark:bg-stone-700 rounded-md w-5/6"
            >
                {#if link}
                    <a
                        class="hyperlink card-title underline-offset-4 text-rose-700 dark:text-rose-500"
                        href={link}
                    >
                        {name}</a
                    >
                {:else}
                    <span class="card-title text-rose-700 dark:text-rose-500">
                        {name}
                    </span>
                {/if}

                {#if githubLink}
                    |
                    <a
                        class="hyperlink tracking-wide font-bold underline-offset-4"
                        href={githubLink}>GitHub</a
                    >
                {/if}
            </Card.Title>
        </Card.Header>
        <Card.Content class="flex flex-col gap-4">
            <p class="text-sm sm:text-base w-5/6 mx-auto">
                {description}
            </p>
            {@const SvelteComponent = engineLogo}
            <span class="flex flex-row justify-between">
                <SvelteComponent style="font-size: 1.0rem;"></SvelteComponent>
                {#if archived}
                    <Tooltip.Provider>
                        <Tooltip.Root>
                            <Tooltip.Trigger
                                ><Badge variant="destructive">Archived ⚠️</Badge
                                ></Tooltip.Trigger
                            >
                            <Tooltip.Content>
                                <p>Contains mildly horrible code... be wary!</p>
                            </Tooltip.Content>
                        </Tooltip.Root>
                    </Tooltip.Provider>
                {/if}
            </span>
        </Card.Content>
    </Card.Root>
</div>
