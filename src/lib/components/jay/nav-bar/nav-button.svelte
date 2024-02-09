<script lang="ts">
    export let name: string;
    export let link: string = "";
</script>

<li>
    <a
        class="transition ease-in-out delay-50 hover:font-medium hover:bg-white duration-300 p-6 block"
        href={link}>{name}</a
    >
</li>
