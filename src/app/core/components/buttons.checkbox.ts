import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../movies/movie.entity';

@Component({
  selector: 'app-buttons-checkbox',
  templateUrl: './buttons.checkbox.html'
})

export class ButtonsCheckboxComponent {

  @Input() movie: Movie;
  isChecked = '0';

}
