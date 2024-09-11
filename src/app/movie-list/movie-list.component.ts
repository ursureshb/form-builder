import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';

interface Movie {
  title: string;
  releaseDate: string;
  rating: number;
}

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {

  movies:any = [];


  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getItems().subscribe(data => {
      this.movies = data;
    });
  }

}
