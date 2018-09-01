import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService, Heroe } from '../../services/heroe.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  private heroe: Heroe;

  constructor(private activatedRoute : ActivatedRoute, private heroeService : HeroeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(parametros =>{
      let id = parametros['id'];
      this.heroe = this.heroeService.getHeroe(id);
      console.log(this.heroe);
    });
  }

}
