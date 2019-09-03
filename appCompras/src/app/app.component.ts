import { Component, OnInit } from '@angular/core';
// PRUEBAS de importacion de firebase
// import * as firebase from 'firebase'; // como en el video
// import * as firebase from '@angular/fire';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { firebase } from '@firebase/app'; // La misma importación que en el Servicio
import '@firebase/auth'; // La misma importación que en el Servicio

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appCompras';

  ngOnInit() {
    // Método para conectar con el proyecto en web de Firebase
    firebase.initializeApp({
      // Claves de la API de comunicación de la BBDD Firebase
      apiKey: 'AIzaSyB2AjY7-WW1DhqdwenvmRiOZyEAwmVUH5w',
      authDomain: 'comprasapp-800ac.firebaseapp.com',
      databaseURL: 'https://comprasapp-800ac.firebaseio.com',
      projectId: 'comprasapp-800ac',
      storageBucket: 'comprasapp-800ac.appspot.com',
      messagingSenderId: '244909525940',
      appId: '1:244909525940:web:ca5d08b1681050ae'
    });
  }
}
