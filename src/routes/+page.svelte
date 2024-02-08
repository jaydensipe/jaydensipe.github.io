<script lang="ts">
    import DescriptiveCard from "$lib/components/jay/descriptive-card/descriptive-card.svelte";
    import NavBar from "$lib/components/jay/nav-bar/nav-bar.svelte";

    import * as Command from "$lib/components/ui/command";
    import { Github, Linkedin, Gamepad2 } from "lucide-svelte";
    import { Separator } from "$lib/components/ui/separator";
</script>

<head>
    <title>Portfolio - Jayden Sipe</title>
</head>

<body class="container mx-auto flex flex-col items-center">
    <!-- Header -->
    <header class="text-center">
        <h1 class="pt-16 pb-8 text-9xl">
            <span class="text-gray-500">./</span> Jayden Sipe
        </h1>
        <p class="mx-60 pb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            magnam molestias suscipit harum temporibus dolorum eligendi incidunt
            repudiandae reprehenderit commodi. Iure commodi ab rerum et aliquid
            explicabo soluta quis cupiditate?
        </p>
        <p class="pb-8">
            - Made with <a href="https://kit.svelte.dev/">SvelteKit</a> -
        </p>
    </header>

    <!-- Command Bar -->
    <Command.Root class="rounded-lg border shadow-md max-w-[450px]">
        <Command.Input placeholder="Type a query to search..." />
        <Command.List>
            <Command.Empty>No results found.</Command.Empty>
            <Command.Group heading="Links">
                <a href="https://github.com/jaydensipe"
                    ><Command.Item class="cursor-pointer">
                        <Github class="mr-2 h-4 w-4" />
                        <span>GitHub</span>
                    </Command.Item>
                </a>
                <a href="https://www.linkedin.com/in/jaydensipe/">
                    <Command.Item class="cursor-pointer">
                        <Linkedin class="mr-2 h-4 w-4" />
                        <span>LinkedIn</span>
                    </Command.Item>
                </a>
                <a href="https://jaydensippy.itch.io/">
                    <Command.Item class="cursor-pointer">
                        <Gamepad2 class="mr-2 h-4 w-4" />
                        <span>itch.io</span>
                    </Command.Item>
                </a>
            </Command.Group>
        </Command.List>
    </Command.Root>

    <Separator class="my-16" />

    <!-- Main Container -->
    <main class="container bg-white pt-8 shadow-main-bg-light">
        <NavBar />

        <div>
            <blockquote class="mt-6 mb-4 border-l-2 pl-6 italic">
                Since a young age, I have been mesmerized by computers and the
                limitless things you can create with them. Around this time, I
                also began gaming which only further boosted my curiosity about
                computers. I greatly love how games can be used to tell an
                interactive story and appreciate all genres. Some personal
                favorites include: Half-Life: Alyx, Life is Strange, Team
                Fortress 2, It Takes Two, Psychonauts, Hellblade: Senua's
                Sacrifice, Hades, The Forest, Garry's Mod, Minecraft, Bioshock
                Infinite and many more that, if listed, will fill this entire
                page. <br /><br />
                While games are perhaps a more expressive way of demonstrating software
                development and programming, I strive to advance my knowledge in
                all areas of computer science.
            </blockquote>

            <p class="text-center">
                Currently employed as a <b>Software Engineer</b>.
            </p>
        </div>

        <Separator class="my-12" />

        <!-- Games -->
        <article>
            <h2 class="text-center font-bold text-4xl italic">
                Games I have worked on over the years...
            </h2>
            <br />
            <p class="text-center mx-32 mb-8">
                These are some of the games I have worked on in my own time to
                better learn game development and programming techniques. These
                games were created with various game engines.
            </p>

            <div
                class="flex flex-wrap flex-shrink-0 flex-grow-0 justify-center"
            >
                <DescriptiveCard
                    name="Splorer"
                    link="https://jaydensipe.github.io/splorer/"
                    imageName="splorerpic.webp"
                    githubLink="https://github.com/jaydensipe/Splorer"
                    description="A simple game made in WebGL, hosted on a custom web page, made for my Computer Graphics class."
                ></DescriptiveCard>

                <DescriptiveCard
                    name="Solyanka"
                    link="images/solyankaexperimentvideo.mp4"
                    imageName="indevpic1.webp"
                    description="Experimental game created while learning Unreal Engine 4, using Blueprints."
                ></DescriptiveCard>

                <DescriptiveCard
                    name="IsoArcher"
                    link="https://jaydensippy.itch.io/isoarcher"
                    imageName="isoarcherpic.webp"
                    githubLink="https://github.com/jaydensipe/IsoArcher"
                    description="A collaborative game created with my friend Stephen, made in the Godot game engine using C#."
                ></DescriptiveCard>
            </div>
        </article>

        <Separator class="my-16" />

        <!-- Personal Projects -->
        <article>
            <h2 class="text-center font-bold text-4xl italic">
                Personal Projects I have finished over the years...
            </h2>
            <br />
            <p class="text-center mx-32 mb-8">
                These are some of the random personal projects I have finished.
                These may come from personal projects I have completed myself,
                or with the assistance of an online course.
            </p>
            <div
                class="flex flex-wrap flex-shrink-0 flex-grow-0 justify-center"
            >
                <DescriptiveCard
                    name="Splorer"
                    link="https://jaydensipe.github.io/splorer/"
                    imageName="splorerpic.webp"
                    githubLink="https://github.com/jaydensipe/Splorer"
                    description="A simple game made in WebGL, hosted on a custom web page, made for my Computer Graphics class."
                ></DescriptiveCard>

                <DescriptiveCard
                    name="Solyanka"
                    link="images/solyankaexperimentvideo.mp4"
                    imageName="indevpic1.webp"
                    githubLink="https://github.com/jaydensipe/Splorer"
                    description="Experimental game created while learning Unreal Engine 4, using Blueprints."
                ></DescriptiveCard>

                <DescriptiveCard
                    name="IsoArcher"
                    link="https://jaydensippy.itch.io/isoarcher"
                    imageName="isoarcherpic.webp"
                    githubLink="https://github.com/jaydensipe/IsoArcher"
                    description="A collaborative game created with my friend Stephen, made in the Godot game engine using C#."
                ></DescriptiveCard>
            </div>
        </article>

        <Separator class="my-16" />
    </main>
</body>
