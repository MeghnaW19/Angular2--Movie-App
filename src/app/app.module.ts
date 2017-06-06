import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { MovieListService } from './movielist/movielist.service';
import { Routes , RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MovielistComponent } from './movielist/movielist.component';
import { NavSearchComponent } from './nav-search/nav-search.component';
import { FavMoviesComponent } from './fav-movies/fav-movies.component';

const routes: Routes = [
  { path: 'movies/:movieName',  component: MovielistComponent },
  { path: 'fav-mov', component: FavMoviesComponent }];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MovielistComponent,
    NavSearchComponent,
    FavMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [MovieListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
