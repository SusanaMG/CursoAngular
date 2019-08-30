import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../../facturas.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  facturas: any[] = [];

  cargando = true;

  constructor(private facturasService: FacturasService) {
    this.facturasService.getFacturas()
    .subscribe(facturas => {
       for ( const id$ in facturas) {
         const p = facturas[id$];
         p.id$ = id$;
         this.facturas.push(facturas[id$]); // push() introduce datos en el array
      }
    this.cargando = false;
    });
  }

  ngOnInit() {
  }

  eliminarFactura(id$) {
    this.facturasService.delFactura(id$)
      .subscribe( res => {
        // Vaciar el array de registros
        this.facturas = [];
        // Cargar el array de registros
        this.facturasService.getFacturas()
        .subscribe(facturas => {
           for ( const id$ in facturas) {
             const p = facturas[id$];
             p.id$ = id$;
             this.facturas.push(facturas[id$]);
          }
        });
      });
  }

}
