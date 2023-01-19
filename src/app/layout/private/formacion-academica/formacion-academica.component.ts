import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-formacion-academica',
  templateUrl: './formacion-academica.component.html',
  styleUrls: ['./formacion-academica.component.css']
})
export class FormacionAcademicaComponent implements OnInit {

  formacion: {
    nivel: '',
    titulo: '',
    institucion: '',
    anio: ''
  }

  nivel = ['Licenciatura', 'Especialidad', 'Maestria', 'Doctorado']

  constructor(
    private authService: AuthService
  ) { 
    this.formacion ={
      nivel: '',
      titulo: '',
      institucion: '',
      anio: ''
    }
   }

  ngOnInit(): void {
  }

  salir() {
    this.authService.logout();
  }

  guardar() {
    console.log(this.formacion)
  }

}
