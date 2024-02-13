<script lang="ts">
    import NavButton from "./nav-button.svelte";

    export let onMainPage = false;
</script>

<nav class="mb-12 p-4 sm:p-0 backdrop-opacity-0 bg-slate-100 shadow-inner">
    <ul
        class="flex flex-col sm:flex-row divide-y sm:divide-none text-center justify-center"
    >
        <NavButton
            name={onMainPage ? "About" : "Back to Home"}
            link={onMainPage ? "#about" : "{base}/"}
        />
        <NavButton name="Games" link={onMainPage ? "#games" : "{base}/games"} />
        <NavButton
            name="Personal Projects"
            link={onMainPage ? "#personal-projects" : "{base}/personal-projects"}
        />
        <NavButton
            name="Resume"
            link="https://jaydensipe.github.io/JaydenSipeResume.pdf"
        />
    </ul>
</nav>
