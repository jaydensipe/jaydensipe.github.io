<script lang="ts">
    import { afterNavigate, beforeNavigate } from "$app/navigation";
    import "../app.pcss";
    import "@fontsource-variable/montserrat";

    // Fixes scroll behaivour when going to a new page: https://github.com/sveltejs/kit/pull/8723#issuecomment-1423522635
    let scroll_behaviour: any;

    beforeNavigate(() => {
        scroll_behaviour = getComputedStyle(
            document.documentElement,
        ).scrollBehavior;
        document.documentElement.style.scrollBehavior = "auto";
    });

    afterNavigate(() => {
        if (scroll_behaviour) {
            document.documentElement.style.scrollBehavior = scroll_behaviour;
        }
    });
</script>

<slot />

<style>
    :global(body) {
        font-family: "Montserrat Variable", sans-serif;
    }
</style>
