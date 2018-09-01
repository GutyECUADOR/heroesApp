import { Component, OnInit } from '@angular/core';
import { HeroeService, Heroe } from '../../services/heroe.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  private heroes: Heroe[];

  constructor(private heroeService: HeroeService, private router:Router) {
  }

  ngOnInit() {
    this.heroes = this.heroeService.getHeroes();
    console.log(this.heroes);
  }

  showHeroe(indice: number){
    this.router.navigate(['/heroe', indice ]);
  }

}
