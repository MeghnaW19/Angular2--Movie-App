import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import { NavSearchComponent } from '../nav-search/nav-search.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() {
  }

  favMovies() {
    this.router.navigate(['fav-mov']);
}
}
