import { writable, get } from "svelte/store";


// Expedition 33 Music
import robeDeJourMP3 from "$lib/music/robe-de-jour.mp3";
import { toast } from "svelte-sonner";
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
    console.log(get(easterEggStore), "Easter Egg Store");
    
    if (get(easterEggStore) !== SupportedEasterEggs.None) {

        console.log("Stopping current easter egg music");
        if (currentPlayingTrack) {
            currentPlayingTrack.stop();
            currentPlayingTrack = null;
        }

        easterEggStore.set(SupportedEasterEggs.None);
    }

    switch (easterEgg) {
        case SupportedEasterEggs.Expedition33:
            currentPlayingTrack = robeDeJourMusic;
            currentPlayingTrack?.play();
            toast.success('\"For those who come after!\"', {
                description: 'Now playing "Robe de Jour" from Clair Obscur: Expedition 33.',
            });

            setTimeout(() => {
                easterEggStore.set(easterEgg);
            }, 13000);
            break;
    }

    currentPlayingTrack?.on("end", () => {
        easterEggStore.set(SupportedEasterEggs.None);
    });
}