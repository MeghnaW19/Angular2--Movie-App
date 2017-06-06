import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Movie } from '../movie/movie';
import { MovieListService } from './movielist.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  movies= [];
  constructor(private route: ActivatedRoute, private movieService: MovieListService) { }
  ngOnInit(): void {
      this.route.params
        .switchMap((params: Params) => this.movieService.getMovies(params['movieName']))
        .subscribe(movies => {
          this.movies = movies;
          console.log('inside movie.ts' + movies);
        });
  }
}
