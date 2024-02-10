<script lang="ts">
    import { Github, Linkedin, Joystick } from "lucide-svelte";

    let year = new Date().getFullYear();
</script>

<footer class="flex flex-col gap-4 my-16 items-center justify-center">
    <div class="flex flex-row gap-8">
        <a
            class="text-muted-foreground hyperlink decoration-dotted"
            href="mailto: work@jaydensipe.com">work@jaydensipe.com</a
        >
        <a href="https://www.linkedin.com/in/jaydensipe/" target="_blank"
            ><Github
                class="text-muted-foreground hyperlink cursor-pointer hover:scale-105"
            /></a
        >
        <a href="https://www.linkedin.com/in/jaydensipe/" target="_blank"
            ><Linkedin
                class="text-muted-foreground hyperlink cursor-pointer hover:scale-105"
            /></a
        >
        <a href="https://jaydensippy.itch.io/" target="_blank"
            ><Joystick
                class="text-muted-foreground hyperlink cursor-pointer hover:scale-105"
            /></a
        >
    </div>
    <p class="text-muted-foreground text-center">
        &copy; {year} Jayden Sipe. All rights reserved.
    </p>
</footer>
