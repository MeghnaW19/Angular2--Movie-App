import { Component, Input, OnInit } from '@angular/core';
import { MovielistComponent } from '../movielist/movielist.component';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MovieListService } from '../movielist/movielist.service';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-fav-movies',
  templateUrl: './fav-movies.component.html',
  styleUrls: ['./fav-movies.component.css']
})
export class FavMoviesComponent implements OnInit {
movies : MovielistComponent[];
  constructor(private route: ActivatedRoute,private movieService: MovieListService) { }
ngOnInit(): void {

      this.route.params
        .switchMap((params: Params) => this.movieService.FavMovies())
        .subscribe(movies => this.movies = movies);
        console.log('inside movie.ts' + this.movies);
  }
  FavMovies()  {
    console.log("inside fav ");
    this.movieService.FavMovies().subscribe(movies => this.movies  =  movies);
    }

    
}
