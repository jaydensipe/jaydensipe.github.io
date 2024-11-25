<script lang="ts">
    import {
        holidayStore,
        SupportedHolidays,
    } from "../../../../stores/holiday-store";
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

{#if $holidayStore === SupportedHolidays.Halloween}
    <main
        class="container bg-card pt-8 shadow-main-bg-light-halloween-mobile dark:shadow-main-bg-dark-halloween-mobile sm:shadow-main-bg-light-halloween sm:dark:shadow-main-bg-dark-halloween"
    >
        {@render children?.()}
    </main>
{:else if $holidayStore === SupportedHolidays.Christmas}
    <main
        class="container bg-card pt-8 shadow-main-bg-light-christmas-mobile dark:shadow-main-bg-dark-christmas-mobile sm:shadow-main-bg-light-christmas sm:dark:shadow-main-bg-dark-christmas"
    >
        {@render children?.()}
    </main>
{:else if $holidayStore === SupportedHolidays.NewYears}
    <main
        class="container bg-card pt-8 shadow-main-bg-light-new-years-mobile dark:shadow-main-bg-dark-new-years-mobile sm:shadow-main-bg-light-new-years sm:dark:shadow-main-bg-dark-new-years"
    >
        {@render children?.()}
    </main>
{:else}
    <main
        class="container bg-card pt-8 shadow-main-bg-light-mobile dark:shadow-main-bg-dark-mobile sm:shadow-main-bg-light sm:dark:shadow-main-bg-dark"
    >
        {@render children?.()}
    </main>
{/if}
