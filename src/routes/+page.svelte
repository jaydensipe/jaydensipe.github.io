<script lang="ts">
    import { ScrollText, FolderGit, Gamepad2 } from "lucide-svelte";
    import * as Command from "$lib/components/ui/command";
    import * as Menubar from "$lib/components/ui/menubar";
    import DescriptiveCard from "$lib/components/ui/custom/descriptive-card.svelte";
    import { Separator } from "$lib/components/ui/separator";
</script>

<div class="container mx-auto flex flex-col items-center">
    <h1 class="pt-16 pb-8 text-9xl">./ Jayden Sipe</h1>
    <p class="mx-60 pb-8 text-center">
        Explore my portfolio to discover a collection of my game and personal
        projects, accompanied by written blog posts detailing their inception
        and development.
    </p>
    <p class="pb-8">
        - Made with <a href="https://kit.svelte.dev/">SvelteKit</a> -
    </p>
    <Command.Root class="rounded-lg border shadow-md max-w-[450px]">
        <Command.Input placeholder="Type a query to search..." />
        <Command.List>
            <Command.Empty>No results found.</Command.Empty>
            <Command.Group heading="Suggestions">
                <Command.Item>
                    <ScrollText class="mr-2 h-4 w-4" />
                    <span>Resume</span>
                </Command.Item>
                <Command.Item>
                    <Gamepad2 class="mr-2 h-4 w-4" />
                    <span>Games</span>
                </Command.Item>
                <Command.Item>
                    <FolderGit class="mr-2 h-4 w-4" />
                    <span>Personal Projects</span>
                </Command.Item>
            </Command.Group>
        </Command.List>
    </Command.Root>
    <Separator class="my-16" />

    <div class="container bg-slate-200">
        <nav class="p-4">
            <a class="text-lg pr-16" href="/html/">About</a>
            <a class="text-lg pr-16" href="/css/">Games</a>
            <a class="text-lg pr-16" href="/js/">Personal Projects</a>
            <a class="text-lg pr-16" href="/python/">Resume</a>
        </nav>
    </div>
    <div class="container bg-slate-400">
        <div>
            <p>
                Since a young age, I have been mesmerized by computers and the
                limitless things you can create with them. Around this time, I
                also began gaming which only further boosted my curiosity about
                computers. I greatly love how games can be used to tell an
                interactive story and appreciate all genres. Some personal
                favorites include: Half-Life: Alyx, Life is Strange, Team
                Fortress 2, It Takes Two, Psychonauts, Hellblade: Senua's
                Sacrifice, Hades, The Forest, Garry's Mod, Minecraft, Bioshock
                Infinite and many more that, if listed, will fill this entire
                page. While games are perhaps a more expressive way of
                demonstrating software development and programming, I strive to
                advance my knowledge in all areas of computer science.
            </p>

            <br />
            <p class="text-center">
                Currently employed as a <b>Software Engineer</b>.
            </p>

            <Separator class="my-4" />
        </div>

        <div>
            <h2 class="text-center font-bold text-3xl">
                GAMES I HAVE WORKED ON OVER THE YEARS...
            </h2>
            <br />
            <p class="text-center mx-32">
                These are some of the games I have worked on in my own time to
                better learn game development and programming techniques. These
                games were created with various game engines.
            </p>
        </div>

        <div class="flex flex-wrap justify-center">
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
    </div>
</div>
