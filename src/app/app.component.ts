import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CommonService } from './services/common.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MovieListComponent,
    HttpClientModule,ReactiveFormsModule,ItemFormComponent],
  providers:[CommonService],
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
