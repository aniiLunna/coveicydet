import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-area-desarrollo',
  templateUrl: './area-desarrollo.component.html',
  styleUrls: ['./area-desarrollo.component.css']
})
export class AreaDesarrolloComponent implements OnInit {

  inputSelect = document.getElementById('selectArea');

  area: {
    areaActividades: '',
    campo: '',
    disciplina: '',
    svi: '',
    programaVerano: '',
    programa: '',
    anio: ''
  }

  areaCiencia =[
    'Fisica, Matematicas y Ciencias de la Tierra', 
    'Biologia y Quimica',
    'Medicina y Salud', 
    'Humanidades y Ciencias de la Conducta', 
    'Sociales y Economicas', 
    'Biotecnologia y Ciencias Agropecuarias', 
    'Ingenieria e Industria'
  ]

  option = ['Sí', 'No']

  constructor(
    private authService: AuthService
  ) { 
    this.area = {
      areaActividades: '',
      campo: '',
      disciplina: '',
      svi: '',
      programaVerano: '',
      programa: '',
      anio: ''
    }
  }

  ngOnInit(): void {
  }

  salir() {
    this.authService.logout();
  }

  guardar() {
    console.log(this.area);
  }

}
