import { Venue } from './venue.model';

export class UpcomingGig {
    constructor(
        public upcomingId: string,
        public venue: Venue,
        public gigDate: Date,
        public gigLocation: string
    ) { }
}