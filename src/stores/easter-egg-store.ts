import { writable } from "svelte/store";


// Expedition 33 Music
import robeDeJourMP3 from "$lib/music/robe-de-jour.mp3";
const robeDeJourMusic = new Howl({
    src: [robeDeJourMP3],
    loop: false,
    volume: 0.1,
    html5: true,
    preload: false
});

export enum SupportedEasterEggs {
    None = 0,
    Expedition33 = 1,
}

export const easterEggStore = writable(SupportedEasterEggs.None);
let currentPlayingTrack: Howl | null = null;

export function setEasterEgg(easterEgg: SupportedEasterEggs) {
    switch (easterEgg) {
        case SupportedEasterEggs.Expedition33:
            currentPlayingTrack = robeDeJourMusic;
            currentPlayingTrack?.play();

            setTimeout(() => {
                easterEggStore.set(easterEgg);
            }, 13000);
            break;
    }

    currentPlayingTrack?.on("end", () => {
        easterEggStore.set(SupportedEasterEggs.None);
    });
}