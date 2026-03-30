<script lang="ts">
    import SunBold from "virtual:icons/solar/sun-2-bold";
    import MoonBold from "virtual:icons/solar/moon-bold";

    let { big = false } = $props();
</script>

<SunBold
    class="mr-2 scale-{big
        ? '130'
        : '100'} dark:scale-0 absolute rotate-0 transition-all! dark:-rotate-90"
/>
<MoonBold
    class="mr-2 scale-0 dark:scale-{big
        ? '130'
        : '100'} absolute rotate-90 transition-all! dark:rotate-0"
/>
