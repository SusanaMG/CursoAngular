import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup; // Objeto del formulario
  userdata: any;

  erroresForm = {
    'email': '',
    'password': ''
  }

  mensajesValidacion = {
    'email': {
      'required': 'Email obligatorio',
      'email': 'Introduzca un email correcto'
    },
    'password': {
      'required': 'Contraseña obligatoria',
      'pattern': 'La contraseña debe tener al menos un número y una letra',
      'minlength': 'y más de 6 caracteres'
    }
  }

  constructor(private formBuilder: FormBuilder,
              private autenticacionService: AutenticacionService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.registroForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email ]],
      'password': ['', [
            Validators.required,
            Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'), // con min 1 número y 1 letra
            Validators.minLength(6)
          ]]
    });
    // Para que el método de las validaciones reciba los cambios del formulario a tiempo real
    this.registroForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onSubmit() {
    // Datos salvados en userdata
    this.userdata = this.saveUserdata();
    // Conexión con el Servicio para registrar al usuario
    this.autenticacionService.registroUsuario(this.userdata);
    // Enrutamiento a la página de inicio
    this.router.navigate(['/inicio']);
  }

  saveUserdata() {
    const saveUserdata = {
      'email': this.registroForm.get('email').value,
      'password': this.registroForm.get('password').value
    };
    return saveUserdata;
  }

  // Gestión dinámica de errores y mensajes de errores
  onValueChanged(data?: any) {
    if (!this.registroForm) { return; }
    const form = this.registroForm;
    for (const field in this.erroresForm) {
      this.erroresForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.mensajesValidacion[field];
        for (const key in control.errors) {
          this.erroresForm[field] += messages[key] + ' ';
        }
      }
    }
  }
}
