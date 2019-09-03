import { Component, OnInit, Input } from '@angular/core';
import { Archivo } from './../file.modal';
import { LoadfileService } from '../../servicios/loadfile.service';
import { stringLength } from '@firebase/util';

import {BrowserModule, DomSanitizer, SafeResourceUrl} from '@angular/platform-browser'

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  urlSafe: SafeResourceUrl;

  @Input() upload: Archivo;

  constructor(private loadfileService: LoadfileService,
              private sanitization: DomSanitizer) {  }

  ngOnInit() {
  }

  deleteUpload(upload) {
    this.loadfileService.deleteUpload(this.upload);
  }

  // Método para evitar el cross-site scripting (XSS) de Angular
  metodoUrl(upload) {
    this.urlSafe = this.sanitization.bypassSecurityTrustResourceUrl(this.upload.url);
    // console.log('Hacemos segura la url al contruir el link');
    return this.urlSafe;
  }
}

