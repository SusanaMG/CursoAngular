import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  // Código usado para el ejemplo de inyección de objetos y sus propidades en los componentes
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


/*
  // Código usado para el ejemplo de creación de un servicio e inyección de dependencias
  constructor() { }

  getProveedores() {
    return 'Mensaje desde el Servicio';
  }
*/
}
