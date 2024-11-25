<script lang="ts">

    import * as Card from "$lib/components/ui/card";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import Saos from "saos";
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
        noFillBgColor = ""
    }: Props = $props();
</script>

<div>
    <Saos
        once
        animation={"scale-in-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"}
    >
        <Card.Root
            class="bg-transparent w-[21rem] text-center border-0 shadow-none"
        >
            <Card.Header>
                {#if link}
                    <a class="m-0 p-0" href={link}>
                        <enhanced:img
                            loading="lazy"
                            class="{noFillBgColor} w-full scale-90 sm:scale-100 shadow-lg rounded-lg motion-reduce:hover:scale-100 sm:hover:scale-110 hover:motion-reduce:skew-y-2 transition duration-150 ease-out"
                            src={imgSrc}
                            alt={altImageText}
                        /></a
                    >
                {:else}
                    <enhanced:img
                        loading="lazy"
                        class="{noFillBgColor} w-full scale-90 sm:scale-100 shadow-lg rounded-lg motion-reduce:hover:scale-100 sm:hover:scale-110 hover:motion-reduce:skew-y-2 transition duration-150 ease-out"
                        src={imgSrc}
                        alt={altImageText}
                    />
                {/if}
                <br />
                <Card.Title>
                    {#if link}
                        <a class="hyperlink card-title" href={link}
                            >{@html name}</a
                        >
                    {:else}
                        <span class="card-title">
                            {@html name}
                        </span>
                    {/if}

                    {#if githubLink}
                        |
                        <a
                            class="hyperlink tracking-wide font-bold"
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
    </Saos>
</div>
