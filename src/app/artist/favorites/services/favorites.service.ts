import { Injectable } from '@angular/core';
import { Venue } from '../../shared/models/venue.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private _venues: Venue[] = [
    new Venue(
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
    ),
    new Venue(
      '2',
      "O'Sullivans",
      'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2019/01/23130814/capitol-theater1.jpg',
      'Come out to have a good time...',
      43
    ),
    new Venue(
      '3',
      "The Stadium",
      'https://images.pexels.com/photos/569849/pexels-photo-569849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'Oh the memories here...',
      34
    ),
    new Venue(
      '4',
      "The Opera House",
      'https://images.pexels.com/photos/2372945/pexels-photo-2372945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'Stop by and visit us...',
      366
    )];

  constructor() { }

  get venues() {
    return [...this._venues]
  }

  getVenueById(id: string) {
    return { ...this._venues.find(p => p.venueId === id) }
  }

}
