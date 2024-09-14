import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EncountersComponent } from './pages/encounters/encounters.component';
import { CreaturesComponent } from './pages/creatures/creatures.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'encounters',
    component: EncountersComponent,
  },
  {
    path: 'creatures',
    component: CreaturesComponent,
  },
];
