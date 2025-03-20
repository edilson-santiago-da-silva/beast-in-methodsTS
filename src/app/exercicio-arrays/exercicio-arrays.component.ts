import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-arrays',
  templateUrl: './exercicio-arrays.component.html',
  styleUrls: ['./exercicio-arrays.component.css']
})
export class ExercicioArraysComponent implements OnInit {

  lista: string[] = [];
  novoItem: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  adicionar(): void{
   
    if(this.novoItem.trim()){
      const itemFormatado = this.novoItem.trim().toLowerCase();
      if (itemFormatado && !this.lista.some(item => item.toLowerCase() === itemFormatado)) {
        this.lista.push(this.novoItem);
        this.novoItem = ''
      } else {
        alert('Item já existe na lista')
      }
    }
  }

  remover(index: number): void{
    this.lista.splice(index, 1);
  }
}
