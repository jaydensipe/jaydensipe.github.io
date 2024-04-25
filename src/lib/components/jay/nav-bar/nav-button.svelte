<script lang="ts">
    export let name: string;
    export let link: string = "";
</script>

<li>
    <a
        class="transition ease-in-out hover:bg-white hover:text-red-500 motion-safe:hover:skew-x-3 duration-150 p-6 block"
        href={link}>{name}</a
    >
</li>
