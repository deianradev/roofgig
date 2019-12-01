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
        path: 'favorites',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../artist/favorites/favorites.module').then(m => m.FavoritesPageModule)
          }
        ]
      },
      {
        path: 'upcoming',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../artist/upcoming/upcoming.module').then(m => m.UpcomingPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../artist/profile/profile.module').then(m => m.ProfilePageModule)
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
