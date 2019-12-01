import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Venue } from '../../shared/models/venue.model';
import { NavController } from '@ionic/angular';
import { VenueService } from '../services/venue.service';

@Component({
  selector: 'app-venue-search-results',
  templateUrl: './venue-search-results.page.html',
  styleUrls: ['./venue-search-results.page.scss'],
})
export class VenueSearchResultsPage implements OnInit {

  venues: Venue[];

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private venueService: VenueService) { }

  ngOnInit() {
    this.venues = this.venueService.venues;
    // this.route.paramMap.subscribe(paramMap => {
    //   if (!paramMap.has('venueId')) {
    //     this.navCtrl.navigateBack('artist/venue-search/venue-search');
    //     return;
    //   }
    //   this.venue = this.venueService.getVenueById(paramMap.get('venueId'));
    // })
  }

  onContact() {
    //this.router.navigateByUrl('/venue-details');
  }
}
