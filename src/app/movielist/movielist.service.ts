import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Movie } from '../movie/movie';

@Injectable()
export class MovieListService {
  constructor(private http: Http) { }

  getMovies(movies: string) {
   // console.log("sdvwj" + movies);
  return this.http.get('https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query='+movies+'&language=en-US&api_key=dccd837a58cb909786735114f0d73772').map((response) => response.json().results || []);  
 }
 FavMovies() {
   return this.http.get('http://localhost:8080/v1/api/movie/')
   .map((response) => response.json() || []);
}
}
