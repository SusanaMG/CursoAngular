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

/*
  // Código usado para el ejemplo de creación de un servicio e inyección de dependencias
  mensaje: string;

    // Para incorporar el servicio dentro del componente
  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit() {
    this.mensaje = this.proveedoresService.getProveedores();
  }
*/
}
