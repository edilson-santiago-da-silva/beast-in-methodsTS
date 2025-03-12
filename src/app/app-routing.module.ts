import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercicioSaudacaoComponent } from './exercicio-saudacao/exercicio-saudacao.component';

const routes: Routes = [
  {path: '', component: ExercicioSaudacaoComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
