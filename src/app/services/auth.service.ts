import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http:localhost:3000/api'
  constructor( 
    private http: HttpClient,
    private router : Router
    ) {  }

  signUp(user: any) {
    return this.http.post<any>(this.URL + '/register', user);
  }

  signIn(user: any) {
    return this.http.post<any>(this.URL+'/signin', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
