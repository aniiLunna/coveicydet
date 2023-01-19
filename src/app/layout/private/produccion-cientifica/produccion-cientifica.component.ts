import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-produccion-cientifica',
  templateUrl: './produccion-cientifica.component.html',
  styleUrls: ['./produccion-cientifica.component.css']
})
export class ProduccionCientificaComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  salir() {
    this.authService.logout();
  }
}
