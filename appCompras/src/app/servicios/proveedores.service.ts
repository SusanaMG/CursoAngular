import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  // Código usado para el ejemplo de inyección de objetos y sus propidades en los componentes

  provURL = 'https://comprasapp-800ac.firebaseio.com/proveedores.json';
  proURL = 'https://comprasapp-800ac.firebaseio.com/proveedores';

  constructor(private http: Http) { }


  // Método usando petición post para crear registros
  postProveedor(proveedor: any) {
    const newpres = JSON.stringify(proveedor);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.provURL, newpres, {headers})
      .map( res => {
        console.log(res.json());
        return res.json();
      });
  }

  // Método usando petición get para recuperar todos los registros
  getProveedores() {
    return this.http.get( this.provURL )
      .map(
        res => res.json()
      );
  }

  // Método para recuperar un registro concreto por su id
  getProveedor(id$: string) {
    const url = `${this.proURL}/${id$}.json`;
    return this.http.get(url)
        .map( res => res.json());
  }

  // Método para actualizar un registro
  putProveedor(proveedor: any, id$: string) {
    const newpre = JSON.stringify(proveedor);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${this.proURL}/${id$}.json`;

    return this.http.put(url, newpre, {headers})
        .map ( res => {
          console.log(res.json());
          return res.json();
        });
      }

  // Método para borrar un registro concreto por su id
  delProveedor( id$: string ) {
    const url = `${this.proURL}/${id$}.json`;
    return this.http.delete( url )
        .map( res => res.json());
  }

  // Método para buscar dinámicamente
  getProveedoresSearch(busqueda: string) {
    const url = `${this.provURL}?orderBy="nombre"&startAt="${ busqueda }"&endAt="${ busqueda }\uf8ff"`;
    return this.http.get(url)
        .map(res => res.json());
  }
}

/*
/////////////////////////////////////////////////////////////////////////////////////////////
// CODIGO PRIMERO
  // Código usado para el ejemplo de creación de un servicio e inyección de dependencias
export class ProveedoresService {
  constructor() { }

  getProveedores() {
    return 'Mensaje desde el Servicio';
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////
// CODIGO SEGUNDO
  // Código usado para el ejemplo de inyección de objetos y sus propidades en los componentes
export class ProveedoresService {
  proveedores: any = [
    {
      nombre: 'Telefónica',
      cif: 'B12345678',
      direccion: 'Paseo de la Castellana, 100',
      cp: '28.010',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 911111111,
      email: 'info@telefonica.com',
      contacto: 'Juan Pérez'
    },
    {
      nombre: 'Iberdrola',
      cif: 'B87654321',
      direccion: 'Príncipe de Vergara, 200',
      cp: '28.015',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 922222222,
      email: 'info@iberdrola.com',
      contacto: 'Laura Martínez'
    }
  ];

  constructor() { }

  getProveedores() {
    return this.proveedores; // Devuelve el array
  }
}
*/
