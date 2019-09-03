import { Component, OnInit } from '@angular/core';
import { LoadfileService } from '../../servicios/loadfile.service';
import * as _ from 'lodash';
import { Archivo } from '../file.modal';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  selectedFiles: FileList;
  currentUpload: Archivo;   // Es el archivo que se va a subir

  loading = false;    // para que Angular sepa cuando está cargando el archivo

  constructor(public loadfileService: LoadfileService ) { }

  ngOnInit() {
  }

  detectFile(event) {
    this.selectedFiles = event.target.files;
  }

  // Método para la subida del archivo
  uploadSingle() {
    const file = this.selectedFiles.item(0);    // Es el archivo que selecciona en el HTML
    this.currentUpload = new Archivo(file);     // Son los metadatos del archivo
    this.loading = true;                        // Para indicar que está cargando
    // Código del servicio obsoleto (respecto a Firebase)
      // y falla la siguiente sentencia así que lo comento
    // this.loadfileService.pushUpload(this.currentUpload); // La sentencia para la subida
  }
}
