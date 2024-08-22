<script lang="ts">
    import Footer from "$lib/components/jay/footer/footer.svelte";
    import HolidayParticles from "$lib/components/jay/holiday-particles/holiday-particles.svelte";

    import { afterNavigate, beforeNavigate } from "$app/navigation";
    import { ModeWatcher } from "mode-watcher";
    import "../app.pcss";

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

<slot />

<!-- Footer -->
<Footer />

<style>
    /* Font Face */
    @font-face {
        font-family: "Montserrat Variable";
        font-style: normal;
        font-display: fallback;
        font-weight: 100 900;
        src: url(@fontsource-variable/montserrat/files/montserrat-latin-wght-normal.woff2)
            format("woff2-variations");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC,
            U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    :global(body) {
        font-family: "Montserrat Variable", "Verdana", sans-serif;
    }

    /* Global Animations */
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
