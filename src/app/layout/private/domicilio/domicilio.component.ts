import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-domicilio',
  templateUrl: './domicilio.component.html',
  styleUrls: ['./domicilio.component.css']
})
export class DomicilioComponent implements OnInit {

  domicilio: { 
    codigoPostal: '',
    calle: '',
    numero: '',
    colonia: '',
    municipio: '',
    estado: '',
    pais: ''
   }

  constructor(
    private authService: AuthService
  ) { 
    this.domicilio = {
      codigoPostal: '',
      calle: '',
      numero: '',
      colonia: '',
      municipio: '',
      estado: '',
      pais: ''
    }
   }

  ngOnInit(): void {
  }

  salir() {
    this.authService.logout();
  }

  guardar() {
    console.log(this.domicilio)
  }

}
