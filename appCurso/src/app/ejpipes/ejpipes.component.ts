import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejpipes',
  templateUrl: './ejpipes.component.html',
  styleUrls: ['./ejpipes.component.css']
})
export class EjpipesComponent implements OnInit {

  hoy = new Date();
  ciudad: string = 'Madrid';
  resultado: number = 1.148;
  resultado2: number = 1.2;
  dolareuro: number = 0.88;
  nombre: string = 'Laura';
  sexo: string = 'mujer';
  encabezamiento: any = {'hombre':'Estimado', 'mujer':'Estimada'};
  nombre2: string = 'Pedro';
  sexo2: string = 'hombre';

  constructor() { }

  ngOnInit() {
  }

}
