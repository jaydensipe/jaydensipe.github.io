<script lang="ts">
    import Footer from "$lib/components/jay/footer/footer.svelte";
    import NavBar from "$lib/components/jay/nav-bar/nav-bar.svelte";

    import { Separator } from "$lib/components/ui/separator";
</script>

<head>
    <title>Projects - Jayden Sipe</title>
</head>

<body class="sm:mx-20 flex flex-col items-center justify-center">
    <!-- Header -->
    <header class="text-center">
        <h1 class="text-7xl sm:text-9xl pt-16 pb-8 font-medium">
            Personal Projects
        </h1>
        <p class="mx-8 pb-8">
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

        <!-- Personal Projects Page -->
        <section></section>

        <Separator class="my-16" />
    </main>
</body>

<!-- Footer -->
<Footer />
