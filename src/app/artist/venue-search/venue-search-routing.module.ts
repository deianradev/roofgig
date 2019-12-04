import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VenueSearchPage } from './venue-search.page';

const routes: Routes = [
  {
    path: '',
    component: VenueSearchPage
  },  {
    path: 'filters',
    loadChildren: () => import('./filters/filters.module').then( m => m.FiltersPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VenueSearchPageRoutingModule {}
