<script lang="ts">
    export let name: string;
    export let link: string = "";
    export let date: string;
    export let iFrameSrc: string = "";
    export let imageName: string;
    export let altImageText: string;
    export let githubLink: string = "";
    export let description: string;

    import * as Card from "$lib/components/ui/card";
    import Badge from "$lib/components/ui/badge/badge.svelte";
</script>

<div class="flex flex-col justify-center items-center gap-10">
    <Badge class="mt-8" variant="secondary">{date}</Badge>
    {#if iFrameSrc}
        <iframe class="scale-75 sm:scale-100"
            title={name.toUpperCase()}
            frameborder="0"
            src={iFrameSrc}
            width="552"
            height="167"><a href={link}>{name} by jaydensippy</a></iframe
        >
    {/if}
    <Card.Root
        class="flex flex-col justify-center items-center bg-transparent text-center border-0 shadow-none"
    >
        <Card.Header>
            <a class="m-0 p-0" href={link}>
                <img
                    class="bg-red-100 rounded-lg"
                    src="/images/{imageName}"
                    alt={altImageText}
                /></a
            >
            <br />
            <Card.Title class="text-3xl">
                {#if link}
                    <a
                        class="hyperlink tracking-wide font-bold uppercase underline-offset-8"
                        href={link}
                    >
                        {name}</a
                    >
                {:else}
                    <span class="tracking-wide font-bold uppercase">
                        {name}
                    </span>
                {/if}

                {#if githubLink}
                    |
                    <a
                        class="hyperlink tracking-wide font-bold underline-offset-8"
                        href={githubLink}>GitHub</a
                    >
                {/if}
            </Card.Title>
        </Card.Header>
        <Card.Content>
            <p class="max-w-6xl">
                {description}
            </p>
        </Card.Content>
    </Card.Root>
</div>
