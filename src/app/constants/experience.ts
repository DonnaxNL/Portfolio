import { Experience } from "../models/experience";
import { Injectable } from "@angular/core";

@Injectable()
export class ExperienceData {
    demonth = new Experience('demonth', 'DeMonth', 
    'DeMonth was a monthly subscription with menstruational products and pampering products for women.', 
    'DeMonth was a monthly subscription with menstruational products and pampering products for women.',
    'Head Web Developer', 
    '#FBC3BC', '/assets/projects/demonth/demonth-icon.png', '/assets/projects/demonth/demonth.png', ['/assets/projects/demonth/demonth.png'], 
    ['Angular','Firebase','Mollie'], 'web',
    new Date(2019,9,1), new Date(2021,8,1),
    'https://demonth-demo.web.app/');

    pmt = new Experience('pmt', 'Plank Music Timer', 
    'With the Plank Music Timer Android app you can select your own motivational music for your planks!', 
    'With the Plank Music Timer Android app you can select your own motivational music for your planks!',
    'Developer',
    '#0DC2CE', '/assets/projects/pmt/pmt-icon.png', '/assets/projects/pmt/pmt-0.png', ['/assets/projects/pmt/pmt-1.png','/assets/projects/pmt/pmt-2.png','/assets/projects/pmt/pmt-3.png','/assets/projects/pmt/pmt-4.png'], 
    ['Android','Java','Firebase'], 'mobile',
    new Date(2019,8,1), null,
    'https://play.google.com/store/apps/details?id=com.dxapps.plankmusictimer');

    goinfo = new Experience('goinfo', 'GO Info', 
    'GO Info was an Android app for Pokémon GO players, to keep the user up to date with current in-game events.',
    "GO Info was an Android app for Pokémon GO players, to keep the user up to date with current in-game events.<br><br>Events are beautifully displayed, including countdowns.<br><br>Features:<br>- App Widget for events available.<br>- Events are updated as they are announced.<br>- Know exactly when events are happening with countdowns.<br>- New shiny Pokémon that are introduced in an event are prominently displayed.<br>- See the current reward pool for Field Research",
    'Developer',
    '#25CCAA', '/assets/projects/goinfo/goinfo-icon.png', '/assets/projects/goinfo/goinfo-0.png', ['/assets/projects/goinfo/goinfo-1.png','/assets/projects/goinfo/goinfo-2.png','/assets/projects/goinfo/goinfo-3.png','/assets/projects/goinfo/goinfo-4.png'], 
    ['Android','Flutter','Firebase'], 'mobile');

    dtt = new Experience('dtt', 'DTT', 
    'Worked on several Android apps at DTT for my internship and part-time job.',
    'Worked on several Android apps at DTT for my internship and part-time job.',
    'Android Developer',
    '#E65541', '/assets/projects/dtt/dtt-icon.png', '/assets/projects/dtt/dtt.png', null, 
    ['Android','Java','Firebase'], 'mobile',
    new Date(2016,2,1), new Date(2018,0,1));

    all: Array<Experience> = [
        this.demonth,
        this.pmt,
        this.goinfo,
        this.dtt
    ];
}