<script lang="ts">
    import "../app.css";

    import Footer from "$lib/components/jay/footer/footer.svelte";
    import Holiday from "$lib/components/jay/holiday/holiday.svelte";
    import EasterEgg from "$lib/components/jay/easter-egg/easter-egg.svelte";

    import Toaster from "$lib/components/ui/sonner/sonner.svelte";
    import { ModeWatcher } from "mode-watcher";

    interface Props {
        children?: import("svelte").Snippet;
    }
    let { children }: Props = $props();
</script>

<!-- Dark Mode Toggle -->
<ModeWatcher />

<!-- Holiday Handler -->
<Holiday />

<!-- Easter Egg Handler -->
<EasterEgg />

<!-- Toaster Handler -->
<Toaster />

{@render children?.()}

<!-- Footer -->
<Footer />
