<script lang="ts">
    import Footer from "$lib/components/jay/footer/footer.svelte";
    import NavBar from "$lib/components/jay/nav-bar/nav-bar.svelte";
    import GameCard from "$lib/components/jay/game-card/game-card.svelte";

    import { Separator } from "$lib/components/ui/separator";
    import { Badge } from "$lib/components/ui/badge";
</script>

<head>
    <title>Games - Jayden Sipe</title>
</head>

<body class="sm:mx-20 flex flex-col items-center justify-center">
    <!-- Header -->
    <header class="text-center">
        <h1 class="text-7xl sm:text-9xl pt-16 pb-8 font-medium">Games</h1>
        <p class="mx-8 max-w-4xl pb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            magnam molestias suscipit harum temporibus dolorum eligendi incidunt
            repudiandae reprehenderit commodi. Iure commodi ab rerum et aliquid
            explicabo soluta quis cupiditate?
        </p>
    </header>

    <Separator class="my-16" />

    <!-- Main Container -->
    <main
        class="container bg-white pt-8 shadow-main-bg-light-mobile sm:shadow-main-bg-light"
    >
        <NavBar />

        <!-- Games Page -->
        <section
            class="flex flex-col justify-center items-center divide-y gap-8"
        >
            <GameCard
                name="Burning Down Peasant Town"
                link="https://jaydensippy.itch.io/burning-down-peasant-town"
                date="January 26th, 2024"
                iFrameSrc="https://itch.io/embed/2488490?linkback=true&amp;bg_color=F3F5E4&amp;fg_color=000000&amp;link_color=C25A2A&amp;border_color=4f8750"
                imageName="bdpt2.jpg"
                altImageText="Burning Down Peasant Town Game Big Image"
                githubLink="https://github.com/jaydensipe/Burning-Down-Peasant-Town"
                description="lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam molestias suscipit harum temporibus dolorum eligendi incidunt repudiandae reprehenderit commodi. Iure commodi ab rerum et aliquid explicabo soluta quis cupiditate?"
            />

            <GameCard
                name="Bombah Bros"
                date="T.B.D."
                imageName="bbros2.jpg"
                altImageText="Bombah Bros Game Big Image"
                githubLink="https://github.com/jaydensipe/Bombah-Bros"
                description="lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam molestias suscipit harum temporibus dolorum eligendi incidunt repudiandae reprehenderit commodi. Iure commodi ab rerum et aliquid explicabo soluta quis cupiditate?"
            />

            <GameCard
                name="Splorer"
                date="November 19, 2021"
                link="https://jaydensipe.github.io/splorer/"
                imageName="splorerpic1.webp"
                altImageText="Splorer Game Big Image"
                githubLink="https://github.com/jaydensipe/Splorer"
                description="Splorer is a game I created for a Computer Graphics class at my college. It really helped me gain an understanding on how games are built on a lower level. Some of the topics covered during creating this project were fragment and vertex shader writing, WebGL development (TWGL.js as a small helper library) and learning to develop in a way that didn't require a game engine."
            />

            <GameCard
                name="Solyanka"
                date="February 11, 2021"
                link="solyankaexperimentvideo.mp4"
                imageName="indevgamepic.webp"
                altImageText="Solyanka Game Big Image"
                description="Solyanka is a game I created while learning Unreal Engine 4, as following a linear tutorial of someone making a game really isn't how I learn best. While developing, I learned a vast number of things about Unreal Engine. Summing up most of what I learned includes: A.I. with behavior trees and blackboards, understanding the importance of not using EventTick excessively, widgets and user interface, blueprint programming, using Blender to create 3D models, landscape tools, utilizing a day/night cycle, using Megascans' Assets and just generally the Unreal Editor."
            />

            <GameCard
                name="IsoArcher"
                date="September 30, 2020"
                link="solyankaexperimentvideo.mp4"
                imageName="isoarcherpic2.webp"
                altImageText="IsoArcher Game Big Image"
                githubLink="https://github.com/jaydensipe/IsoArcher"
                description="IsoArcher is a collaborative game I made with my best-friend Stephen Schaefer. He worked on the art side of things, while I worked on programming. It's a simple game about shooting goblins with arrows and using gold to upgrade your weapon. This was my first time working in a 3D environment, as well as creating a game in C#. This particular game taught me a lot about working with another person, and how to structure the game based on that fact."
            />

            <GameCard
                name="FarmNer"
                date="May 30, 2020"
                iFrameSrc="https://itch.io/embed/657767?linkback=true&amp;bg_color=e3b969&amp;fg_color=000000&amp;link_color=b91a1a&amp;border_color=333333"
                link="https://jaydensippy.itch.io/farmner"
                imageName="farmnerpic.webp"
                altImageText="FarmNer Game Big Image"
                githubLink="https://github.com/jaydensipe/FarmNer-Revival"
                description="FarmNer is the second game I've ever made. It was made using the Godot game engine in GDScript. It is a horror game with a health bar, item looting, and AI that can target and attack you. This particular game taught me how to use Godot's tools more efficiently and how to manage a larger game."
            />

            <GameCard
                name="Gunnkour"
                date="March 30, 2020"
                iFrameSrc="https://itch.io/embed/580622?linkback=true&amp;bg_color=b0d4d9&amp;fg_color=003c15&amp;link_color=4b9917&amp;border_color=44a72e"
                link="https://jaydensippy.itch.io/gunnkour"
                imageName="gunnkourpic.webp"
                altImageText="Gunnkour Game Big Image"
                githubLink="https://github.com/jaydensipe/Gunnkour"
                description="Gunnkour is the first game I've ever made. It was made using the Godot game engine in GDScript. It is a platformer game that uses gun physics to propel you to make longer jumps. This particular game taught me a huge amount about the game development process from start to finish. It was my first real time attempting to create something in the form of a game, using what I learned in school to apply to game development."
            />
        </section>
    </main>
</body>

<!-- Footer -->
<Footer />
