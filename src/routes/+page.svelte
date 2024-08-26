<script lang="ts">
    import DescriptiveCard from "$lib/components/jay/descriptive-card/descriptive-card.svelte";
    import NavBar from "$lib/components/jay/nav-bar/nav-bar.svelte";
    import PageSheet from "$lib/components/jay/page-sheet/page-sheet.svelte";
    import PageContainer from "$lib/components/jay/page-container/page-container.svelte";
    import * as Command from "$lib/components/ui/command";
    import {
        holidayStore,
        musicPlayingStore,
        SupportedHolidays,
        playThemedHolidayMusic,
    } from "../stores/holiday-store";
    import { Separator } from "$lib/components/ui/separator";
    import { Button } from "$lib/components/ui/button";
    import { base } from "$app/paths";
    import { toggleMode } from "mode-watcher";

    // Images
    import acfcImage from "$lib/images/acfc1.webp?enhanced";
    import bdpt1Image from "$lib/images/bdpt1.webp?enhanced";
    import bbros1Image from "$lib/images/bbros1.webp?enhanced";
    import gdLocalHistoryImage from "$lib/images/gdlocalhistory.png?enhanced";
    import jrCat1Image from "$lib/images/jrcat1.png?enhanced";
    import squireImage from "$lib/images/squire.png?enhanced";

    // Icons
    import {
        Linkedin,
        Github,
        Joystick,
        Layers,
        Swords,
        Moon,
        Sun,
        Disc,
        Disc3,
        NotepadText,
    } from "lucide-svelte";
</script>

<svelte:head>
    <title>Portfolio - Jayden Sipe</title>
    <meta
        name="description"
        content="Explore my portfolio, where you can delve into my array of game development and personal projects, as well as review my professional experience as a developer."
    />
</svelte:head>

