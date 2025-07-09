<script lang="ts">
    import {
        holidayStore,
        SupportedHolidays,
    } from "../../../../stores/holiday-store";
    interface Props {
        children?: import("svelte").Snippet;
    }

    let { children }: Props = $props();
</script>

{#if $holidayStore === SupportedHolidays.Halloween}
    <main
        class="bg-card pt-8 shadow-main-bg-mobile sm:shadow-main-bg halloween"
    >
        {@render children?.()}
    </main>
{:else if $holidayStore === SupportedHolidays.Christmas}
    <main
        class="bg-card pt-8 shadow-main-bg-mobile sm:shadow-main-bg christmas"
    >
        {@render children?.()}
    </main>
{:else if $holidayStore === SupportedHolidays.NewYears}
    <main
        class="bg-card pt-8 shadow-main-bg-mobile sm:shadow-main-bg new-years"
    >
        {@render children?.()}
    </main>
{:else}
    <main class="bg-card pt-8 shadow-main-bg-mobile sm:shadow-main-bg">
        {@render children?.()}
    </main>
{/if}
