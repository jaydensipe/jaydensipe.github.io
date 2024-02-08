<script lang="ts">
    export let name: string;
    export let link: string;
    export let imageName: string;
    export let githubLink: string = "";
    export let description: string;

    import * as Card from "$lib/components/ui/card";
</script>

<div>
    <Card.Root class="bg-transparent w-96 text-center border-0 shadow-none">
        <Card.Header>
            <a class="m-0 p-0" href={link}>
                <img
                    class="w-full shadow-lg rounded-lg hover:scale-110 transition duration-150 ease-in-out"
                    src="/images/{imageName}"
                    alt=""
                /></a
            >
            <br />
            <Card.Title
                ><a
                    class="tracking-wide font-bold underline uppercase underline-offset-4 hover:decoration-red-800"
                    href={link}
                >
                    {name}</a
                >
                {#if githubLink}
                    |
                    <a
                        class="tracking-wide font-bold underline underline-offset-4"
                        href={githubLink}>GitHub</a
                    >
                {/if}
            </Card.Title>
        </Card.Header>
        <Card.Content>
            <p>
                {description}
            </p>
        </Card.Content>
    </Card.Root>
</div>
