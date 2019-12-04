import { Injectable } from '@angular/core';
import { UpcomingGig } from '../../shared/models/upcomingGig.model';
import { Venue } from '../../shared/models/venue.model';

@Injectable({
  providedIn: 'root'
})
export class UpcomingService {

  private _venue = new Venue(
    '1',
    'TGI Fridays',
    'https://media-cdn.tripadvisor.com/media/photo-s/10/e2/be/d8/angel-s-steak-pub-interior.jpg',
    'The one and only...There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
    78,
    [
      { socialMediaChannel: 'facebook', socialMediaUrl: 'https://www.facebook.com/OSullivansArlington/' }
      //{ 'twitter': 'twitter.com' }
    ],
    ['https://images.pexels.com/photos/569849/pexels-photo-569849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/878998/pexels-photo-878998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/2035648/pexels-photo-2035648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260']
  );

  private _upcomingGigs: UpcomingGig[] = [
    new UpcomingGig(
      '1',
      this._venue,
      new Date(),
      'Arlington, VA'
    )];

  constructor() { }

  get upcomingGigs() {
    return [...this._upcomingGigs]
  }

  getUpcomingGigsById(id: string) {
    return { ...this._upcomingGigs.find(p => p.upcomingId === id) }
  }
}
