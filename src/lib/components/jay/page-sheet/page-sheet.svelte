<script lang="ts">
    import { base } from "$app/paths";
    import { page } from "$app/state";
    import DarkModeSwitcher from "../dark-mode-switcher/dark-mode-switcher.svelte";
    import {
        Menu,
        ArrowLeftCircle,
        Github,
        Joystick,
        Linkedin,
        ArrowRightToLine,
        NotepadText,
        Layers,
        Swords,
    } from "@lucide/svelte";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import * as Sheet from "$lib/components/ui/sheet";
    import { toggleMode } from "mode-watcher";
</script>

<Sheet.Root>
    <Sheet.Trigger
        aria-label="Open Menu"
        class="bg-card/50 shadow-lg backdrop-blur-lg rounded-md p-2 flex flex-row gap-2 decoration-trasparent hyperlink fixed left-4 top-4"
        ><Menu></Menu><ArrowRightToLine></ArrowRightToLine></Sheet.Trigger
    >
    <Sheet.Content side="left" class="bg-background">
        <Sheet.Header>
            <Sheet.Title
                ><div
                    class="flex flex-row gap-2 items-center text-sm sm:text-lg font-bold"
                >
                    <a class="hyperlink" href="{base}/"
                        ><ArrowLeftCircle></ArrowLeftCircle></a
                    >{page.url.pathname.toUpperCase()}
                </div></Sheet.Title
            >
            <Sheet.Description>
                <div class="flex flex-col gap-5 items-start p-4">
                    <ul class="py-3">
                        {#if page.url.pathname == "/games"}
                            <li>
                                <a href="{base}/personal-projects">
                                    <p
                                        class="flex flex-row items-center hyperlink decoration-transparent text-lg"
                                    >
                                        Personal Projects
                                        <Layers
                                            strokeWidth="1.5"
                                            class="ml-2"
                                        />
                                    </p>
                                </a>
                            </li>
                        {:else if page.url.pathname == "/personal-projects"}
                            <li>
                                <a href="{base}/games">
                                    <p
                                        class="flex flex-row items-center hyperlink decoration-transparent text-lg"
                                    >
                                        Games
                                        <Swords
                                            strokeWidth="1.5"
                                            class="ml-2"
                                        />
                                    </p>
                                </a>
                            </li>
                        {:else if page.url.pathname == "/"}
                            <li>
                                <a href="{base}/games">
                                    <p
                                        class="flex flex-row items-center hyperlink decoration-transparent text-lg"
                                    >
                                        Games
                                        <Swords
                                            strokeWidth="1.5"
                                            class="ml-2"
                                        />
                                    </p>
                                </a>
                            </li>
                            <li>
                                <a href="{base}/personal-projects">
                                    <p
                                        class="flex flex-row items-center hyperlink decoration-transparent text-lg"
                                    >
                                        Personal Projects
                                        <Layers
                                            strokeWidth="1.5"
                                            class="ml-2"
                                        />
                                    </p>
                                </a>
                            </li>
                        {/if}
                        <a
                            href="https://jaydensipe.github.io/JaydenSipeResume.pdf"
                            target="_blank"
                        >
                            <span
                                class="flex flex-row gap-2 items-center hyperlink decoration-transparent text-lg"
                            >
                                <p>Resume</p>
                                <NotepadText strokeWidth="1.5" />
                            </span>
                        </a>
                    </ul>

                    <Separator></Separator>

                    <div class="flex flex-row gap-8">
                        <a href="https://github.com/jaydensipe" target="_blank"
                            ><Github
                                class="text-muted-foreground hyperlink cursor-pointer hover:scale-105"
                                strokeWidth="1.5"
                            /></a
                        >
                        <a
                            href="https://www.linkedin.com/in/jaydensipe/"
                            target="_blank"
                            ><Linkedin
                                class="text-muted-foreground hyperlink cursor-pointer hover:scale-105"
                                strokeWidth="1.5"
                            /></a
                        >
                        <a href="https://jaydensippy.itch.io/" target="_blank"
                            ><Joystick
                                class="text-muted-foreground hyperlink cursor-pointer hover:scale-105"
                                strokeWidth="1.5"
                            /></a
                        >
                        <!-- svelte-ignore a11y_click_events_have_key_events -->
                        <!-- svelte-ignore a11y_no_static_element_interactions -->
                        <div
                            onclick={toggleMode}
                            class="hyperlink right-16 absolute cursor-pointer"
                        >
                            <DarkModeSwitcher></DarkModeSwitcher>
                        </div>
                    </div>
                </div>
            </Sheet.Description>
        </Sheet.Header>
    </Sheet.Content>
</Sheet.Root>
