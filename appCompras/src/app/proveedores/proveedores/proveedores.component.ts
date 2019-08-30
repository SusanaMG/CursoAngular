import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../../servicios/proveedores.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  campoBusqueda: FormControl;
  busqueda: string;
  cargandoBusqueda = false;
  resultados = false;
  noResultados = false;

  proveedores: any[] = []; // Array para almacenar los objetos que lleguen de BBDD
  // cargando =  true; // Para los spinners (cuando no hay búsqueda dinámica)

  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit() {
    this.campoBusqueda = new FormControl();
    this.campoBusqueda.valueChanges
          .subscribe(term => {
            this.busqueda = term;   // término de búsqueda
            this.cargandoBusqueda = true;   // se muestra el spinner
            if (this.busqueda.length !== 0) {   // Sí se está buscando algo
              this.proveedoresService.getProveedoresSearch(this.busqueda)
                    .subscribe (proveedores => {    //proveedores es lo que se recibe desde el servicio
                      this.proveedores = [];        // para limpiar las búsquedas previas
                      for (const id$ in proveedores) {
                        const p = proveedores[id$];
                        p.id$ = id$;
                        this.proveedores.push(proveedores[id$]); // push() introduce datos en el array
                      }
                      if (this.proveedores.length < 1 &&
                          this.busqueda.length >= 1) {   // si no se encuentran proveedores y sí se busca algo
                            this.noResultados = true;
                      } else {
                            this.noResultados = false;
                          }
                    });
              // Una vez finalizada la búsqueda
              this.cargandoBusqueda = false;
              this.resultados = true;
            } else {                          // No se está buscando algo
              this.proveedores = [];
              this.cargandoBusqueda = false;
              this.resultados = false;
            }
          });
  }

/* // POR AHORA NO TENGO IMPLEMENTADO EL BOTÓN DE ELIMINAR EN LA INTERFAZ
  eliminarProveedor(id$) {
    this.proveedoresService.delProveedor(id$) // Se borra el registro
          .subscribe( res => {
            // console.log(res);
            // Vaciar el array de registros
            this.proveedores = [];
            // Cargar el array de registros
            this.proveedoresService.getProveedores()
              .subscribe(proveedores => {
                for (const id$ in proveedores) {
                  const p = proveedores[id$];
                  p.id$ = id$;
                  this.proveedores.push(proveedores[id$]);
                }
              });
          });
        }
*/
}

/*
////////////////////////////////////////////////////////////////////////////////////////////////
// CODIGO PRIMERO: no se importa desde base de datos
  // Código usado para el ejemplo de creación de un servicio e inyección de dependencias
  mensaje: string;

    // Para incorporar el servicio dentro del componente
  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit() {
    this.mensaje = this.proveedoresService.getProveedores();
  }

////////////////////////////////////////////////////////////////////////////////////////////////
// CODIGO SEGUNDO: no se importa desde base de datos

import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../../servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  // Código usado para el ejemplo de inyección de objetos y sus propidades en los componentes
  proveedores: any;

    // Para incorporar el servicio dentro del componente
  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit() {
    this.proveedores = this.proveedoresService.getProveedores();
 }
////////////////////////////////////////////////////////////////////////////////////////////////
// CODIGO TERCERO
// Si no se implementa la búsquda dinámica y se quiere que toda la información se cargue desde BBDD.
// El constructor sería el siguiente y ngOnInit() iría vacío
  constructor(private proveedoresService: ProveedoresService) {
    this.proveedoresService.getProveedores()
          .subscribe(proveedores => {
            for (const id$ in proveedores) {
              const p = proveedores[id$];
              p.id$ = id$;
              this.proveedores.push(proveedores[id$]); // push() introduce datos en el array
            }
            this.cargando = false; // Para los spinners
          });
        }
 ngOnInit() {}

////////////////////////////////////////////////////////////////////////////////////////////////

*/

