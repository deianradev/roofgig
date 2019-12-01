export class Venue {
    constructor(
        public venueId: string,
        public title: string,
        public src: string,
        public description: string,
        public commission: number,
        public socialMedia?: [
            {
                socialMediaChannel: string,
                socialMediaUrl: string
            }
        ],
        public photos?: string[],
    ) { }
}