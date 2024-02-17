<script lang="ts">
    import DescriptiveCard from "$lib/components/jay/descriptive-card/descriptive-card.svelte";
    import NavBar from "$lib/components/jay/nav-bar/nav-bar.svelte";

    import * as Command from "$lib/components/ui/command";
    import {
        Github,
        Linkedin,
        Joystick,
        LibraryBig,
        Gamepad2,
        Moon,
        Sun,
    } from "lucide-svelte";
    import { Separator } from "$lib/components/ui/separator";
    import { Button } from "$lib/components/ui/button";
    import { base } from "$app/paths";
    import { toggleMode } from "mode-watcher";
    import PageSheet from "$lib/components/jay/page-sheet/page-sheet.svelte";
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
    <h1 class="text-7xl sm:text-9xl pt-16 pb-8 font-medium">
        <span class="text-gray-500">./</span> Jayden
        <span class="text-red-800 dark:text-red-600 on">Sipe</span>
    </h1>
    <p class="mx-8 pb-8">
        Explore my <span class="font-semibold">portfolio</span>, where you can
        delve into my array of
        <span class="font-semibold">game development</span>
        and <span class="font-semibold">personal projects</span>, as well as
        review my
        <span class="font-semibold">professional experience</span> as a developer.
    </p>
    <p class="pb-8">
        - Made with <a
            class="hyperlink"
            href="https://kit.svelte.dev/"
            target="_blank">SvelteKit</a
        > -
    </p>
</header>

<!-- Command Bar -->
<Command.Root class="rounded-lg border shadow-md max-w-80 sm:max-w-[450px]">
    <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        <Command.Group heading="Actions">
            <Command.Item onSelect={toggleMode} class="cursor-pointer">
                <Sun class="mr-2 h-4 w-4 scale-100 dark:scale-0 absolute" />
                <Moon class="mr-2 h-4 w-4 scale-0 dark:scale-100 absolute" />
                <span class="ml-6">Toggle Dark Mode</span>
            </Command.Item></Command.Group
        >
        <Command.Group heading="Links">
            <a href="https://github.com/jaydensipe" target="_blank"
                ><Command.Item class="cursor-pointer">
                    <Github class="mr-2 h-4 w-4" />
                    <span>GitHub</span>
                </Command.Item>
            </a>
            <a href="https://www.linkedin.com/in/jaydensipe/" target="_blank">
                <Command.Item class="cursor-pointer">
                    <Linkedin class="mr-2 h-4 w-4" />
                    <span>LinkedIn</span>
                </Command.Item>
            </a>
            <a href="https://jaydensippy.itch.io/" target="_blank">
                <Command.Item class="cursor-pointer">
                    <Joystick class="mr-2 h-4 w-4" />
                    <span>itch.io</span>
                </Command.Item>
            </a>
        </Command.Group>
    </Command.List>
</Command.Root>

<Separator class="my-16"></Separator>

<!-- Main Container -->
<main>
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
            <span class="font-extrabold text-rose-600">Games</span> I have worked
            on over the years...
        </h2>
        <br />
        <p class="text-center sm:mx-32 mb-8">
            These are the latest games I have worked on in my own time to better
            master game development and programming techniques. These games were
            created with various game engines.
        </p>

        <div class="flex flex-wrap flex-shrink-0 flex-grow-0 justify-center">
            <DescriptiveCard
                name="B. D. P. T."
                link="https://jaydensippy.itch.io/burning-down-peasant-town"
                imageName="bdpt1.webp"
                altImageText="Burning Down Peasant Town Game Image"
                githubLink="https://github.com/jaydensipe/Burning-Down-Peasant-Town"
                description="A game made in two weeks for the Pirate Software - Game Jam 14, made using the Godot game engine."
            ></DescriptiveCard>

            <DescriptiveCard
                name="Bombah Bros"
                githubLink="https://github.com/jaydensipe/Squire-AI"
                imageName="bbros1.jpg"
                altImageText="Bombah Bros Game Image"
                description="A W.I.P. multiplayer game made in the Godot game engine, similar to Super Smash Bros."
            ></DescriptiveCard>

            <DescriptiveCard
                name="Splorer"
                link="https://jaydensipe.github.io/splorer/"
                imageName="splorerpic.webp"
                altImageText="Splorer Game Image"
                githubLink="https://github.com/jaydensipe/Splorer"
                description="A simple game made in WebGL, hosted on a custom web page; made for my Computer Graphics course."
            ></DescriptiveCard>
        </div>

        <div class="flex justify-center my-8">
            <Button variant="outline" href="{base}/games"
                ><Gamepad2 strokeWidth="1.5" class="mr-2" />View More Games</Button
            >
        </div>
    </section>

    <Separator id="personal-projects" class="my-16" />

    <!-- Personal Projects -->
    <section>
        <h2
            class="tracking-wide text-center font-bold text-4xl italic bg-cyan-50 dark:bg-gray-700 p-4"
        >
            <span class="font-extrabold text-cyan-600">Personal Projects</span> I
            have finished over the years...
        </h2>
        <br />
        <p class="text-center sm:mx-32 mb-8">
            These are the latest of the random personal projects I have
            finished. These may come from personal projects I have completed
            myself, or with the aid of an online course.
        </p>
        <div class="flex flex-wrap flex-shrink-0 flex-grow-0 justify-center">
            <DescriptiveCard
                name="Jay's Reusable Components and Things"
                imageName="jrcat1.svg"
                altImageText="Jay's Reusable Components and Things Personal Project Image"
                githubLink="https://github.com/jaydensipe/Jays-Reusable-Components-and-Things"
                description="A package of reusable components and random things for the Godot game engine."
                noFillBgColor="bg-red-100"
            ></DescriptiveCard>
            <DescriptiveCard
                name="Squire AI"
                imageName="squire.svg"
                altImageText="Squire AI Personal Project Image"
                githubLink="https://github.com/jaydensipe/Squire-AI"
                description="P.O.C. AI assistant using ChatGPT integration, created for my Text Information Systems course."
                noFillBgColor="bg-blue-100 p-4"
            ></DescriptiveCard>

            <DescriptiveCard
                name="Narrative Visualization Exploration"
                link="{base}/narrative-visualization/index.html"
                imageName="nve.svg"
                altImageText="Narrative Visualization Exploration Personal Project Image"
                githubLink="https://github.com/jaydensipe/Narrative-Visualization-Exploration"
                description="An exploration into data visualization techniques, for my Data Visualization course."
                noFillBgColor="bg-green-100 p-1"
            ></DescriptiveCard>
        </div>

        <div class="flex justify-center my-8 mb-16">
            <Button variant="outline" href="{base}/personal-projects"
                ><LibraryBig strokeWidth="1.5" class="mr-2" />View More Projects</Button
            >
        </div>
    </section>
</main>

<!-- Sheet -->
<PageSheet></PageSheet>
