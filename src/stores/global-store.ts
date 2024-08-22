import { writable } from "svelte/store";
import { Sound } from "svelte-sound";
import { get } from "svelte/store";

// Halloween Music
import halloweenMp3 from "$lib/music/halloween.mp3";
const halloweenSound: Sound = new Sound(halloweenMp3, { volume: 0.1, loop: true, html5: true, preload: "metadata" });

// Christmas Music
import christmasMp3 from "$lib/music/christmas.mp3";
const christmasSound: Sound = new Sound(christmasMp3, { volume: 0.1, loop: true, html5: true, preload: "metadata" });

export enum SupportedHolidays {
    None = 0,
    Halloween = 1,
    Christmas = 2,
    NewYears = 3,
}

export const holidayStore = writable(getHoliday());
export const musicPlayingStore = writable(false);

let currentPlayingTrack: Sound | null = null;
export function playThemedHolidayMusic(): void {
    if (get(musicPlayingStore)) {
        currentPlayingTrack?.stop();
        musicPlayingStore.set(false);
        return;
    }

    if (getHoliday() === SupportedHolidays.Halloween) {
        currentPlayingTrack = halloweenSound;
    }
    else if (getHoliday() === SupportedHolidays.Christmas) {
        currentPlayingTrack = christmasSound;
    }

    currentPlayingTrack?.play();
    musicPlayingStore.set(true);
}

function getHoliday(): SupportedHolidays {
    const today = new Date();
    const month = today.getMonth();
    const day = today.getDate();

    if (month === 9) {
        return SupportedHolidays.Halloween;
    } else if (month === 11) {
        return SupportedHolidays.Christmas;
    } else if (month === 0 && day === 1) {
        return SupportedHolidays.NewYears;
    }

    return SupportedHolidays.NewYears;
}