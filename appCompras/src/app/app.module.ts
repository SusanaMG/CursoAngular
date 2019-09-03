import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* // VIDEO: IMPORTACIONES PARA SUBIR FICHEROS
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angular2/auth';
import { environment } from './config/firebase.config';
*/
/* // PRUEBAS IMPORTACIONES PARA SUBIR FICHEROS
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire';
import * as firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FirebaseStorage } from '@firebase/storage-types';
import { FirebaseApp } from '@firebase/app-types';
import { FirebaseAuth } from '@firebase/auth-types';
import { FirebaseDatabase } from '@firebase/database-types';
import { FirebaseMessaging } from '@firebase/messaging-types';
import { FirebaseFirestore } from '@firebase/firestore-types';
*/
import { firebase } from '@firebase/app'; // La misma importación que en el Servicio
import '@firebase/auth'; // La misma importación que en el Servicio
import { environment } from './config/firebase.config';


import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { PresupuestosService } from './servicios/presupuestos.service';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { AutenticacionService} from './servicios/autenticacion.service';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { GuardService } from './servicios/guard.service';

import { FacturasModule } from './facturas/facturas.module';
import { FacturasComponent } from './facturas/facturas/facturas/facturas.component';
import { UploadComponent } from './uploads/upload/upload.component';
import { LoadfileService } from './servicios/loadfile.service';
import { ContratosComponent } from './uploads/contratos/contratos.component';
import { DetallesComponent } from './uploads/detalles/detalles.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'proveedores', component: ProveedoresComponent,
    canActivate: [GuardService] },
  { path: 'addprovee', component: AddproveeComponent,
    canActivate: [GuardService] },
  { path: 'addpres', component: AddpresComponent,
    canActivate: [GuardService] },
  { path: 'presupuestos', component: PresupuestosComponent,
    canActivate: [GuardService] },
  { path: 'editpres/:id', component: EditpresComponent,
    canActivate: [GuardService] },
  { path: 'registro', component: RegistroComponent },
  { path: 'inises', component: InisesComponent },
  { path: 'facturas', component: FacturasComponent },
  { path: 'uploads', component: UploadComponent },
  { path: 'contratos', component: ContratosComponent },
  { path: '**', component: InicioComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent,
    PresupuestosComponent,
    EditpresComponent,
    RegistroComponent,
    InisesComponent,
    UploadComponent,
    ContratosComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FacturasModule
    /* // VIDEO: IMPORTACIONES PARA SUBIR FICHEROS
    AngularFireModule.initializeApp(environment.firebase)
    AngularFireDatabaseModule,
    AngularFireAuthModule
    */
    /* // PRUEBAS IMPORTACIONES PARA SUBIR FICHEROS
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule
    FirebaseStorage,
    FirebaseApp,
    FirebaseAuth,
    FirebaseDatabase,
    FirebaseMessaging,
    FirebaseFirestore
    */
  ],
  providers: [ProveedoresService,
              PresupuestosService,
              AutenticacionService,
              GuardService,
              LoadfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
