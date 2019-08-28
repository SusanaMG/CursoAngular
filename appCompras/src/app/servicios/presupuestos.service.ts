import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

  presURL = 'https://comprasapp-800ac.firebaseio.com/presupuestos.json';
  preURL = 'https://comprasapp-800ac.firebaseio.com/presupuestos';

  constructor(private http: Http) { }

  // Método usando petición post para crear registros
  postPresupuesto(presupuesto: any) {
    const newpres = JSON.stringify(presupuesto);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.presURL, newpres, {headers})
      .map( res => {
        console.log(res.json());
        return res.json();
      });
  }

  // Método usando petición get para recuperar todos los registros
  getPresupuestos() {
    return this.http.get( this.presURL )
      .map(
        res => res.json()
      );
  }

  // Método para recuperar un registro concreto por su id
  getPresupuesto(id$: string) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.get(url)
        .map( res => res.json());
  }

  // Método para actualizar un registro
  putPresupuesto(presupuesto: any, id$: string) {
    const newpre = JSON.stringify(presupuesto);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${this.preURL}/${id$}.json`;

    return this.http.put(url, newpre, {headers})
        .map ( res => {
          console.log(res.json());
          return res.json();
        });
      }

  // Método para borrar un registro concreto por su id
  delPresupuesto( id$: string ) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.delete( url )
        .map( res => res.json());
  }

}
