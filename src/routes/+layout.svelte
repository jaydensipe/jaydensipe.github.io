<script lang="ts">
    import "../app.css";

    import Footer from "$lib/components/jay/footer/footer.svelte";
    import Holiday from "$lib/components/jay/holiday/holiday.svelte";
    import EasterEgg from "$lib/components/jay/easter-egg/easter-egg.svelte";
    import PageSheet from "$lib/components/jay/page-sheet/page-sheet.svelte";
    import Toaster from "$lib/components/ui/sonner/sonner.svelte";

    import { ModeWatcher } from "mode-watcher";
    import { beforeNavigate, afterNavigate } from "$app/navigation";

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

<!-- Holiday Handler -->
<Holiday />

<!-- Easter Egg Handler -->
<EasterEgg />

<!-- Toaster Handler -->
<Toaster richColors />

{@render children?.()}

<!-- Footer -->
<Footer />
