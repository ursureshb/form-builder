import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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

  movies: Movie[] = [
    { title: 'Inception', releaseDate: '2010-07-16', rating: 8.8 },
    { title: 'Interstellar', releaseDate: '2014-11-07', rating: 8.6 },
    { title: 'The Dark Knight', releaseDate: '2008-07-18', rating: 9.0 },
    { title: 'The Matrix', releaseDate: '1999-03-31', rating: 8.7 },
    { title: 'Kalki', releaseDate: '2024-06-10', rating: 7.8 }
  ];

}
