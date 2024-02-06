<script lang="ts">
    export let name: string;
    export let link: string;
    export let imageName: string;
    export let githubLink: string;
    export let description: string;

    import * as Card from "$lib/components/ui/card";
</script>

<div>
    <Card.Root
        class="bg-transparent w-96 h-fit text-center border-0 shadow-none "
    >
        <Card.Header>
            <a href={link}>
                <img
                    class="shadow-lg rounded-lg"
                    src="/images/{imageName}"
                    alt=""
                /></a
            >
            <br />
            <Card.Title
                ><a class="underline decoration-2 underline-offset-2" href={link}> {name}</a> |
                <a class="underline decoration-2 underline-offset-2" href={githubLink}>GitHub</a>
            </Card.Title>
        </Card.Header>
        <Card.Content>
            <p>
                {description}
            </p>
        </Card.Content>
    </Card.Root>
</div>
