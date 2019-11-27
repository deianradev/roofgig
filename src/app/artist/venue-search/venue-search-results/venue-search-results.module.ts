import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VenueSearchResultsPageRoutingModule } from './venue-search-results-routing.module';

import { VenueSearchResultsPage } from './venue-search-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VenueSearchResultsPageRoutingModule
  ],
  declarations: [VenueSearchResultsPage]
})
export class VenueSearchResultsPageModule {}
