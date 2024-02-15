<script lang="ts">
    import {
        Menu,
        ArrowLeftToLine,
        Github,
        Joystick,
        Linkedin,
        Moon,
        Sun,
        ArrowRightToLine,
    } from "lucide-svelte";
    import * as Sheet from "$lib/components/ui/sheet";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import { base } from "$app/paths";
    import { page } from "$app/stores";
    import { toggleMode } from "mode-watcher";
</script>

<Sheet.Root>
    <Sheet.Trigger
        class="bg-card bg-opacity-50 shadow-lg backdrop-blur-lg rounded-md p-2 flex flex-row gap-2 decoration-trasparent hyperlink fixed left-4 top-4"
        ><Menu></Menu><ArrowRightToLine></ArrowRightToLine></Sheet.Trigger
    >
    <Sheet.Content side="left">
        <Sheet.Header>
            <Sheet.Title
                ><div class="flex flex-row gap-2 items-center">
                    <a class="hyperlink" href="{base}/"
                        ><ArrowLeftToLine></ArrowLeftToLine></a
                    >{$page.url.pathname.toUpperCase()}
                </div></Sheet.Title
            >
            <Sheet.Description>
                <div class="flex flex-col gap-6 items-start p-4">
                    {#if $page.url.pathname == "/games"}
                        <a href="{base}/personal-projects">
                            <p class="hyperlink decoration-transparent text-lg">
                                Personal Projects
                            </p>
                        </a>
                    {:else if $page.url.pathname == "/personal-projects"}
                        <a href="{base}/games">
                            <p class="hyperlink decoration-transparent text-lg">
                                Games
                            </p>
                        </a>
                    {:else if $page.url.pathname == "/"}
                        <a href="{base}/games">
                            <p class="hyperlink decoration-transparent text-lg">
                                Games
                            </p>
                        </a>
                        <a href="{base}/personal-projects">
                            <p class="hyperlink decoration-transparent text-lg">
                                Personal Projects
                            </p>
                        </a>
                    {/if}
                    <a
                        href="https://jaydensipe.github.io/JaydenSipeResume.pdf"
                        target="_blank"
                    >
                        <p class="hyperlink decoration-transparent text-lg">
                            Resume
                        </p>
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
