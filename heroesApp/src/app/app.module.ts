import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// COMPONENTES

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

// RUTAS
import { APP_ROUNTING } from './app.routes';

// SERVICIOS

import { HeroeService } from './services/heroe.service';
import { TarjetaHeroeComponent } from './components/tarjeta-heroe/tarjeta-heroe.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    HeroesComponent,
    HeroeComponent,
    BusquedaComponent,
    TarjetaHeroeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUNTING
  ],
  providers: [HeroeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
