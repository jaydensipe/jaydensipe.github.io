export let roseParticles = {
    emitters: [
        {
            position: {
                x: 50,
                y: 0,
            },
            rate: {
                quantity: 4,
                delay: 0.15,
            },
            particles: {
                move: {
                    direction: "bottom",
                    outModes: {
                        top: "none",
                        left: "none",
                        default: "destroy",
                    },
                },
            },
            shape: {
                type: "square",
            },
            size: {
                width: 100,
                height: 0,
            },
        },
    ],
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "attract",
            },
            resize: true,
        },
        modes: {
            attract: {
                distance: 100,
                duration: 1.0,
                speed: 3.0,
            },
        },
    },
    particles: {
        move: {
            direction: "bottom",
            enable: true,
            outModes: "out",
            speed: {
                min: 0.5,
                max: 2,
            },
        },
        rotate: {
            value: {
                min: 0,
                max: 180,
            },
            direction: "random",
            move: true,
            animation: {
                enable: true,
                speed: 10,
            },
        },
        wobble: {
            distance: 10,
            enable: true,
            speed: 0.25,
        },
        shape: {
            type: "image",
            options: {
                image: [
                    { src: "assets/particles/rose/rose1.png?enhanced" },
                    { src: "assets/particles/rose/rose2.png?enhanced" },
                    { src: "assets/particles/rose/rose3.png?enhanced" },
                    { src: "assets/particles/rose/rose4.png?enhanced" },
                    { src: "assets/particles/rose/rose5.png?enhanced" },
                    { src: "assets/particles/rose/rose6.png?enhanced" },
                    { src: "assets/particles/rose/rose7.png?enhanced" },
                    { src: "assets/particles/rose/rose8.png?enhanced" },
                    { src: "assets/particles/rose/rose9.png?enhanced" },
                ],
            },
        },
        size: {
            value: 10,
        },
        zIndex: {
            value: {
                min: 0,
                max: 50,
            },
        },
    },
};
