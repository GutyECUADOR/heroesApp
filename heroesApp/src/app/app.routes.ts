import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeroesComponent } from './components/heroes/heroes.component';


const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: '**', pathMatch:'full', redirectTo: 'inicio' }
];

export const APP_ROUNTING = RouterModule.forRoot(routes);