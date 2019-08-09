import {Component} from '@angular/core';

@Component ({
  selector: 'app-fechaactual',
  template: `
  <p>Madrid, {{ hoy | date: 'd/M/y H:m' }}</p>
  <app-copyright></app-copyright>
  `,
  styleUrls: ['./fechaactual.component.css']
})

export class FechaactualComponent {
  hoy = new Date();
}


/* CÓDIGO ANTES DE HACER LAS MODIFICACIONES Y DE ELEIMINAR EL ARCHIVO
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
