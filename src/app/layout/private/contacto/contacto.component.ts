import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contacto: {
    correoPersonal: '',
    correoInstitucional: '',
    telefono: '',
    celular: '',
    institucionLaboral: '',
    adscripcion: ''
  }

  constructor(
    private authService: AuthService
  ) { 
    this.contacto = {
      correoPersonal: '',
      correoInstitucional: '',
      telefono: '',
      celular: '',
      institucionLaboral: '',
      adscripcion: ''
    }
  }

  ngOnInit(): void {
  }

  salir() {
    this.authService.logout();
  }

  guardar() {
    console.log(this.contacto);
  }

}
