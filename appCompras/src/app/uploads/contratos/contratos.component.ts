import { Component, OnInit } from '@angular/core';
import { LoadfileService } from '../../servicios/loadfile.service';
import { Archivo } from './../file.modal';
// import { FirebaseListObservable } from 'angularfire2/database'; // Comentado por obsoleto

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnInit {

  // uploads: FirebaseListObservable<Archivo[]>;     // Comentado para que no falle
  uploads: Archivo[];       // Sentencia para que no falle. Es un sustituto

  constructor(private loadfileService: LoadfileService) { }

  ngOnInit() {
    this.uploads = this.loadfileService.getUploads();
  }

}
