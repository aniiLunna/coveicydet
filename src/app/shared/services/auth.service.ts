import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private ingresar: boolean = false;
  private obj: any;

  constructor() { }

  public ingresarApp(obj:any): boolean {
    this.ingresar = obj.usuario.toLowerCase() == "hema980925mva" && obj.password == "123";

    return this.ingresar;

  }

  public habilitarLogeo() : boolean {
    return this.ingresar;
  }
}
