<script lang="ts">
    import NavButton from "./nav-button.svelte";

    export let onMainPage = false;
    import { base } from "$app/paths";
</script>

<nav
    class="mb-12 p-4 sm:p-0 backdrop-opacity-0 bg-slate-100 shadow-inner"
>
    <ul
        class="flex flex-col sm:flex-row divide-y sm:divide-none text-center justify-center"
    >
        <NavButton
            name={onMainPage ? "About" : "Back to Home"}
            link={onMainPage ? "#about" : "/"}
        />
        <NavButton name="Games" link="{base}/{onMainPage ? "#games" : "/games"}" />
        <NavButton
            name="Personal Projects"
            link="{base}/{onMainPage ? "#personal-projects" : "/personal-projects"}"
        />
        <NavButton
            name="Resume"
            link="https://jaydensipe.github.io/JaydenSipeResume.pdf"
        />
    </ul>
</nav>
