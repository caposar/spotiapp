import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistaComponent } from './components/artista/artista.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'artists/:id', component: ArtistaComponent},
  {path: '', component: HomeComponent}, // De esta manera nos evitamos la redireccion
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
