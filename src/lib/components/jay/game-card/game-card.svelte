<script lang="ts">

    import * as Card from "$lib/components/ui/card";
    import Saos from "saos";
    import Badge from "$lib/components/ui/badge/badge.svelte";
    import * as Tooltip from "$lib/components/ui/tooltip";
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
        archived = false
    }: Props = $props();
</script>

<Saos
    once
    animation={"swing-in-top-fwd 0.45s cubic-bezier(0.230, 1.000, 0.320, 1.000) both"}
>
    <div
        class="flex flex-col justify-center items-center gap-8 sm:gap-10 sm:mx-8"
    >
        <Badge class="mt-8" variant="secondary">{date}</Badge>
        <Card.Root class="text-center shadow-md sm:border-0 bg-secondary w-5/6">
            <Card.Header>
                <enhanced:img
                    class="bg-red-100 rounded-lg scale-95"
                    src={imgSrc}
                    alt={altImageText}
                />
                <br />
                <Card.Title
                    class="text-lg sm:text-2xl sm:mx-0 mx-4 p-2 bg-zinc-200 dark:bg-zinc-700 rounded-lg"
                >
                    {#if link}
                        <a
                            class="hyperlink card-title underline-offset-4 text-rose-700 dark:text-rose-500"
                            href={link}
                        >
                            {name}</a
                        >
                    {:else}
                        <span
                            class="card-title text-rose-700 dark:text-rose-500"
                        >
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
                <p class="text-sm sm:text-base">
                    {description}
                </p>
                {@const SvelteComponent = engineLogo}
                <span class="flex flex-row justify-between">
                    <SvelteComponent
                        style="font-size: 1.0rem;"
                    ></SvelteComponent>
                    {#if archived}
                        <Tooltip.Root>
                            <Tooltip.Trigger
                                ><Badge variant="destructive">Archived ⚠️</Badge
                                ></Tooltip.Trigger
                            >
                            <Tooltip.Content>
                                <p>Contains mildly horrible code... be wary!</p>
                            </Tooltip.Content>
                        </Tooltip.Root>
                    {/if}
                </span>
            </Card.Content>
        </Card.Root>
    </div>
</Saos>
