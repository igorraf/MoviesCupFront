import { Component, OnInit, ViewChildren, QueryList, AfterContentChecked } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from './movie.entity';
import { ButtonsCheckboxComponent } from '../core/components/buttons.checkbox';
import { ChampionshipService } from '../championship/championship.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  title = 'moviesCup-front';

  movies: Movie[] = [];

  @ViewChildren(ButtonsCheckboxComponent) chkMovies !: QueryList<ButtonsCheckboxComponent>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private championshipService: ChampionshipService) {
    console.log(movieService);
  }

  ngOnInit(): void {
    this.getMovies();
  }

  getCount(): number {
    return (this.chkMovies) ? this.chkMovies.length : 0;
  }

  getSelected(): number {
    return (this.chkMovies) ? this.chkMovies.filter(chk => chk.isChecked === '1').length : 0;
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => {
        this.movies = movies;
      });
  }

  execute(): void {
    const ids: number[] = this.chkMovies
      .filter(chk => chk.isChecked === '1')
      .map(item => item.movie.id);

    this.router.navigate(['/championship', { ids }]);
  }
}
