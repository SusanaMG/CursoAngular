import { Component, OnInit } from '@angular/core';
import { PresupuestosService } from '../../servicios/presupuestos.service';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {

  presupuestos: any[] = [];

  constructor(private presupuestosService: PresupuestosService) {
    this.presupuestosService.getPresupuestos()
          .subscribe(presupuestos => {
            for (const id$ in presupuestos) {
              const p = presupuestos[id$];
              p.id$ = id$;
              this.presupuestos.push(presupuestos[id$]); // push() introduce datos en el array
            }
          })
  }

  ngOnInit() {
  }

  eliminarPresupuesto(id$) {
    this.presupuestosService.delPresupuesto(id$) // Se borra el registro
          .subscribe( res => {
            // console.log(res);
            // Vaciar el array de registros
            this.presupuestos = [];
            // Cargar el array de registros
            this.presupuestosService.getPresupuestos()
              .subscribe(presupuestos => {
                for (const id$ in presupuestos) {
                  const p = presupuestos[id$];
                  p.id$ = id$;
                  this.presupuestos.push(presupuestos[id$]);
                }
              });
          });
        }
}

