<script lang="ts">
    import "../app.css";

    import Footer from "$lib/components/jay/footer/footer.svelte";
    import HolidayParticles from "$lib/components/jay/holiday-particles/holiday-particles.svelte";

    import { afterNavigate, beforeNavigate } from "$app/navigation";
    import { ModeWatcher } from "mode-watcher";

    interface Props {
        children?: import("svelte").Snippet;
    }
    let { children }: Props = $props();

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

<!-- Dark Mode Toggle -->
<ModeWatcher />

<!-- Holiday Particles -->
<HolidayParticles />

{@render children?.()}

<!-- Footer -->
<Footer />

<style>
    @keyframes -global-scale-in-center {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 1;
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
        }
    }

    @keyframes -global-swing-in-top-fwd {
        0% {
            -webkit-transform: rotateX(-100deg);
            transform: rotateX(-100deg);
            -webkit-transform-origin: top;
            transform-origin: top;
            opacity: 0;
        }
        100% {
            -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
            -webkit-transform-origin: top;
            transform-origin: top;
            opacity: 1;
        }
    }
</style>
