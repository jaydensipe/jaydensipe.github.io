<script lang="ts">
    import Saos from "saos";
    interface Props {
        name: string;
        language: string;
        languageIcons?: any[];
        githubLink?: string;
        imgSrc: any;
        altImageText: string;
        description: string;
        isArchived?: boolean;
    }

    let {
        name,
        language,
        languageIcons = [],
        githubLink = "",
        imgSrc,
        altImageText,
        description,
        isArchived = false,
    }: Props = $props();
</script>

<Saos
    once
    animation={"swing-in-top-fwd 0.45s cubic-bezier(0.230, 1.000, 0.320, 1.000) both"}
>
    <div class="pl-4 pr-4 pb-8">
        <div
            class="text-center flex flex-col items-center sm:border-0 p-4 text-card-foreground {!isArchived
                ? 'bg-secondary shadow-md rounded-md'
                : ''}"
        >
            <div
                class="flex flex-col sm:flex-row items-center justify-center"
            >
                <div
                    class="sm:mr-auto left-4 max-w-36 max-h-36 sm:max-w-24 sm:max-h-24 p-4"
                >
                    <enhanced:img
                        class="rounded-lg"
                        src={imgSrc}
                        alt={altImageText}
                    />
                </div>
                <div class="card-title text-sm sm:text-xl max-w-lg">
                    {#if githubLink}
                        <a
                            class="font-extrabold hyperlink underline-offset-4 text-cyan-700 dark:text-cyan-500"
                            href={githubLink}
                        >
                            {name}</a
                        >
                    {:else}
                        <span
                            class="text-cyan-700 dark:text-cyan-500 font-extrabold"
                            >{name}</span
                        >
                    {/if}
                    created with
                    <i class="text-cyan-700 dark:text-cyan-500">{language} </i>
                </div>
                <div class="flex flex-row gap-4 justify-center p-4">
                    {#each languageIcons as icon}
                        {@const SvelteComponent = icon}
                        <SvelteComponent style="font-size: 1.5rem;"
                        ></SvelteComponent>
                    {/each}
                </div>
            </div>
            <p class="mt-4 text-sm sm:text-base">
                {description}
            </p>
        </div>
    </div>
</Saos>
