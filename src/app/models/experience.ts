/* 
    id - id for the project [string]
    title - name of the project [string]
    briefDescription - A simple and brief description of the project for the cards [string]
    color - thematic color of the project [string]
    tags - highlighting tools used during the project [Array of string]
    platforms - release platform of the project (web/mobile) [string]
    icon - (App) Icon of the project [Image path]
    mainImage - key image of the project, used for the cards [Image path]
    images - array of images of the project [Array of Image path]
    overview - overview of the project on the detail page [overview]
    -- description - descriptive introduction of the project [string]
    -- roles - roles accompanied during the project [string]
    -- stack - tools/languages used in the project [string]
    -- startDate - project start date [Date] (optional)
    -- endDate - project end date [Date] (optional)
    -- link - link to live project (if website) [string] (optional)
    -- download - link to download project (if app) [string] (optional)
    -- repo - link to repository (string) (optional)
    infoParagraphs - customised paragraph sections [Array of infoParagraph]
    -- header - header title of the paragraph [string]
    -- text - paragraph text [string]
    -- image - image for the paragraph [Image path]
*/

export interface overview {
    description: string,
    roles: Array<string>,
    stack: Array<string>,
    startDate?: Date,
    endDate?: Date,
    link?: string,
    download?: string,
    repo?: string
}

export interface infoParagraph {
    header: string,
    text: string,
    image?: string
}

export interface Experience {
    id: string,
    title: string,
    briefDescription: string,
    color: string,
    tags: Array<string>,
    platform: string,
    icon: string,
    mainImage: string,
    images?: Array<string>,
    overview: overview
    infoParagraphs?: Array<infoParagraph>,
}