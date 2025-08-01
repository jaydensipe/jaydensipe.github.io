<script lang="ts">
    import NavBar from "$lib/components/jay/nav-bar/nav-bar.svelte";
    import ProjectCard from "$lib/components/jay/project-card/project-card.svelte";
    import PageHeader from "$lib/components/jay/page-header/page-header.svelte";
    import PageContainer from "$lib/components/jay/page-container/page-container.svelte";
    import PageSheet from "$lib/components/jay/page-sheet/page-sheet.svelte";

    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import type { CarouselAPI } from "$lib/components/ui/carousel/context";
    import { Separator } from "$lib/components/ui/separator";
    import { MoveLeft, MoveRight } from "@lucide/svelte";

    // Images
    import gdLocalHistoryImage from "$lib/images/gdlocalhistory.png?enhanced";
    import jrcat1Image from "$lib/images/jrcat1.png?enhanced";
    import squireImage from "$lib/images/squire.png?enhanced";
    import nveImage from "$lib/images/nve.png?enhanced";
    import udemusDateusImage from "$lib/images/udpic2.webp?enhanced";
    import tgppImage from "$lib/images/tgppic1.webp?enhanced";
    import wwlImage from "$lib/images/wwl2.webp?enhanced";
    import g2gImage from "$lib/images/g2g2.webp?enhanced";
    import hangmanImage from "$lib/images/hangmanpic2.webp?enhanced";
    import ahImage from "$lib/images/ah1.webp?enhanced";

    // Icons
    import GodotLogo from "virtual:icons/logos/godot-icon";
    import PythonLogo from "virtual:icons/logos/python";
    import D3Logo from "virtual:icons/logos/d3";
    import NodeJSLogo from "virtual:icons/logos/nodejs-icon";
    import DotNetLogo from "virtual:icons/logos/dotnet";
    import AngularLogo from "virtual:icons/logos/angular-icon";
    import ReactLogo from "virtual:icons/logos/react";
    import JSLogo from "virtual:icons/logos/javascript";
    import MongoDBLogo from "virtual:icons/logos/mongodb-icon";
    import Java from "virtual:icons/logos/java";

    let api = $state<CarouselAPI>();
</script>

<svelte:head>
    <title>Projects - Jayden Sipe</title>
    <meta
        name="description"
        content="Explore my personal projects page, where you can view my array of projects and delve into the details of each one."
    />
</svelte:head>

<!-- Header -->
<PageHeader name="Personal Projects" color="text-cyan-500"></PageHeader>

<Separator class="my-16"></Separator>

