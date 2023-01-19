import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    rfc: '',
    email: '',
    emailConfirm: '',
    password: '',
    passwordConfirm: ''
  }


  constructor(
    private authService: AuthService,
    private router: Router) { 
    this.user = {
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      rfc: '',
      email: '',
      emailConfirm: '',
      password: '',
      passwordConfirm: ''
    }
  }

  ngOnInit() {}

  public submitForm() {
    if(this.user.nombre.trim() == '' || 
      this.user.apellidoPaterno.trim() == '' ||
      this.user.apellidoMaterno.trim() == '' ||
      this.user.rfc.trim() == '' ||
      this.user.email.trim() == '' ||
      this.user.password.trim() == ''){
      alert("Campos vacios, por favor verifique sus entradas.")
      return
    }

    if(!this.validarNombre(this.user.nombre)) {
      alert("El nombre solo puede contener letras");
      return
    }
    if(!this.validarNombre(this.user.apellidoPaterno)) {
      alert("El apellido paterno solo puede contener letras");
      return
    }
    if(!this.validarNombre(this.user.apellidoMaterno)) {
      alert("El apellido materno solo puede contener letras");
      return
    }

    if(!this.validarRFC()) {
      alert("El RFC no tiene el formato correcto")
      return
    }

    if (!this.validarEmail()) {
      alert("El correo electronico ingresado es invalido");
      return
    }

    if(this.user.email.trim() != this.user.emailConfirm.trim()) {
      alert("Los correos ingresados no coinciden")
      return
    }
    if(this.user.password.trim() != this.user.passwordConfirm.trim()) {
      alert("Las contraseñas no coinciden")
      return
    }
    this.authService.signUp(this.user).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/datos-generales']);
      },
      err => {
        console.log(err)
      }
    )
  }

  validarNombre(cadena: string) : boolean {
    let isValid = true;

    const pattern = new RegExp('^[A-Z]+$', 'i');

    if(!pattern.test(cadena)){
      isValid = false;
    }
    
    return isValid;
  }

  validarEmail() : boolean {
    let isValid = true;
    const pattern = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

    if (!pattern.test(this.user.email)) {
      isValid = false;
    }

    return isValid
  }

  validarRFC() : boolean {
    let isValid = true;

    const pattern = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/

    if(!pattern.test(this.user.rfc.toUpperCase())) {
      isValid = false;
    }
    return isValid
  }

}


