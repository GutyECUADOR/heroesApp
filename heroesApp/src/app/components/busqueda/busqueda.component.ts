import { Component, OnInit } from '@angular/core';
import { HeroeService, Heroe } from '../../services/heroe.service';
import { Router, ActivatedRoute, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  private heroesBusqueda: Heroe[];
  public termino: string;

  constructor(
    private heroesService: HeroeService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.activatedRoute.params.subscribe(parametros => {
      this.termino = parametros['termino'];
      this.heroesBusqueda = this.heroesService.searchHeroes(this.termino);
    });
  }

  ngOnInit() {

  }


  regresar(evento) {
    console.log(evento);
    this.router.navigate(['/heroes']);
  }

}
