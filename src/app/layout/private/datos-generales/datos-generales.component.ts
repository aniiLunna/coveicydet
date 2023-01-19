import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class DatosGeneralesComponent implements OnInit {

  user: {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    rfc: '',
    curp: '',
    sexo: ''
  }

  lista : string[] = ["Hombre", "Mujer", "No binario"]
  
  constructor(
    private authService: AuthService
    ) { 
      this.user = {
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        rfc: '',
        curp: '',
        sexo: ''
      }
    }

  ngOnInit(): void {
  }

  salir() {
    this.authService.logout();
  }

  guardar() {
    console.log(this.user)
  }

}
