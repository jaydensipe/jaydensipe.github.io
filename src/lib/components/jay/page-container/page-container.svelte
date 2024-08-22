<script lang="ts">
    import {
        holidayStore,
        SupportedHolidays,
    } from "../../../../stores/global-store";
</script>

{#if $holidayStore === SupportedHolidays.Halloween}
    <main
        class="container bg-card pt-8 shadow-main-bg-light-halloween-mobile dark:shadow-main-bg-dark-halloween-mobile sm:shadow-main-bg-light-halloween sm:dark:shadow-main-bg-dark-halloween"
    >
        <slot />
    </main>
{:else if $holidayStore === SupportedHolidays.Christmas}
    <main
        class="container bg-card pt-8 shadow-main-bg-light-christmas-mobile dark:shadow-main-bg-dark-christmas-mobile sm:shadow-main-bg-light-christmas sm:dark:shadow-main-bg-dark-christmas"
    >
        <slot />
    </main>
{:else if $holidayStore === SupportedHolidays.NewYears}
    <main
        class="container bg-card pt-8 shadow-main-bg-light-halloween-mobile dark:shadow-main-bg-dark-halloween-mobile sm:shadow-main-bg-light-halloween sm:dark:shadow-main-bg-dark-new-years"
    >
        <slot />
    </main>
{:else}
    <main
        class="container bg-card pt-8 shadow-main-bg-light-mobile dark:shadow-main-bg-dark-mobile sm:shadow-main-bg-light sm:dark:shadow-main-bg-dark"
    >
        <slot />
    </main>
{/if}
