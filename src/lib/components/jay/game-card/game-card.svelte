<script lang="ts">
    export let name: string;
    export let link: string = "";
    export let date: string;
    export let imgSrc: string;
    export let altImageText: string;
    export let githubLink: string = "";
    export let description: string;

    import * as Card from "$lib/components/ui/card";
    import Badge from "$lib/components/ui/badge/badge.svelte";
</script>

<div class="flex flex-col justify-center items-center gap-8 sm:gap-10 sm:mx-8">
    <Badge class="mt-8" variant="secondary">{date}</Badge>
    <Card.Root
        class="bg-transparent text-center shadow-sm sm:shadow-none sm:border-0"
    >
        <Card.Header>
            <enhanced:img
                class="bg-red-100 rounded-lg"
                src={imgSrc}
                alt={altImageText}
            />
            <br />
            <Card.Title
                class="text-lg sm:text-2xl sm:mx-0 mx-4 bg-secondary p-2"
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
        <Card.Content>
            <p class="max-w-6xl text-sm sm:text-base">
                {description}
            </p>
        </Card.Content>
    </Card.Root>
</div>
