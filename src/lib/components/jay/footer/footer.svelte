<script lang="ts">
    let year = new Date().getFullYear();

    // Icons
    import ItchIoLogo from "virtual:icons/simple-icons/itchdotio";
    import GitHubLogo from "virtual:icons/simple-icons/github";
    import LinkedInLogo from "virtual:icons/simple-icons/linkedin";
</script>

<footer
    class="flex flex-col gap-4 my-16 items-center justify-center text-sm sm:text-base bg-card/50 backdrop-blur-lg rounded-md p-4 sm:p-6 decoration-trasparent border"
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
            ><GitHubLogo
                class="text-muted-foreground hyperlink cursor-pointer hover:scale-105"
            /></a
        >
        <a
            href="https://www.linkedin.com/in/jaydensipe/"
            aria-label="LinkedIn Link"
            target="_blank"
            ><LinkedInLogo
                class="text-muted-foreground hyperlink cursor-pointer hover:scale-105"
            /></a
        >
        <a
            href="https://jaydensippy.itch.io/"
            target="_blank"
            aria-label="itch.io Link"
            ><ItchIoLogo
                class="text-muted-foreground hyperlink cursor-pointer hover:scale-105"
            /></a
        >
    </div>
    <p class="text-muted-foreground text-center">
        &copy; {year} Jayden Sipe. All rights reserved.
    </p>
</footer>
