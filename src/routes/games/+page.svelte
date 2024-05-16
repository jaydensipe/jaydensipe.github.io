<script lang="ts">
    import NavBar from "$lib/components/jay/nav-bar/nav-bar.svelte";
    import GameCard from "$lib/components/jay/game-card/game-card.svelte";
    import PageHeader from "$lib/components/jay/page-header/page-header.svelte";
    import PageSheet from "$lib/components/jay/page-sheet/page-sheet.svelte";

    import { Separator } from "$lib/components/ui/separator";

    // Images
    import bdpt2Image from "$lib/images/bdpt2.webp?enhanced";
    import bbrosImage from "$lib/images/bbros2.jpg?enhanced";
    import splorerImage from "$lib/images/splorerpic1.webp?enhanced";
    import solyankaImage from "$lib/images/indevgamepic.webp?enhanced";
    import isoarcherImage from "$lib/images/isoarcherpic2.webp?enhanced";
    import farmnerImage from "$lib/images/farmnerpic.webp?enhanced";
    import gunnkourImage from "$lib/images/gunnkourpic.webp?enhanced";

    // Icons
    import GodotLogo from "virtual:icons/logos/godot-icon";
    import UnrealLogo from "virtual:icons/logos/unrealengine-icon";
    import WebGLLogo from "virtual:icons/logos/javascript";
</script>

<svelte:head>
    <title>Games - Jayden Sipe</title>
    <meta
        name="description"
        content="Explore my games page, where you can view my array of game development projects and delve into the details of each one."
    />
</svelte:head>

<!-- Header -->
<PageHeader name="Games" color="text-rose-500"></PageHeader>

<Separator class="my-16" />

<!-- Main Container -->
<main>
    <NavBar />

    <!-- Games Page -->
    <section
        class="flex flex-col justify-center items-center divide-y gap-8 mb-16"
    >
        <GameCard
            name="Burning Down Peasant Town"
            link="https://jaydensippy.itch.io/burning-down-peasant-town"
            date="January 26th, 2024"
            imgSrc={bdpt2Image}
            engineLogo={GodotLogo}
            altImageText="Burning Down Peasant Town Game Big Image"
            githubLink="https://github.com/jaydensipe/Burning-Down-Peasant-Town"
            description="Burning Down Peasant Town is a chaotic fire management, tower defense-esque, FPS hybrid game about wreaking havoc on a village full of Peasants. This was created in two weeks for the Pirate Software Game Jam 14, with my best friend Stephen Schaefer. The theme of the Game Jam was “It’s spreading” and this is our interpretation of that. This was our first real exploration with creating a 3D game and emphasized on building reusable workflows we could apply to other projects, for example, preferring composition over inheritance."
        />

        <GameCard
            name="Bombah Bros"
            date="T.B.D."
            imgSrc={bbrosImage}
            engineLogo={GodotLogo}
            altImageText="Bombah Bros Game Big Image"
            githubLink="https://github.com/jaydensipe/Bombah-Bros"
            description="Bombah Bros is a W.I.P. multiplayer game created in the Godot game engine, similar (gameplay-wise) to Super Smash Bros. This served as my first attempt at creating a multiplayer game, accompanied by learning the game engine’s network implementation and hosting a Linux server to allow players to connect to each other (peer-to-peer). "
        />

        <GameCard
            name="Splorer"
            date="November 19, 2021"
            link="https://jaydensipe.github.io/splorer/"
            imgSrc={splorerImage}
            engineLogo={WebGLLogo}
            altImageText="Splorer Game Big Image"
            githubLink="https://github.com/jaydensipe/Splorer"
            description="Splorer is a game created for a Computer Graphics course during my time at college. It helped me understand how games are built on a lower level. Some of the topics covered during creating this project were fragment and vertex shader writing, WebGL development (TWGL.js as a small helper library) and learning to develop in a way that didn't require a game engine."
        />

        <GameCard
            name="Solyanka"
            date="February 11, 2021"
            link="assets/solyankaexperimentvideo.mp4"
            imgSrc={solyankaImage}
            engineLogo={UnrealLogo}
            altImageText="Solyanka Game Big Image"
            description="Solyanka is a game I created while learning Unreal Engine 4, as following a linear tutorial of someone making a game really isn't how I learn best. While developing, I learned a vast number of things about Unreal Engine. Summing up most of what I learned includes: A.I. with behavior trees and blackboards, understanding the importance of not using EventTick excessively, widgets and user interface, blueprint programming, using Blender to create 3D models, landscape tools, utilizing a day/night cycle, using Megascans' Assets and just generally the Unreal Editor."
        />

        <GameCard
            name="IsoArcher"
            date="September 30, 2020"
            link="https://jaydensippy.itch.io/isoarcher"
            imgSrc={isoarcherImage}
            engineLogo={GodotLogo}
            altImageText="IsoArcher Game Big Image"
            githubLink="https://github.com/jaydensipe/IsoArcher"
            description="IsoArcher is a collaborative game I made with my best friend Stephen Schaefer. He worked on the art side of things, while I worked on programming. It's a simple game about shooting goblins with arrows and using gold to upgrade your weapon. This was our first-time working experimenting with a 3D environment, as well as creating a game in C#. This game taught me a lot about collaboratively working with another person, and how to structure the game based on that fact."
            archived={true}
        />

        <GameCard
            name="FarmNer"
            date="May 30, 2020"
            link="https://jaydensippy.itch.io/farmner"
            imgSrc={farmnerImage}
            engineLogo={GodotLogo}
            altImageText="FarmNer Game Big Image"
            githubLink="https://github.com/jaydensipe/FarmNer-Revival"
            description="FarmNer was the second game I've ever created. It was made using the Godot game engine in GDScript. It is a horror game with a health bar, item looting, and AI that can target and attack you. This game taught me how to use Godot's tools more efficiently and how to manage a larger game."
            archived={true}
        />

        <GameCard
            name="Gunnkour"
            date="March 30, 2020"
            link="https://jaydensippy.itch.io/gunnkour"
            imgSrc={gunnkourImage}
            engineLogo={GodotLogo}
            altImageText="Gunnkour Game Big Image"
            githubLink="https://github.com/jaydensipe/Gunnkour"
            description="Gunnkour was the first game I've ever made. It was made using the Godot game engine in GDScript. It is a platformer game that uses gun physics to propel you to make longer jumps. This game taught me a huge amount about the game development process from start to finish. It was my first real time attempting to create something in the form of a game, using what I learned in school and applied it to the game development process."
            archived={true}
        />
    </section>
</main>

<!-- Sheet -->
<PageSheet></PageSheet>
