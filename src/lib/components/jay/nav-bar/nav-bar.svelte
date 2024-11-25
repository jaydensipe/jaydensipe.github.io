<script lang="ts">
    import { base } from "$app/paths";
    import NavButton from "./nav-button.svelte";

    interface Props {
        onMainPage?: boolean;
    }

    let { onMainPage = false }: Props = $props();
</script>

<nav
    class="mb-12 p-4 hidden sm:block sm:p-0 dark:bg-rose-700 bg-slate-100 shadow-inner backdrop-blur-sm"
>
    <ul
        class="flex flex-col sm:flex-row divide-y sm:divide-none text-center justify-center"
    >
        {#if onMainPage}
            <NavButton name="About" link="#about" />
            <NavButton name="Games" link="#games" />
            <NavButton name="Personal Projects" link="#personal-projects" />
        {:else}
            <NavButton name="Back to Home" link="{base}/" />
            <NavButton name="Games" link="{base}/games" />
            <NavButton
                name="Personal Projects"
                link="{base}/personal-projects"
            />
        {/if}
        <NavButton
            name="Resume"
            link="https://jaydensipe.github.io/JaydenSipeResume.pdf"
        />
    </ul>
</nav>
