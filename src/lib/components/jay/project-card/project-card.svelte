<script lang="ts">
    export let name: string;
    export let language: string;
    export let githubLink: string = "";
    export let imgSrc: string;
    export let altImageText: string;
    export let description: string;

    import Saos from "saos";
</script>

<Saos
    once
    animation={"swing-in-top-fwd 0.45s cubic-bezier(0.230, 1.000, 0.320, 1.000) both"}
>
    <div class="pt-4">
        <div class="float-left max-w-40 max-h-40 sm:max-w-80 sm:max-h-80 p-4">
            <enhanced:img class="rounded-lg" src={imgSrc} alt={altImageText} />
        </div>
        <div class="text-center mt-4 sm:mt-8">
            <span class="card-title text-sm sm:text-xl"
                ><a
                    class="hyperlink underline-offset-4 text-cyan-700 dark:text-cyan-500"
                    href={githubLink}
                >
                    {name}</a
                >
                made with
                <i class="text-cyan-700 dark:text-cyan-500">{language}</i></span
            >
            <p class="mt-4 text-sm sm:text-base">
                {description}
            </p>
        </div>
    </div>
</Saos>
