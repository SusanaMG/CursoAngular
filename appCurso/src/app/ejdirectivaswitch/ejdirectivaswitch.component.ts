import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivaswitch',
  templateUrl: './ejdirectivaswitch.component.html',
  styleUrls: ['./ejdirectivaswitch.component.css']
})
export class EjdirectivaswitchComponent implements OnInit {

  jugadores: any[] = [
    {nombre: 'Earving Magic Johnson', equipo: 'L.A. Lakers'},
    {nombre: 'Michael Jordan', equipo: 'Chicago Bulls'},
    {nombre: 'Larry Bird', equipo: 'Boston Celtics'},
    {nombre: 'Kareem Abdul Jabbar', equipo: 'L.A. Lakers'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