<!-- Header -->
<header class="text-center max-w-5xl">
    <h1 class="text-7xl sm:text-9xl pt-20 pb-8 font-medium">
        <span class="text-gray-500">./</span> Jayden
        <span class="text-red-700 dark:text-red-600">Sipe</span>
    </h1>
    <p class="mx-8 pb-8">
        Explore my <span class="font-semibold">portfolio</span>, where you can
        delve into my array of
        <span class="font-semibold">game development</span>
        and <span class="font-semibold">personal projects</span>, as well as
        review my
        <span class="font-semibold">professional experience</span> as a developer.
    </p>
    {#if $holidayStore === SupportedHolidays.Halloween}
        <div class="pb-8">
            <p>- 🎃 Happy Halloween! 🎃 -</p>
            {#if $musicPlayingStore}
                <p>
                    🎶 © Music was created and is owned by <a
                        class="hyperlink"
                        href="https://www.valvesoftware.com/en/"
                        >Valve Corporation</a
                    >.🎶
                </p>
            {/if}
        </div>
    {:else if $holidayStore === SupportedHolidays.Christmas}
        <p class="pb-8">- 🎄 Happy Holidays! 🎄 -</p>
    {:else if $holidayStore === SupportedHolidays.NewYears}
        <p class="pb-8">- 🎊 Happy New Years! 🎊 -</p>
    {:else}
        <p class="pb-8">
            - Made with <a
                class="hyperlink"
                href="https://kit.svelte.dev/"
                target="_blank">SvelteKit</a
            > -
        </p>
    {/if}
</header>

<!-- Command Bar -->
<Command.Root class="rounded-lg border shadow-md max-w-80 sm:max-w-[450px]">
    <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        <Command.Group heading="Actions">
            {#if $holidayStore !== SupportedHolidays.None && $holidayStore !== SupportedHolidays.NewYears}
                <Command.Item
                    onSelect={() => playThemedHolidayMusic()}
                    class="cursor-pointer"
                >
                    <div class="flex flex-row items-center m-1 sm:m-0">
                        {#if $musicPlayingStore}
                            <Disc3 class="mr-2 h-4 w-4 scale-100 absolute" />
                            <span class="ml-6">Stop Holiday Themed Music</span>
                        {:else}
                            <Disc class="mr-2 h-4 w-4 scale-100 absolute" />
                            <span class="ml-6">Play Holiday Themed Music</span>
                        {/if}
                    </div>
                </Command.Item>
            {/if}
            <Command.Item onSelect={toggleMode} class="cursor-pointer">
                <div class="flex flex-row items-center m-1 sm:m-0">
                    <Sun class="mr-2 h-4 w-4 scale-100 dark:scale-0 absolute" />
                    <Moon
                        class="mr-2 h-4 w-4 scale-0 dark:scale-100 absolute"
                    />
                    <span class="ml-6">Toggle Dark Mode</span>
                </div>
            </Command.Item>
        </Command.Group>
        <Command.Group heading="Experience">
            <Command.Item class="cursor-pointer">
                <a
                    class="flex flex-row items-center m-1 sm:m-0 w-full"
                    href="https://jaydensipe.github.io/JaydenSipeResume.pdf"
                    target="_blank"
                >
                    <NotepadText class="mr-2 h-4 w-4" />
                    <span>Resume</span>
                </a>
            </Command.Item>
        </Command.Group>
        <Command.Group heading="Links">
            <Command.Item class="cursor-pointer">
                <a
                    class="flex flex-row items-center m-1 sm:m-0 w-full"
                    href="https://github.com/jaydensipe"
                    target="_blank"
                >
                    <Github class="mr-2 h-4 w-4" />
                    <span>GitHub</span>
                </a>
            </Command.Item>
            <Command.Item class="cursor-pointer">
                <a
                    class="flex flex-row items-center m-1 sm:m-0 w-full"
                    href="https://www.linkedin.com/in/jaydensipe/"
                    target="_blank"
                >
                    <Linkedin class="mr-2 h-4 w-4" />
                    <span>LinkedIn</span>
                </a>
            </Command.Item>
            <Command.Item class="cursor-pointer">
                <a
                    class="flex flex-row items-center m-1 sm:m-0 w-full"
                    href="https://jaydensippy.itch.io/"
                    target="_blank"
                >
                    <Joystick class="mr-2 h-4 w-4" />
                    <span>itch.io</span>
                </a>
            </Command.Item>
        </Command.Group>
    </Command.List>
</Command.Root>

<Separator class="my-16"></Separator>

<!-- Main Container -->
<PageContainer>
    <NavBar onMainPage={true} />

    <section id="about">
        <blockquote class="mt-6 mb-4 border-l-2 pl-6 italic">
            Since an early age, I have been mesmerized by computers and the
            limitless things you can create with them. Around this time, I also
            began gaming which only further boosted my curiosity about
            computers. I love how games can be used to tell an interactive story
            and appreciate all genres. Some personal favorites include
            Half-Life: Alyx, Life is Strange, Team Fortress 2, It Takes Two,
            Psychonauts, Hellblade: Senua's Sacrifice, Hades, The Forest,
            Garry's Mod, Minecraft, Bioshock Infinite and many more that, if
            listed, will fill this entire page. <br /> <br /> While games are, perhaps,
            a more expressive way of demonstrating software development and programming,
            I strive to advance my knowledge in all areas of computer science.
        </blockquote>

        <p class="text-center">
            Currently <i>employed</i> as a <b>Software Engineer</b>.
        </p>
    </section>

    <Separator id="games" class="my-12" />

    <!-- Games -->
    <section>
        <h2
            class="tracking-wide text-center font-bold text-4xl italic bg-rose-50 dark:bg-stone-700 p-4"
        >
            <span class="font-black text-rose-600">Games</span> I have worked on
            over the years...
        </h2>
        <br />
        <p class="text-center sm:mx-32 mb-8">
            These are the latest <a href="{base}/games" class="hyperlink"
                >games</a
            > I have worked on in my own time to better master game development and
            programming techniques. These games were created with various game engines.
        </p>
        <div class="flex flex-wrap flex-shrink-0 flex-grow-0 justify-center">
            <DescriptiveCard
                name="A Concoction for <br/> Creeps"
                link="https://jaydensippy.itch.io/a-concoction-for-creeps"
                imgSrc={acfcImage}
                altImageText="A Concoction for Creeps Game Image"
                githubLink="https://github.com/jaydensipe/A-Concoction-For-Creeps"
                description="A game also made in two weeks for the Pirate Software - Game Jam 15, made using Godot."
            ></DescriptiveCard>
            <DescriptiveCard
                name="Burning Down Peasant Town"
                link="https://jaydensippy.itch.io/burning-down-peasant-town"
                imgSrc={bdpt1Image}
                altImageText="Burning Down Peasant Town Game Image"
                githubLink="https://github.com/jaydensipe/Burning-Down-Peasant-Town"
                description="A game made in two weeks for the Pirate Software - Game Jam 14, made using the Godot game engine."
            ></DescriptiveCard>
            <DescriptiveCard
                name="Bombah Bros"
                githubLink="https://github.com/jaydensipe/Bombah-Bros"
                imgSrc={bbros1Image}
                altImageText="Bombah Bros Game Image"
                description="A W.I.P. multiplayer game made in the Godot game engine, similar to Super Smash Bros."
            ></DescriptiveCard>
        </div>

        <div class="flex justify-center my-8">
            <Button variant="outline" href="{base}/games"
                ><Swords strokeWidth="1.5" class="mr-2" />View More Games</Button
            >
        </div>
    </section>

    <Separator id="personal-projects" class="hidden sm:block my-16" />

    <!-- Personal Projects -->
    <section>
        <h2
            class="tracking-wide text-center font-bold text-4xl italic bg-cyan-50 dark:bg-gray-700 p-4"
        >
            <span class="font-black text-cyan-600">Personal Projects</span> I have
            finished over the years...
        </h2>
        <br />
        <p class="text-center sm:mx-32 mb-8">
            These are the latest of the random <a
                class="hyperlink"
                href="{base}/personal-projects">personal projects</a
            > I have finished. These may come from personal projects I have completed
            myself, or with the aid of an online course.
        </p>
        <div class="flex flex-wrap flex-shrink-0 flex-grow-0 justify-center">
            <DescriptiveCard
                name="GD Local History"
                link="https://godotengine.org/asset-library/asset/3266"
                imgSrc={gdLocalHistoryImage}
                altImageText="GD Local History Project Image"
                githubLink="https://github.com/jaydensipe/GD-Local-History"
                description="A local code history plugin for Godot, similar to those found in many IDEs."
                noFillBgColor="bg-gray-100 p-1"
            ></DescriptiveCard>
            <DescriptiveCard
                name="Jay's Reusable Components and <br/> Things"
                imgSrc={jrCat1Image}
                altImageText="Jay's Reusable Components and Things Personal Project Image"
                githubLink="https://github.com/jaydensipe/Jays-Reusable-Components-and-Things"
                description="A package of reusable components and random things for the Godot game engine."
                noFillBgColor="bg-red-100"
            ></DescriptiveCard>
            <DescriptiveCard
                name="Squire AI"
                imgSrc={squireImage}
                altImageText="Squire AI Personal Project Image"
                githubLink="https://github.com/jaydensipe/Squire-AI"
                description="P.O.C. AI assistant using ChatGPT integration, created for my Text Information Systems course."
                noFillBgColor="bg-blue-100 p-4"
            ></DescriptiveCard>
        </div>

        <div class="flex justify-center my-8 mb-16">
            <Button variant="outline" href="{base}/personal-projects"
                ><Layers strokeWidth="1.5" class="mr-2" />View More Projects</Button
            >
        </div>
    </section>
</PageContainer>

<!-- Sheet -->
<PageSheet></PageSheet>
