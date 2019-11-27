import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VenueSearchResultsPage } from './venue-search-results.page';

const routes: Routes = [
  {
    path: '',
    component: VenueSearchResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VenueSearchResultsPageRoutingModule {}
