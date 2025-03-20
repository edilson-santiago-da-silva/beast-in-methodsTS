import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-soma',
  templateUrl: './exercicio-soma.component.html',
  styleUrls: ['./exercicio-soma.component.css']
})
export class ExercicioSomaComponent implements OnInit {

  num1: number | null = null;
  num2: number | null = null;
  resultado: number | null = null;


  constructor() { }

  ngOnInit(): void {
  }

  somar(): void{
    this.resultado = (this.num1 ?? 0) + (this.num2 ?? 0);
  }

  reset(): void{
    this.num1 = null;
    this.num2 = null;
    this.resultado = 0;
  }
}
