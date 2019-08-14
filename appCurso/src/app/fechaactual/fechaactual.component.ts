import {Component} from '@angular/core';

@Component ({
  selector: 'app-fechaactual',
  template: `
  <p>Madrid, {{ hoy | date: 'd/M/y H:m' }}</p>
  <h5>Ejemplo de anidamiento de componentes</h5>
  <app-copyright></app-copyright>
  `,
  styleUrls: ['./fechaactual.component.css']
})

export class FechaactualComponent {
  hoy = new Date();

}


/* CÓDIGO ANTES DE HACER LAS MODIFICACIONES Y DE ELIMINAR EL ARCHIVO
    fechaactual.component.html */
/*
import {Component} from '@angular/core';

@Component ({
  selector: 'app-fechaactual',
  templateUrl: './fechaactual.component.html',
  styleUrls: ['./fechaactual.component.css']
})

export class FechaactualComponent {
  hoy = new Date();
}
 */
