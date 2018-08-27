import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// COMPONENTES

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';

// RUTAS
import { APP_ROUNTING } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    HeroesComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUNTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
