import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movies/movie.component';
import { ChampionshipComponent } from './championship/championship.component';

@NgModule({
  imports: [RouterModule.forRoot(AppRoutingModule.appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static appRoutes: Routes = [
    { path: 'championship', component: ChampionshipComponent },
    { path: 'movies', component: MovieComponent },
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    // { path: '**', component: PageNotFoundComponent }
  ];
}
