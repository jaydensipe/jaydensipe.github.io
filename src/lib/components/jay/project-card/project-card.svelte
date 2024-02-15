<script lang="ts">
    import { base } from "$app/paths";

    export let name: string;
    export let language: string;
    export let githubLink: string = "";
    export let imageName: string;
    export let altImageText: string;
    export let description: string;
</script>

<div class="pt-4">
    <img
        class="float-left max-w-40 max-h-40 sm:max-w-80 sm:max-h-80 p-4"
        src="{base}/images/{imageName}"
        alt={altImageText}
    />
    <div class="text-right mt-4 sm:mt-8">
        <span class="card-title text-sm sm:text-xl"
            ><a
                class="hyperlink underline-offset-4 text-cyan-700"
                href={githubLink}
            >
                {name}</a
            >
            made with <i class="text-cyan-700">{language}</i></span
        >
        <p class="mt-4 text-sm sm:text-base">
            {description}
        </p>
    </div>
</div>
