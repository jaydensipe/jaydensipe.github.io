export let leavesParticles = {
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
        // tilt: {
        //     direction: "random",
        //     enable: true,
        //     move: true,
        //     value: {
        //         min: 0,
        //         max: 360,
        //     },
        //     animation: {
        //         enable: true,
        //         speed: 10,
        //     },
        // },
        // roll: {
        //     darken: {
        //         enable: true,
        //         value: 30,
        //     },
        //     enlighten: {
        //         enable: true,
        //         value: 30,
        //     },
        //     enable: true,
        //     mode: "both",
        //     speed: {
        //         min: 5,
        //         max: 15,
        //     },
        // },
        wobble: {
            distance: 10,
            enable: true,
            speed: 0.25,
        },
        shape: {
            type: "image",
            options: {
                image: {
                    src: "assets/red-leaf.png",
                },
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
}