<!-- Main Container -->
<PageContainer>
    <NavBar />

    <!-- Personal Projects Page -->
    <section
        class="flex flex-col justify-center items-center divide-y gap-8 sm:mx-4"
    >
        <ProjectCard
            name="GD Local History"
            language="GDScript"
            languageIcons={[GodotLogo]}
            githubLink="https://github.com/jaydensipe/GD-Local-History"
            imgSrc={gdLocalHistoryImage}
            altImageText="GD Local History Project Big Image"
            description="Similar to the feature found in Visual Studio Code (and many other IDEs), GD Local History keeps a snapshot of each previous version of a script (upon saving that script with changes that differ from previous version), in the event you need to view past iterations. I created this plugin after an unfortunate event of replacing a script with an old version to test, and accidentally quitting the engine, thus losing my changes :(."
        ></ProjectCard>
        <ProjectCard
            name="Jay's Reusable Components and Things"
            language="GDScript"
            languageIcons={[GodotLogo]}
            githubLink="https://github.com/jaydensipe/Jays-Reusable-Components-and-Things"
            imgSrc={jrcat1Image}
            altImageText="Jay's Reusable Components and Things Project Big Image"
            description="This is a set of reusable components for the Godot game engine. As I built games I noticed I was recreating the same functionality over and over again, so I decided to create a repository for them. This repository is a work in progress and will be updated as I create more games and find more components that can be made reusable."
        ></ProjectCard>
        <ProjectCard
            name="Squire AI"
            language="Python"
            languageIcons={[PythonLogo]}
            githubLink="https://github.com/jaydensipe/Squire-AI"
            imgSrc={squireImage}
            altImageText="Squire AI Project Big Image"
            description="Squire is an AI (Artificial Intelligence) assistant built with modularity in mind to be able to add extra functionality easily. It was built using Python, along with spaCy, TensorFlow and LangChain. Created for a school project for the master's program at the University of Illinois Urbana-Champaign."
        ></ProjectCard>
        <ProjectCard
            name="Narrative Visualization Exploration"
            language="D3.js, Node.js"
            languageIcons={[D3Logo, NodeJSLogo]}
            githubLink="https://github.com/jaydensipe/Narrative-Visualization-Exploration"
            imgSrc={nveImage}
            altImageText="Narrative Visualization Exploration Project Big Image"
            description="This was a deep dive into a narrative visualization using the interactive slideshow structure. This was also a learning opportunity for D3.js. Note: take the data with a grain of salt, dataset was not verified. Created for a school project for the master's program at the University of Illinois Urbana-Champaign."
        ></ProjectCard>
        <ProjectCard
            name="UdemusDateus"
            language="Asp.NET Core & Angular"
            languageIcons={[DotNetLogo, AngularLogo]}
            githubLink="https://github.com/jaydensipe/Udemus-Dateus"
            imgSrc={udemusDateusImage}
            altImageText="UdemusDateus Project Big Image"
            description="This is a fully functioning dating web app created with help from a Udemy course. It utilizes ASP.NET Core for the backend and Angular for the frontend. Users can register, login and edit their profiles. Members are also able to like other members, upload photos for their profile, chat with other members, etc. Previously hosted on Microsoft's Azure Cloud Service."
        ></ProjectCard>
        <ProjectCard
            name="The Gravestone Project"
            language="React & Express.JS"
            languageIcons={[ReactLogo, JSLogo]}
            imgSrc={tgppImage}
            altImageText="The Gravestone Project Project Big Image"
            description="This is the project that served as my capstone for my college degree. During development of this project, I worked as a frontend developer, but, as work piled up, took upon the role as a full-stack developer. This project taught me an immense amount about working with a team as well as providing for a client that requested a product."
        ></ProjectCard>
        <ProjectCard
            name="WhereWeLivin"
            language=".NET Framework"
            languageIcons={[DotNetLogo]}
            githubLink="https://github.com/jaydensipe/Where-We-Livin"
            imgSrc={wwlImage}
            altImageText="WhereWeLivin Project Big Image"
            description="When talking with friends or family about the future, a topic that comes up a lot is potential places everyone would want to move to. I've always wanted an easy way to compile all these answers together to see if anyone shares common ground in their decisions. While that is my intended purpose for the application, it can be used in deciding any number of things, such as where to go on vacation, etc."
        ></ProjectCard>

        <div
            class="bg-yellow-50 dark:bg-zinc-800 flex justify-center items-center flex-col p-2 rounded-md shadow-md border sm:border-0"
        >
            <div
                class="mt-8 text-lg flex flex-row gap-4 text-muted-foreground font-medium"
            >
                <button
                    type="button"
                    onclick={() => api?.scrollPrev()}
                    class="hyperlink"
                >
                    <MoveLeft />
                </button>
                Archived Projects ⚠️
                <button
                    type="button"
                    onclick={() => api?.scrollNext()}
                    class="hyperlink"
                >
                    <MoveRight />
                </button>
            </div>
            <p class="text-muted-foreground text-sm">
                Old, nasty code lies ahead... (Swipe)
            </p>
            <Carousel.Root
                class="max-w-80 sm:max-w-none sm:w-full"
                setApi={(emblaApi) => (api = emblaApi)}
            >
                <Carousel.Content>
                    <Carousel.Item class="p-4">
                        <ProjectCard
                            name="Get2Gather"
                            language="MERN Stack"
                            languageIcons={[
                                MongoDBLogo,
                                JSLogo,
                                ReactLogo,
                                NodeJSLogo,
                            ]}
                            imgSrc={g2gImage}
                            altImageText="Get2Gather Project Big Image"
                            description="This is a project I worked on in college with a group of 6 others. It served as an event manager website where a user could: submit an event and groups, post comments and use other features you'd expect from a website. My part of this project was working on frontend using React, and in doing so learned a great amount about the software development process."
                            isArchived={true}
                        ></ProjectCard></Carousel.Item
                    >
                    <Carousel.Item class="p-4">
                        <ProjectCard
                            name="Hangman"
                            language="Java"
                            languageIcons={[Java]}
                            githubLink="https://github.com/jaydensipe/Hangman-Java"
                            imgSrc={hangmanImage}
                            altImageText="Hangman Project Big Image"
                            description="This is a simple Hangman game I created in Java during some free time. I used it as an opportunity to use Java Swing in a project that wasn't being used for school. This was made with Java using the IntelliJ IDE."
                            isArchived={true}
                        ></ProjectCard></Carousel.Item
                    >
                    <Carousel.Item>
                        <ProjectCard
                            name="Arithmetic Helper"
                            language="Java"
                            languageIcons={[Java]}
                            githubLink="https://github.com/jaydensipe/Arithmetic-Helper-Java"
                            imgSrc={ahImage}
                            altImageText="Arithmetic Helper Project Big Image"
                            description="This is an arithmetic helper I created in Java in my first year of college. It takes inputs on basic arithmetic math problems and can output how long it took you to solve each problem, show average solve time, display a scoreboard and other neat features. This was made with Java using the Eclipse IDE."
                            isArchived={true}
                        ></ProjectCard></Carousel.Item
                    >
                </Carousel.Content>
            </Carousel.Root>
        </div>
    </section>
</PageContainer>

<!-- Page Sheet -->
<PageSheet></PageSheet>
