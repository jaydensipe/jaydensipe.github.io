<script lang="ts">
    export let name: string;
    export let color: string;
</script>

<header
    class="text-center max-w-5xl bg-card bg-opacity-50 backdrop-blur-lg rounded-md p-4 sm:p-6 decoration-trasparent mt-16"
>
    <h1 class="text-7xl sm:text-8xl font-bold {color}">
        {name}
    </h1>
</header>
