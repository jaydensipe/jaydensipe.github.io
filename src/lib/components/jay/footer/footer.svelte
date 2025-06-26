<script lang="ts">
    import { Github, Linkedin, Joystick } from "@lucide/svelte";

    let year = new Date().getFullYear();
</script>

<footer
    class="flex flex-col gap-4 my-16 items-center justify-center text-sm sm:text-base bg-card/50 backdrop-blur-lg rounded-md p-4 sm:p-6 decoration-trasparent"
>
    <div class="flex flex-row gap-8">
        <a
            class="text-muted-foreground hyperlink decoration-dotted"
            href="mailto: work@jaydensipe.com">work@jaydensipe.com</a
        >
        <a
            href="https://github.com/jaydensipe"
            aria-label="Github Link"
            target="_blank"
            ><Github
                class="text-muted-foreground hyperlink cursor-pointer hover:scale-105"
            /></a
        >
        <a
            href="https://www.linkedin.com/in/jaydensipe/"
            aria-label="LinkedIn Link"
            target="_blank"
            ><Linkedin
                class="text-muted-foreground hyperlink cursor-pointer hover:scale-105"
            /></a
        >
        <a
            href="https://jaydensippy.itch.io/"
            target="_blank"
            aria-label="itch.io Link"
            ><Joystick
                class="text-muted-foreground hyperlink cursor-pointer hover:scale-105"
            /></a
        >
    </div>
    <p class="text-muted-foreground text-center">
        &copy; {year} Jayden Sipe. All rights reserved.
    </p>
</footer>
