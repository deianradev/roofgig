import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'favorites',
    loadChildren: () => import('./artist/favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./artist/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'upcoming',
    loadChildren: () => import('./artist/upcoming/upcoming.module').then( m => m.UpcomingPageModule)
  },

  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth/auth.module').then(m => m.AuthPageModule)
  // },
  // {
  //   path: 'venue-search-results',
  //   loadChildren: () => import('./artist/venue-search-results/venue-search-results.module').then(m => m.VenueSearchResultsPageModule)
  // },
  // {
  //   path: 'venue-details',
  //   loadChildren: () => import('./artist/venue-search/venue-details/venue-details.module').then(m => m.VenueDetailsPageModule)
  // },
  // {
  //   path: 'venue-search',
  //   loadChildren: () => import('./public/venue-search/venue-search.module').then( m => m.VenueSearchPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
