import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-venue-details',
  templateUrl: './venue-details.page.html',
  styleUrls: ['./venue-details.page.scss'],
})
export class VenueDetailsPage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  previous() {
    this.navCtrl.pop();
  }
}
