<script lang="ts">
    import { page } from "$app/state";
    import DarkModeSwitcher from "../dark-mode-switcher/dark-mode-switcher.svelte";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import * as Sheet from "$lib/components/ui/sheet";
    import { toggleMode } from "mode-watcher";
    import { resolve } from "$app/paths";

    // Icons
    import { Menu, ArrowRightToLine } from "@lucide/svelte";
    import Laptop from "virtual:icons/solar/laptop-linear";
    import Layers from "virtual:icons/solar/layers-minimalistic-linear";
    import Document from "virtual:icons/solar/document-text-linear";
    import ItchIo from "virtual:icons/simple-icons/itchdotio";
    import GitHub from "virtual:icons/simple-icons/github";
    import LinkedIn from "virtual:icons/simple-icons/linkedin";
    import Left from "virtual:icons/solar/arrow-left-bold";
</script>

<Sheet.Root>
    <Sheet.Trigger
        aria-label="Open Menu"
        class="bg-card/50 shadow-lg backdrop-blur-lg rounded-md p-2 flex flex-row gap-2 decoration-trasparent hyperlink fixed left-4 top-4"
        ><Menu /><ArrowRightToLine /></Sheet.Trigger
    >
    <Sheet.Content side="left" class="bg-background">
        <Sheet.Header>
            <Sheet.Title
                ><div
                    class="flex flex-row gap-2 items-center text-sm sm:text-lg font-bold"
                >
                    <a class="hyperlink" href={resolve("/")}><Left /></a
                    >{page.url.pathname.toUpperCase()}
                </div></Sheet.Title
            >
            <Sheet.Description>
                <div class="flex flex-col gap-5 items-start p-4">
                    <ul class="py-3">
                        {#if page.url.pathname == "/games"}
                            <li>
                                <a href={resolve("/personal-projects")}>
                                    <p
                                        class="flex flex-row items-center hyperlink decoration-transparent text-lg"
                                    >
                                        Personal Projects
                                        <Layers class="ml-2" />
                                    </p>
                                </a>
                            </li>
                        {:else if page.url.pathname == "/personal-projects"}
                            <li>
                                <a href={resolve("/games")}>
                                    <p
                                        class="flex flex-row items-center hyperlink decoration-transparent text-lg"
                                    >
                                        Games
                                        <Laptop class="ml-2" />
                                    </p>
                                </a>
                            </li>
                        {:else if page.url.pathname == "/"}
                            <li>
                                <a href={resolve("/games")}>
                                    <p
                                        class="flex flex-row items-center hyperlink decoration-transparent text-lg"
                                    >
                                        Games
                                        <Laptop class="ml-2" />
                                    </p>
                                </a>
                            </li>
                            <li>
                                <a href={resolve("/personal-projects")}>
                                    <p
                                        class="flex flex-row items-center hyperlink decoration-transparent text-lg"
                                    >
                                        Personal Projects
                                        <Layers class="ml-2" />
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
                                <Document />
                            </span>
                        </a>
                    </ul>

                    <Separator></Separator>

                    <div class="flex flex-row gap-8">
                        <a href="https://github.com/jaydensipe" target="_blank"
                            ><GitHub
                                class="scale-125 text-muted-foreground hyperlink cursor-pointer hover:scale-130"
                            /></a
                        >
                        <a
                            href="https://www.linkedin.com/in/jaydensipe/"
                            target="_blank"
                            ><LinkedIn
                                class="scale-125 text-muted-foreground hyperlink cursor-pointer hover:scale-130"
                            /></a
                        >
                        <a href="https://jaydensippy.itch.io/" target="_blank"
                            ><ItchIo
                                class="scale-125 text-muted-foreground hyperlink cursor-pointer hover:scale-130"
                            /></a
                        >
                        <!-- svelte-ignore a11y_click_events_have_key_events -->
                        <!-- svelte-ignore a11y_no_static_element_interactions -->
                        <div
                            onclick={toggleMode}
                            class="hyperlink right-16 absolute cursor-pointer"
                        >
                            <DarkModeSwitcher big />
                        </div>
                    </div>
                </div>
            </Sheet.Description>
        </Sheet.Header>
    </Sheet.Content>
</Sheet.Root>
