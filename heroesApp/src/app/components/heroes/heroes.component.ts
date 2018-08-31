import { Component, OnInit } from '@angular/core';
import { HeroeService, Heroe } from '../../services/heroe.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  private heroes: Heroe[];

  constructor(private _heroeService: HeroeService) {
  }

  ngOnInit() {
    this.heroes = this._heroeService.getHeroes();
    console.log(this.heroes);
  }

}
