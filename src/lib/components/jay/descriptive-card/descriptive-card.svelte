<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    interface Props {
        name: string;
        link?: string;
        imgSrc: any;
        altImageText: string;
        githubLink?: string;
        description: string;
        noFillBgColor?: string;
    }

    let {
        name,
        link = "",
        imgSrc,
        altImageText,
        githubLink = "",
        description,
        noFillBgColor = "",
    }: Props = $props();
</script>

<Card.Root
    class="bg-transparent w-[21rem] text-center border-0 shadow-none descriptive-card"
>
    <Card.Header>
        {#if link}
            <a class="m-0 p-0" href={link} aria-label={altImageText}>
                <enhanced:img
                    loading="lazy"
                    class="{noFillBgColor} w-full scale-85 sm:scale-100 shadow-lg rounded-lg motion-reduce:hover:scale-100 sm:hover:scale-110 hover:motion-reduce:skew-y-2 transition duration-150 ease-out"
                    src={imgSrc}
                    alt={altImageText}
                /></a
            >
        {:else}
            <enhanced:img
                loading="lazy"
                class="{noFillBgColor} w-full scale-85 sm:scale-100 shadow-lg rounded-lg motion-reduce:hover:scale-100 sm:hover:scale-110 hover:motion-reduce:skew-y-2 transition duration-150 ease-out descriptive-image"
                src={imgSrc}
                alt={altImageText}
            />
        {/if}
        <Card.Title class="pt-2 sm:pt-6">
            {#if link}
                <a class="hyperlink card-title text-lg leading-none" href={link}
                    >{@html name}</a
                >
            {:else}
                <span class="card-title text-lg leading-none">
                    {@html name}
                </span>
            {/if}

            {#if githubLink}
                |
                <a
                    class="hyperlink tracking-wide font-bold text-lg leading-none"
                    href={githubLink}>GitHub</a
                >
            {/if}
        </Card.Title>
    </Card.Header>
    <Card.Content>
        <p class="text-sm md:text-base">
            {description}
        </p>
    </Card.Content>
</Card.Root>
<Separator class="sm:hidden"></Separator>
