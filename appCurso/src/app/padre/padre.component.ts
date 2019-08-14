import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  // Para el caso de pasar el valor sin array
  // valorPadre: string = 'Este texto se inyecta desde el padre';

  // Para el caso de pasar el valor con array
  avisos: string[] = ['Aviso 1', 'Aviso 2', 'Aviso 3'];
  texto: string;

  mostrarMensaje(event) {
    this.texto = event + ' marcado como leído';
  }

  constructor() { }

  ngOnInit() {
  }

}
