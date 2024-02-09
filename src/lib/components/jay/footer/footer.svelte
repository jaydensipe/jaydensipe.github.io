<script lang="ts">
    import { Github, Linkedin, Joystick } from "lucide-svelte";

    let year = new Date().getFullYear();
</script>

<footer class="flex flex-col gap-4 my-16 justify-center">
    <div class="flex flex-row gap-8">
        <a class="text-muted-foreground" href="mailto: work@jaydensipe.com"
            >work@jaydensipe.com</a
        >
        <Github class="text-muted-foreground" />
        <Linkedin class="text-muted-foreground" />
        <Joystick class="text-muted-foreground" />
    </div>
    <p class="text-muted-foreground text-center">
        &copy; {year} Jayden Sipe. All rights reserved.
    </p>
</footer>
