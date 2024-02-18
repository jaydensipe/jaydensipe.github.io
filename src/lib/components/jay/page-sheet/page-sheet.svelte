<script lang="ts">
    import {
        Menu,
        ArrowLeftCircle,
        Github,
        Joystick,
        Linkedin,
        Moon,
        Sun,
        ArrowRightToLine,
        ExternalLink,
        LibraryBig,
        Gamepad2,
    } from "lucide-svelte";
    import * as Sheet from "$lib/components/ui/sheet";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import { base } from "$app/paths";
    import { page } from "$app/stores";
    import { toggleMode } from "mode-watcher";
</script>

<Sheet.Root>
    <Sheet.Trigger
        aria-label="Open Menu"
        class="bg-card bg-opacity-50 shadow-lg backdrop-blur-lg rounded-md p-2 flex flex-row gap-2 decoration-trasparent hyperlink fixed left-4 top-4"
        ><Menu></Menu><ArrowRightToLine></ArrowRightToLine></Sheet.Trigger
    >
    <Sheet.Content side="left">
        <Sheet.Header>
            <Sheet.Title
                ><div
                    class="flex flex-row gap-2 items-center text-sm sm:text-lg"
                >
                    <a class="hyperlink" href="{base}/"
                        ><ArrowLeftCircle></ArrowLeftCircle></a
                    >{$page.url.pathname.toUpperCase()}
                </div></Sheet.Title
            >
            <Sheet.Description>
                <div class="flex flex-col gap-5 items-start p-4">
                    {#if $page.url.pathname == "/games"}
                        <a href="{base}/personal-projects">
                            <p
                                class="flex flex-row items-center hyperlink decoration-transparent text-lg"
                            >
                                <LibraryBig
                                    strokeWidth="1.5"
                                    class="mr-2"
                                />Personal Projects
                            </p>
                        </a>
                    {:else if $page.url.pathname == "/personal-projects"}
                        <a href="{base}/games">
                            <p
                                class="flex flex-row items-center hyperlink decoration-transparent text-lg"
                            >
                                <Gamepad2 strokeWidth="1.5" class="mr-2" />
                                Games
                            </p>
                        </a>
                    {:else if $page.url.pathname == "/"}
                        <a href="{base}/games">
                            <p
                                class="flex flex-row items-center hyperlink decoration-transparent text-lg"
                            >
                                <Gamepad2 strokeWidth="1.5" class="mr-2" />Games
                            </p>
                        </a>
                        <a href="{base}/personal-projects">
                            <p
                                class="flex flex-row items-center hyperlink decoration-transparent text-lg"
                            >
                                <LibraryBig
                                    strokeWidth="1.5"
                                    class="mr-2"
                                />Personal Projects
                            </p>
                        </a>
                    {/if}
                    <a
                        href="https://jaydensipe.github.io/JaydenSipeResume.pdf"
                        target="_blank"
                    >
                        <span
                            class="flex flex-row gap-2 items-center hyperlink decoration-transparent text-lg"
                        >
                            <p>Resume</p>
                            <ExternalLink></ExternalLink>
                        </span>
                    </a>

                    <div class="flex flex-row gap-8">
                        <a href="https://github.com/jaydensipe" target="_blank"
                            ><Github
                                class="text-muted-foreground hyperlink cursor-pointer hover:scale-105"
                            /></a
                        >
                        <a
                            href="https://www.linkedin.com/in/jaydensipe/"
                            target="_blank"
                            ><Linkedin
                                class="text-muted-foreground hyperlink cursor-pointer hover:scale-105"
                            /></a
                        >
                        <a href="https://jaydensippy.itch.io/" target="_blank"
                            ><Joystick
                                class="text-muted-foreground hyperlink cursor-pointer hover:scale-105"
                            /></a
                        >
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-static-element-interactions -->
                        <div
                            on:click={toggleMode}
                            class="hyperlink right-16 absolute cursor-pointer"
                        >
                            <Sun class="scale-100 dark:scale-0 absolute" />
                            <Moon class="scale-0 dark:scale-100 absolute" />
                        </div>
                    </div>
                    <Separator></Separator>
                </div>
            </Sheet.Description>
        </Sheet.Header>
    </Sheet.Content>
</Sheet.Root>
