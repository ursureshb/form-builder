import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'form-builder';

  constructor() {

  }

  ngOnInit() {

  }

  addNumbers(valueOne:number,valueTwo:number) {
      return valueOne + valueTwo;
  }

}
