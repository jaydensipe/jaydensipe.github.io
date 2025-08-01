export let newYearsParticles = {
    particles: {
        color: {
            value: ["#CB00F0", "#FFF6C7", "#F05200"],
        },
        shape: {
            type: ["circle", "square"],
            options: {},
        },
        opacity: {
            value: {
                min: 0,
                max: 1,
            },
            animation: {
                enable: true,
                speed: 2,
                startValue: "max",
                destroy: "min",
            },
        },
        size: {
            value: {
                min: 3,
                max: 4,
            },
        },
        life: {
            duration: {
                sync: true,
                value: 7,
            },
            count: 1,
        },
        move: {
            enable: true,
            gravity: {
                enable: true,
                acceleration: 10,
            },
            speed: {
                min: 10,
                max: 50,
            },
            decay: 0.1,
            direction: "none",
            straight: false,
            outModes: {
                default: "destroy",
                top: "none",
            },
        },
        rotate: {
            value: {
                min: 0,
                max: 360,
            },
            direction: "random",
            move: true,
            animation: {
                enable: true,
                speed: 60,
            },
        },
        tilt: {
            direction: "random",
            enable: true,
            move: true,
            value: {
                min: 0,
                max: 360,
            },
            animation: {
                enable: true,
                speed: 60,
            },
        },
        roll: {
            darken: {
                enable: true,
                value: 25,
            },
            enable: true,
            speed: {
                min: 15,
                max: 25,
            },
        },
        wobble: {
            distance: 30,
            enable: true,
            move: true,
            speed: {
                min: -15,
                max: 15,
            },
        },
    },
    emitters: {
        life: {
            count: 0,
            duration: 0.1,
            delay: 0.4,
        },
        rate: {
            delay: 0.25,
            quantity: 200,
        },
    },
}