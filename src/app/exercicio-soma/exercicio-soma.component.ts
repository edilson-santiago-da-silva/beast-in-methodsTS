import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-soma',
  templateUrl: './exercicio-soma.component.html',
  styleUrls: ['./exercicio-soma.component.css']
})
export class ExercicioSomaComponent implements OnInit {

  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  somar(): void{
    this.resultado = this.num1 * this.num2;
  }

}
