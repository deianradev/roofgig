import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VenueSearchPageRoutingModule } from './venue-search-routing.module';

import { VenueSearchPage } from './venue-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VenueSearchPageRoutingModule
  ],
  declarations: [VenueSearchPage]
})
export class VenueSearchPageModule {}
