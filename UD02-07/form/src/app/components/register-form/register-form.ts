import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-register-form',
  styleUrl: './register-form.css',
  templateUrl: './register-form.html',
})
export class RegisterForm {
  user = {
    nombre: '',
    apellidos: '',
    nif: '',
    email: '',
    telefono: '',
    sexo: '',
    conocio: '',
    password: '',
    confirmPassword: '',
    terminos: false
  };

  registrado = false;

  sendForm() {
    console.log(this.user);
    this.registrado = true;
  }
}
