import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-lugar-nacimiento',
  templateUrl: './lugar-nacimiento.component.html',
  styleUrls: ['./lugar-nacimiento.component.css']
})
export class LugarNacimientoComponent implements OnInit {

  nacimiento : {
    pais: '',
    estado: '',
    ciudad: '',
    fechaNacimiento: '',
    fm: ''
  }

  constructor(
    private authService: AuthService
  ) {
    this.nacimiento = {
      pais: '',
      estado: '',
      ciudad: '',
      fechaNacimiento: '',
      fm: ''
    }
   }

  ngOnInit(): void {
  }
  salir() {
    this.authService.logout();
  }

  guardar() {
    console.log(this.nacimiento)
  }

}
