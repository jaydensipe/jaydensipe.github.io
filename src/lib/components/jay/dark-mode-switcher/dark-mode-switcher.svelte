<script lang="ts">
    import { Sun, Moon } from "@lucide/svelte";

    let { useStrokeWidth = true } = $props();
</script>

<Sun
    class="mr-2 scale-100 dark:scale-0 absolute rotate-0 !transition-all dark:-rotate-90"
    strokeWidth={useStrokeWidth ? "1.5" : "2.0"}
/>
<Moon
    class="mr-2 scale-0 dark:scale-100 absolute  rotate-90 !transition-all dark:rotate-0"
    strokeWidth={useStrokeWidth ? "1.5" : "2.0"}
/>
