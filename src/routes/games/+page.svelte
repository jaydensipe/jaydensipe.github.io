<script lang="ts">
    import Footer from "$lib/components/jay/footer/footer.svelte";
    import NavBar from "$lib/components/jay/nav-bar/nav-bar.svelte";
    import GameCard from "$lib/components/jay/game-card/game-card.svelte";

    import { Separator } from "$lib/components/ui/separator";
    import PageHeader from "$lib/components/jay/page-header/page-header.svelte";
</script>

<head>
    <title>Games - Jayden Sipe</title>
</head>

<!-- Header -->
<PageHeader name="Games" color="text-rose-500"></PageHeader>

<Separator class="my-16" />

<!-- Main Container -->
<main
    class="container bg-white pt-8 shadow-main-bg-light-mobile sm:shadow-main-bg-light"
>
    <NavBar />

    <!-- Games Page -->
    <section
        class="flex flex-col justify-center items-center divide-y gap-8 mb-16"
    >
        <GameCard
            name="Burning Down Peasant Town"
            link="https://jaydensippy.itch.io/burning-down-peasant-town"
            date="January 26th, 2024"
            imageName="bdpt2.jpg"
            altImageText="Burning Down Peasant Town Game Big Image"
            githubLink="https://github.com/jaydensipe/Burning-Down-Peasant-Town"
            description="Burning Down Peasant Town is a chaotic fire management, tower defense-esque, FPS hybrid game about wreaking havoc on a village full of Peasants. This was created in two weeks for the Pirate Software Game Jam 14, with my best friend Stephen Schaefer. The theme of the Game Jam was “It’s spreading” and this is our interpretation of that. This was our first real exploration with creating a 3D game and emphasized on building reusable workflows we could apply to other projects, for example, preferring composition over inheritance."
        />

        <GameCard
            name="Bombah Bros"
            date="T.B.D."
            imageName="bbros2.jpg"
            altImageText="Bombah Bros Game Big Image"
            githubLink="https://github.com/jaydensipe/Bombah-Bros"
            description="Bombah Bros is a W.I.P. multiplayer game created in the Godot game engine, similar (gameplay-wise) to Super Smash Bros. This served as my first attempt at creating a multiplayer game, accompanied by learning the game engine’s network implementation and hosting a Linux server to allow players to connect to each other (peer-to-peer). "
        />

        <GameCard
            name="Splorer"
            date="November 19, 2021"
            link="https://jaydensipe.github.io/splorer/"
            imageName="splorerpic1.webp"
            altImageText="Splorer Game Big Image"
            githubLink="https://github.com/jaydensipe/Splorer"
            description="Splorer is a game created for a Computer Graphics course during my time at college. It helped me understand how games are built on a lower level. Some of the topics covered during creating this project were fragment and vertex shader writing, WebGL development (TWGL.js as a small helper library) and learning to develop in a way that didn't require a game engine."
        />

        <GameCard
            name="Solyanka"
            date="February 11, 2021"
            link="images/solyankaexperimentvideo.mp4"
            imageName="indevgamepic.webp"
            altImageText="Solyanka Game Big Image"
            description="Solyanka is a game I created while learning Unreal Engine 4, as following a linear tutorial of someone making a game really isn't how I learn best. While developing, I learned a vast number of things about Unreal Engine. Summing up most of what I learned includes: A.I. with behavior trees and blackboards, understanding the importance of not using EventTick excessively, widgets and user interface, blueprint programming, using Blender to create 3D models, landscape tools, utilizing a day/night cycle, using Megascans' Assets and just generally the Unreal Editor."
        />

        <GameCard
            name="IsoArcher"
            date="September 30, 2020"
            link="https://jaydensippy.itch.io/isoarcher"
            imageName="isoarcherpic2.webp"
            altImageText="IsoArcher Game Big Image"
            githubLink="https://github.com/jaydensipe/IsoArcher"
            description="IsoArcher is a collaborative game I made with my best friend Stephen Schaefer. He worked on the art side of things, while I worked on programming. It's a simple game about shooting goblins with arrows and using gold to upgrade your weapon. This was our first-time working experimenting with a 3D environment, as well as creating a game in C#. This game taught me a lot about collaboratively working with another person, and how to structure the game based on that fact."
        />

        <GameCard
            name="FarmNer"
            date="May 30, 2020"
            link="https://jaydensippy.itch.io/farmner"
            imageName="farmnerpic.webp"
            altImageText="FarmNer Game Big Image"
            githubLink="https://github.com/jaydensipe/FarmNer-Revival"
            description="FarmNer was the second game I've ever created. It was made using the Godot game engine in GDScript. It is a horror game with a health bar, item looting, and AI that can target and attack you. This game taught me how to use Godot's tools more efficiently and how to manage a larger game."
        />

        <GameCard
            name="Gunnkour"
            date="March 30, 2020"
            link="https://jaydensippy.itch.io/gunnkour"
            imageName="gunnkourpic.webp"
            altImageText="Gunnkour Game Big Image"
            githubLink="https://github.com/jaydensipe/Gunnkour"
            description="Gunnkour was the first game I've ever made. It was made using the Godot game engine in GDScript. It is a platformer game that uses gun physics to propel you to make longer jumps. This game taught me a huge amount about the game development process from start to finish. It was my first real time attempting to create something in the form of a game, using what I learned in school and applied it to the game development process."
        />
    </section>
</main>

<!-- Footer -->
<Footer />
