<script lang="ts">
    import { inView, animate } from "motion";
    import { onMount } from "svelte";

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

    onMount(() => {
        inView(".project-card", (element) => {
            animate(element, {
                opacity: [0, 1],
                transform: ["translateY(-20px)", "translateY(0)"],
                duration: 300,
            });
        });
    });
</script>

<div class="px-4 pb-8">
    <div
        class="text-center flex flex-col items-center border sm:border-0 p-4 text-card-foreground {!isArchived
            ? 'bg-secondary shadow-md rounded-md project-card'
            : 'border-none'}"
    >
        <div class="flex flex-col sm:flex-row items-center justify-center">
            <div
                class="sm:mr-auto left-4 max-w-36 max-h-36 sm:max-w-24 sm:max-h-24 p-4"
            >
                <enhanced:img
                    loading="lazy"
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
