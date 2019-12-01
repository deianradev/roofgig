import { Component, OnInit } from '@angular/core';
import { Venue } from '../shared/models/venue.model';
import { FavoritesService } from './services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  venues: Venue[];

  constructor(private favoritesService: FavoritesService) {
  }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.venues = this.favoritesService.venues;

  }
}
