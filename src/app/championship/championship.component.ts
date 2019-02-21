import { OnInit, Component } from '@angular/core';
import { ChampionshipService } from './championship.service';
import { Match } from './matchs.entity';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-championship',
  templateUrl: './championship.component.html',
})
export class ChampionshipComponent implements OnInit {
  title = 'moviesCup-front';

  match: Match;
  ids: number[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private championshipService: ChampionshipService) {
  }

  ngOnInit(): void {
    this.getChampionship();
  }

  private getChampionship() {
    this.ids = JSON.parse(`[${this.route.snapshot.paramMap.get('ids')}]`);
    this.championshipService.execute(this.ids).subscribe(item => this.match = item);
  }

  goBack(): void {
    const ids = this.ids;
    this.router.navigate(['/movies', { ids }]);
    this.championshipService.msgClear();
  }

}
