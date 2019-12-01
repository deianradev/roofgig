import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Venue } from '../../shared/models/venue.model';
import { ActivatedRoute } from '@angular/router';
import { VenueService } from '../services/venue.service';

@Component({
  selector: 'app-venue-details',
  templateUrl: './venue-details.page.html',
  styleUrls: ['./venue-details.page.scss'],
})
export class VenueDetailsPage implements OnInit {

  isFav = false;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  venue: Venue;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private venueService: VenueService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('venueId')) {
        this.navCtrl.navigateBack('/tabs/venue-search');
        return;
      }
      this.venue = this.venueService.getVenueById(paramMap.get('venueId'));
    })
  }

  previous() {
    this.navCtrl.pop();
  }
  test(url) {
    window.open(url)
  }

  addToFavs() {
    this.isFav = !this.isFav;
  }
}
