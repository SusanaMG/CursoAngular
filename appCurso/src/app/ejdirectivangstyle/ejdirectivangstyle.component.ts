import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangstyle',
  templateUrl: './ejdirectivangstyle.component.html',
  styleUrls: ['./ejdirectivangstyle.component.css']
})
export class EjdirectivangstyleComponent implements OnInit {

  puntuacion: number;

  constructor() { }

  ngOnInit() {
  }

  setColor() {
    return this.puntuacion >= 5 ? 'green' : 'red';
  }
}
