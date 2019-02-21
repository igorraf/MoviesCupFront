import { Movie } from '../movies/movie.entity';

export class Match {
  first: Movie;
  second: Movie;
  prevA: Match;
  prevB: Match;
}
