import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { FiltersPage } from './filters/filters.page';


@Component({
  selector: 'app-venue-search',
  templateUrl: './venue-search.page.html',
  styleUrls: ['./venue-search.page.scss'],
})
export class VenueSearchPage implements OnInit {

  currentDate: Date;

  constructor(private router: Router, private navCtrl: NavController, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.currentDate = new Date();
  }

  onSearch() {
    //this.router.navigateByUrl('/tabs/venue-search/venue-search-results');
    this.navCtrl.navigateForward('/tabs/venue-search/venue-search-results');
  }

  async openFiltersModal() {
    const modal = await this.modalCtrl.create({
      component: FiltersPage
    });
    return await modal.present();
  }

}
