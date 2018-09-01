import { Component, OnInit } from '@angular/core';
import { HeroeService, Heroe } from '../../../services/heroe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private heroeService: HeroeService, private router: Router) { 
  }

  ngOnInit() {
  }

  searchHeroe(terminoBusqueda: string){
    this.router.navigate(['/busqueda', terminoBusqueda]);

  }
}
