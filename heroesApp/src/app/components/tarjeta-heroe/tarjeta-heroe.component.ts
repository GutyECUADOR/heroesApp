import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-heroe',
  templateUrl: './tarjeta-heroe.component.html',
  styleUrls: ['./tarjeta-heroe.component.css']
})
export class TarjetaHeroeComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() indice: number;
  @Output() heroeSeleccionadoEvent: EventEmitter<number> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showHeroe() {
   this.heroeSeleccionadoEvent.emit(this.indice);
  }

  regresar() {
    this.router.navigate(['/heroes']);
  }

}
