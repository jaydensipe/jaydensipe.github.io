import { writable } from "svelte/store";
import { Howl } from 'howler';
import { get } from "svelte/store";

// Halloween Music
import halloweenMp3 from "$lib/music/halloween.mp3";
const halloweenSound = new Howl({
    src: [halloweenMp3],
    loop: true,
    volume: 0.1,
    html5: true,
    preload: false
});

// Christmas Music
import christmasMp3 from "$lib/music/christmas.mp3";
const christmasSound = new Howl({
    src: [christmasMp3],
    loop: true,
    volume: 0.1,
    html5: true,
    preload: false
});

export enum SupportedHolidays {
    None = 0,
    Halloween = 1,
    Christmas = 2,
    NewYears = 3,
}

export const holidayStore = writable(getHoliday());
export const musicPlayingStore = writable(false);
let currentPlayingTrack: Howl | null = null;

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

    return SupportedHolidays.None;
}

export function playThemedHolidayMusic(): void {
    if (get(musicPlayingStore)) {
        currentPlayingTrack?.stop();
        musicPlayingStore.set(false);
        return;
    }

    if (getHoliday() === SupportedHolidays.Halloween) {
        halloweenSound.load();
        currentPlayingTrack = halloweenSound;
    }
    else if (getHoliday() === SupportedHolidays.Christmas) {
        christmasSound.load();
        currentPlayingTrack = christmasSound;
    }

    currentPlayingTrack?.play();
    musicPlayingStore.set(true);
}
