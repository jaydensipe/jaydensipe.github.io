<script lang="ts">
    export let name: string;
    export let language: string;
    export let languageIcons: any[] = [];
    export let githubLink: string = "";
    export let imgSrc: string;
    export let altImageText: string;
    export let description: string;
    export let isArchived: boolean = false;

    import Saos from "saos";
</script>

<Saos
    once
    animation={"swing-in-top-fwd 0.45s cubic-bezier(0.230, 1.000, 0.320, 1.000) both"}
>
    <div class="p-4 flex flex-col items-center">
        <div
            class="text-center mt-4 flex flex-col items-center sm:block sm:border-0 p-4 text-card-foreground {!isArchived
                ? 'bg-secondary shadow-md rounded-md'
                : ''}"
        >
            <div
                class="sm:float-left sm:absolute max-w-36 max-h-36 sm:max-w-24 sm:max-h-24 p-4"
            >
                <enhanced:img
                    class="rounded-lg"
                    src={imgSrc}
                    alt={altImageText}
                />
            </div>
            <span class="card-title text-sm sm:text-xl"
                >{#if githubLink}
                    <a
                        class="hyperlink underline-offset-4 text-cyan-700 dark:text-cyan-500"
                        href={githubLink}
                    >
                        {name}</a
                    >
                {:else}
                    <span class="text-cyan-700 dark:text-cyan-500">{name}</span>
                {/if}
                created with
                <i class="text-cyan-700 dark:text-cyan-500"
                    >{language}
                </i></span
            >
            <div class="flex flex-row gap-4 justify-center p-4">
                {#each languageIcons as icon}
                    <svelte:component this={icon} style="font-size: 1.5rem;"
                    ></svelte:component>
                {/each}
            </div>
            <p class="mt-4 text-sm sm:text-base">
                {description}
            </p>
        </div>
    </div>
</Saos>
