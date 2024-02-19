<script lang="ts">
    export let name: string;
    export let link: string = "";
    export let imgSrc: string;
    export let altImageText: string;
    export let githubLink: string = "";
    export let description: string;
    export let noFillBgColor: string = "";

    import * as Card from "$lib/components/ui/card";
</script>

<div>
    <Card.Root
        class="bg-transparent w-[23rem] text-center border-0 shadow-none"
    >
        <Card.Header>
            {#if link}
                <a class="m-0 p-0" href={link}>
                    <enhanced:img
                        loading="lazy"
                        class="{noFillBgColor} w-full scale-90 sm:scale-100 shadow-lg rounded-lg motion-safe:hover:scale-100 sm:hover:scale-110 hover:motion-safe:skew-y-2 transition duration-150 ease-out"
                        src={imgSrc}
                        alt={altImageText}
                    /></a
                >
            {:else}
                <enhanced:img
                    loading="lazy"
                    class="{noFillBgColor} w-full scale-90 sm:scale-100 shadow-lg rounded-lg motion-safe:hover:scale-100 sm:hover:scale-110 hover:motion-safe:skew-y-2 transition duration-150 ease-out"
                    src={imgSrc}
                    alt={altImageText}
                />
            {/if}
            <br />
            <Card.Title>
                {#if link}
                    <a class="hyperlink card-title" href={link}> {name}</a>
                {:else}
                    <span class="card-title">
                        {name}
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
            <p>
                {description}
            </p>
        </Card.Content>
    </Card.Root>
</div>
