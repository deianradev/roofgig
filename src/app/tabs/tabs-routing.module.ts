import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'venue-search',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../artist/venue-search/venue-search.module').then(m => m.VenueSearchPageModule)
          },
          {
            path: 'venue-search-results',
            loadChildren: () =>
              import('../artist/venue-search/venue-search-results/venue-search-results.module').then(m => m.VenueSearchResultsPageModule)
          },
          {
            path: ':venueId',
            loadChildren: () =>
              import('../artist/venue-search/venue-details/venue-details.module').then(m => m.VenueDetailsPageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/venue-search',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/venue-search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
