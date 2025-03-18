import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExercicioSaudacaoComponent } from './exercicio-saudacao/exercicio-saudacao.component';
import { ExercicioSomaComponent } from './exercicio-soma/exercicio-soma.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercicioSaudacaoComponent,
    ExercicioSomaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
