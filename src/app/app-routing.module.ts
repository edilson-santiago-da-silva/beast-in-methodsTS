import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercicioSaudacaoComponent } from './exercicio-saudacao/exercicio-saudacao.component';
import { ExercicioSomaComponent } from './exercicio-soma/exercicio-soma.component';
import { ExercicioArraysComponent } from './exercicio-arrays/exercicio-arrays.component';
const routes: Routes = [
  {path: '', component: ExercicioArraysComponent},
  {path: 'exsoma', component: ExercicioSomaComponent},
  {path: 'exsaudacao', component: ExercicioSaudacaoComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
