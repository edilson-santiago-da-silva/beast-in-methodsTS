import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-saudacao',
  templateUrl: './exercicio-saudacao.component.html',
  styleUrls: ['./exercicio-saudacao.component.css']
})
export class ExercicioSaudacaoComponent implements OnInit {

  nome: string = 'Santiago';

  constructor() { }

  ngOnInit(): void {
  }

  saudacao(): string {
    return `Olá, ${this.nome}! Bem vindo ao Angular.`;
  }

}
