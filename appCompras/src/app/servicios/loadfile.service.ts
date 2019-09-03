/*
EL CÓDIGO DEL VIDEO ESTÁ ABAJO PORQUE EL CURSO ESTÁ OBSOLETO Y NO FUNCIONA
Aquí dejo un código reducido a mínimo para que no dé fallos de compilación.
La subida de ficheros no es funcional.
Se inicializa el array de ficheros con archivos para poder visualizar los componentes.
*/

import { Injectable } from '@angular/core';
/* // VIDEO: IMPORTACIONES PARA SUBIR FICHEROS
import { AngularFireDatabase, FirebaseListObservable,
        FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Archivo } from '../uploads/file.modal';
*/
// PRUEBAS DE IMPORTACIONES PARA FIREBASE (no son del video)
import { firebase } from '@firebase/app'; // La misma importación que en el Servicio para autenticación
import '@firebase/auth'; // La misma importación que en el Servicio para autenticación
import { Archivo } from '../uploads/file.modal';

@Injectable({
  providedIn: 'root'
})
export class LoadfileService {
  // Codigo completo obsoleto de la clase está más abajo!!!

  uploads: Archivo[];     // Sentencia para que no falle. Es un sustituto

  constructor() { }

  // Método para obtener los ficheros (modificado manualmente)
  getUploads() {
    // Codigo obsoleto de interacción con la BBDD (está más abajo)
    // Aquí inicializo con un listado de ficheros para poder seguir trabajando
    this.uploads = [{
      $key: '123',
      file: new File(['ContratoEj'], 'ContratoEj.doc', {type: 'application/msword'}),
      name: 'ContratoEj.doc',
      url: 'C:/Users/A702362/angular_workspace/appCompras/src/ficheros/ContratoEj.doc',
      progress: 100,
      createdAt: new Date()
      },
      {
      $key: '456',
      file: new File(['ContratoEj'], 'ContratoEj.pdf', {type: 'application/pdf'}),
      name: 'ContratoEj.pdf',
      // url: './../../../ficheros/ContratoEj.pdf',
      url: 'C:/Users/A702362/angular_workspace/appCompras/src/ficheros/ContratoEj.pdf',
      // url: 'file:///C:/Users/A702362/angular_workspace/appCompras/src/ficheros/ContratoEj.pdf',
      progress: 100,
      createdAt: new Date()
    }];
    return this.uploads;
  }

  // Método para borrar en la BBDD
  deleteUpload(upload: Archivo) {
    // Codigo obsoleto de interacción con la BBDD (está más abajo)
    // Aquí no pongo nada para que no falle
    return console.log('Pulsando aquí se borraría el archivo');
  }

}
/*
// CODIGO QUE FALLA PORQUE EL CURSO ESTÁ OBSOLETO (respecto a Firebase)

import { Injectable } from '@angular/core';
/* // VIDEO: IMPORTACIONES PARA SUBIR FICHEROS
import { AngularFireDatabase, FirebaseListObservable,
        FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Archivo } from '../uploads/file.modal';
// PRUEBAS DE IMPORTACIONES PARA FIREBASE (no son del video)
import { firebase } from '@firebase/app'; // La misma importación que en el Servicio para autenticación
import '@firebase/auth'; // La misma importación que en el Servicio para autenticación
import { Archivo } from '../uploads/file.modal';

@Injectable({
  providedIn: 'root'
})
export class LoadfileService {

  private basePath:string = '/uploads';
  uploads: FirebaseListObservable<Archivo[]>;

  constructor(public angularFireDatabase: AngularFireDatabase) { }

  // Método de comunicación con la BBDD Firebase
  pushUpload(upload: Archivo) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes * 100);
      },
      (error) => {
        console.log(error);
      },
      () => {
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(upload);
      });
  }

  // Método de comunicación con la BBDD Firebase
  private saveFileData(upload: Archivo) {
    this.angularFireDatabase.list(`${this.basePath}/`).push(upload);
  }

  // Método para obtener los ficheros de la BBDD
  getUploads() {
    this.uploads = this.angularFireDatabase.list(this.basePath);
    return this.uploads;
  }

  // Método general para borrar en la BBDD
  deleteUpload(upload: Archivo) {
    this.deleteFileData(upload.$key)
            .then(() => {
              this.deleteFileStorage(upload.name)
            })
            .catch(error => console.log(error));
  }

  // Método para borrar de la BBDD por la clave del archivo
  private deleteFileData(key: string) {
    return this.angularFireDatabase.list(`${this.basePath}/`).remove(key);
  }

  // Método para borrar directamente el archivo
  private deleteFileStorage(name: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete();
  }


}
*/
