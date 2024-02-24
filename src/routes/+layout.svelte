<script lang="ts">
    import Footer from "$lib/components/jay/footer/footer.svelte";

    import { afterNavigate, beforeNavigate } from "$app/navigation";
    import { ModeWatcher } from "mode-watcher";
    import Saos from "saos";

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

    @keyframes -global-text-pop-up-top-light {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            text-shadow: none;
        }
        100% {
            -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            text-shadow:
                0 1px 0 #f4f4f5,
                0 2px 0 #f4f4f5,
                0 3px 0 #f4f4f5,
                0 4px 0 #f4f4f5,
                0 5px 0 #f4f4f5,
                0 6px 0 #f4f4f5,
                0 7px 0 #f4f4f5,
                0 8px 0 #f4f4f5,
                0 9px 0 #f4f4f5,
                0 50px 30px rgba(0, 0, 0, 0.3);
        }
    }

    @keyframes -global-text-pop-up-top-dark {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            text-shadow: none;
        }
        100% {
            -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            text-shadow:
                0 1px 0 #292524,
                0 2px 0 #292524,
                0 3px 0 #292524,
                0 4px 0 #292524,
                0 5px 0 #292524,
                0 6px 0 #292524,
                0 7px 0 #292524,
                0 8px 0 #292524,
                0 9px 0 #292524,
                0 50px 30px rgba(0, 0, 0, 0.3);
        }
    }
</style>
