import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangifelsemet',
  templateUrl: './ejdirectivangifelsemet.component.html',
  styleUrls: ['./ejdirectivangifelsemet.component.css']
})
export class EjdirectivangifelsemetComponent implements OnInit {

  capital: string;

  constructor() { }

  ngOnInit() {
  }

  setResultado() {
    return this.capital === 'Madrid' ? true : false;
  }

}
