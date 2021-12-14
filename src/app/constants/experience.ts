import { Experience } from "../models/experience";
import { Injectable } from "@angular/core";

@Injectable()
export class ExperienceData {
    portfolio: Experience = {
        id: 'portfolio', 
        title: 'Portfolio', 
        briefDescription: 'Portfolio website to showcase my previous experience as a developer.', 
        color: '#0055AA', 
        tags: ['Angular'], 
        platform: 'web', 
        icon: 'favicon.ico', 
        mainImage: 'https://via.placeholder.com/250x150?text=DxProductions',
        overview: {
            description: 'Portfolio website to showcase my previous experience as a developer.',
            roles: ['Head Web Developer'], 
            stack: ['Angular'],  
            startDate: new Date(2021,9,1),
            link: 'https://dxproductionsnl.web.app/'
        }
    };

    demonth: Experience = {
        id: 'demonth', 
        title: 'DeMonth', 
        briefDescription: 'DeMonth was a monthly subscription with menstruational products and pampering products for women.', 
        color: '#FBC3BC', 
        tags: ['Angular','Firebase','Mollie'], 
        platform: 'web', 
        icon: '/assets/projects/demonth/demonth-icon.png', 
        mainImage: '/assets/projects/demonth/demonth-0.png',
        images: ['/assets/projects/demonth/demonth-0.png', '/assets/projects/demonth/demonth-1.png'], 
        overview: {
            description: 'DeMonth was a monthly subscription with menstruational products and pampering products for women, founded by four graduates of the Amsterdam University of Applied Sciences.',
            roles: ['Head Web Developer'], 
            stack: ['Angular','Firebase','Mollie'],  
            startDate: new Date(2019,9,1), 
            endDate: new Date(2021,8,1),
            link: 'https://demonth-demo.web.app/'
        },
        infoParagraphs: [{
            header: 'Pre-development',
            text: 'One of the co-founders of DeMonth is a friend from high school. I got in contact with him about the platform and he suggested me to help building their website. DeMonth already had a website before I stepped in, but it was made with Shopify and didn\'t meet their requirements as a subscription platform.',
        },
        {
            header: 'Figuring out features',
            text: 'Because of the customisation options DeMonth provided, I had to make sure the ordering progress goes as smooth and irritation free as possible.<br><br>One of the options that needed a second look was selecting products. The old website used sliders to choose, but it is hard to accurate select a value from it, especially on mobile. I chose to use a simple dropdown box. However, the selected value will update the dropdown boxes, so you can\'t pick more products than allowed.',
            image: '/assets/projects/demonth/demonth-info-2.png'
        }]
    };

    pmt: Experience = {
        id: 'pmt', 
        title: 'Plank Music Timer', 
        briefDescription: 'With the Plank Music Timer Android app you can select your own motivational music for your planks!', 
        color: '#0DC2CE', 
        tags: ['Android','Java','Firebase'], 
        platform: 'mobile', 
        icon: '/assets/projects/pmt/pmt-icon.png', 
        mainImage: '/assets/projects/pmt/pmt-0.png',
        images: ['/assets/projects/pmt/pmt-1.png','/assets/projects/pmt/pmt-2.png','/assets/projects/pmt/pmt-3.png','/assets/projects/pmt/pmt-4.png'], 
        overview: {
            description: 'With the Plank Music Timer Android app you can select your own motivational music for your planks!',
            roles: ['Head Developer'], 
            stack: ['Android','Java','Firebase'],  
            startDate: new Date(2019,8,1),
            download: 'https://play.google.com/store/apps/details?id=com.dxapps.plankmusictimer'
        }
    };

    goinfo: Experience = {
        id: 'goinfo', 
        title: 'GO Info', 
        briefDescription: 'GO Info was an Android app for Pokémon GO players, to keep the user up to date with current in-game events.', 
        color: '#25CCAA', 
        tags: ['Android','Flutter','Firebase'], 
        platform: 'mobile', 
        icon: '/assets/projects/goinfo/goinfo-icon.png', 
        mainImage: '/assets/projects/goinfo/goinfo-0.png',
        images: ['/assets/projects/goinfo/goinfo-1.png','/assets/projects/goinfo/goinfo-2.png','/assets/projects/goinfo/goinfo-3.png','/assets/projects/goinfo/goinfo-4.png'], 
        overview: {
            description: "GO Info was an Android app for Pokémon GO players, to keep the user up to date with current in-game events.<br><br>Events are beautifully displayed, including countdowns.",
            roles: ['Head Developer'], 
            stack: ['Android','Flutter','Firebase'],  
            startDate: new Date(2019,8,1),
            endDate: new Date(2019,10,1),
        },
        infoParagraphs: [{
            header: 'Features',
            text: '- App Widget for events available.<br>- Events are updated as they are announced.<br>- Know exactly when events are happening with countdowns.<br>- New shiny Pokémon that are introduced in an event are prominently displayed.<br>- See the current reward pool for Field Research',
        }]
    };

    dtt: Experience = {
        id: 'dtt', 
        title: 'DTT', 
        briefDescription: 'Worked on several Android apps at DTT for my internship and part-time job.', 
        color: '#E65541', 
        tags: ['Android', 'Java', 'Firebase'], 
        platform: 'mobile', 
        icon: '/assets/projects/dtt/dtt-icon.png', 
        mainImage: '/assets/projects/dtt/dtt.png',
        overview: {
            description: 'Worked on several Android apps at DTT for my internship and part-time job.',
            roles: ['Feature Developer', 'Big Fixing'], 
            stack: ['Android', 'Java', 'Firebase'],  
            startDate: new Date(2016,2,1),
            endDate: new Date(2018,0,1)
        }
    };

    all: Array<Experience> = [
        this.portfolio,
        this.demonth,
        this.pmt,
        this.goinfo,
        this.dtt
    ];
}