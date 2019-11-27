import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venue-search-results',
  templateUrl: './venue-search-results.page.html',
  styleUrls: ['./venue-search-results.page.scss'],
})
export class VenueSearchResultsPage implements OnInit {

  items = [{
    text: 'TGI Fridays',
    src: 'https://media-cdn.tripadvisor.com/media/photo-s/10/e2/be/d8/angel-s-steak-pub-interior.jpg',
    longDesc: 'The one and only...'
  },
  {
    text: "O'Sullivans",
    src: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2019/01/23130814/capitol-theater1.jpg',
    longDesc: 'Come out to have a good time...'
  },
  {
    text: "The Stadium",
    src: 'https://images.pexels.com/photos/569849/pexels-photo-569849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    longDesc: 'Oh the memories here...'
  },
  {
    text: "The Opera House",
    src: 'https://images.pexels.com/photos/2372945/pexels-photo-2372945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    longDesc: 'Stop by and visit us...'
  }];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onContact() {
    this.router.navigateByUrl('/venue-details');
  }
}
