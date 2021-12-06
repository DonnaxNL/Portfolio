export class Experience {
    constructor(
        public id: string,
        public title: string,
        public shortDescription: string,
        public description: string,
        public position: string,
        public color: string,
        public icon: string,
        public mainImage: string,
        public images: any,
        public technologies: any,
        public platform: string,
        public startDate?: Date,
        public endDate?: Date,
        public link?: string,
        public download?: string
    ) { }
}