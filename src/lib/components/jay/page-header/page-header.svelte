<script lang="ts">
    export let name: string;
    export let color: string;
    export let description: string;
</script>

<header class="text-center max-w-5xl">
    <h1 class="text-7xl sm:text-8xl pt-16 pb-8 font-semibold {color}">
        {name}
    </h1>
    <p>
        {description}
    </p>
</header>
