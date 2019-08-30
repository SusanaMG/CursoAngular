import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FacturasService } from './facturas.service';
import { AddfraComponent } from './facturas/addfra/addfra.component';
import { FacturasComponent } from './facturas/facturas/facturas.component';
import { EditfraComponent } from './facturas/editfra/editfra.component';

const routes: Routes = [
  { path: 'facturas', component: FacturasComponent },
  { path: 'addfra', component: AddfraComponent },
  { path: 'editfra/:id', component: EditfraComponent },
];

@NgModule({
  declarations: [
    AddfraComponent,
    FacturasComponent,
    EditfraComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    FacturasService
  ]
})
export class FacturasModule { }
