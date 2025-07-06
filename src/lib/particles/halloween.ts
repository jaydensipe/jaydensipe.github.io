export let halloweenParticles = {
    emitters: [
        {
            position: {
                x: 0,
                y: 30,
            },
            rate: {
                quantity: 7,
                delay: 0.15,
            },
            particles: {
                move: {
                    direction: "top-right",
                    outModes: {
                        top: "none",
                        left: "none",
                        default: "destroy",
                    },
                },
            },
        },
        {
            position: {
                x: 100,
                y: 30,
            },
            rate: {
                quantity: 7,
                delay: 0.15,
            },
            particles: {
                move: {
                    direction: "top-left",
                    outModes: {
                        top: "none",
                        right: "none",
                        default: "destroy",
                    },
                },
            },
        },
    ],
    particles: {
        color: {
            value: ["#FF7600", "#52006A"],
        },
        move: {
            decay: 0.05,
            direction: "top",
            enable: true,
            gravity: {
                enable: true,
            },
            outModes: {
                top: "none",
                default: "destroy",
            },
            speed: {
                min: 20,
                max: 70,
            },
        },
        rotate: {
            value: {
                min: 0,
                max: 360,
            },
            direction: "random",
            animation: {
                enable: true,
                speed: 30,
            },
        },
        tilt: {
            direction: "random",
            enable: true,
            value: {
                min: 0,
                max: 360,
            },
            animation: {
                enable: true,
                speed: 30,
            },
        },
        size: {
            value: {
                min: 2,
                max: 4,
            },
        },
        roll: {
            darken: {
                enable: true,
                value: 25,
            },
            enable: true,
            speed: {
                min: 5,
                max: 15,
            },
        },
        wobble: {
            distance: 30,
            enable: true,
            speed: {
                min: -7,
                max: 7,
            },
        },
        shape: {
            type: ["circle", "square", "star"],
            options: {},
        },
    },
}