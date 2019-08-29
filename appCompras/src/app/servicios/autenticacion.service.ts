import { Injectable } from '@angular/core';
// PRUEBAS de importacion de firebase
// import * as firebase from 'firebase';      //como en el video
// import * as firebase from '@angular/fire';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { firebase } from '@firebase/app';
import '@firebase/auth';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  // Método para registrar usuarios
  registroUsuario(userdata) {
    firebase.auth().createUserWithEmailAndPassword(userdata.email, userdata.password)
        .catch(error => {
          console.log(error);
        });
  }

  // Método para realizar el inicio de sesión
  inicioSesion(userdata) {
    firebase.auth().signInWithEmailAndPassword(userdata.email, userdata.password)
        .then( response => {
          console.log(response);
          this.router.navigate(['inicio']);
        })
        .catch(
          error => {
            console.log(error);
          }
        );
  }

  // Método para conocer si la sesión etá abierta o no
  isAuthenticated() {
    const user = firebase.auth().currentUser;
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  // Método para cerrar la sesión
  logout() {
    firebase.auth().signOut();
  }

}

