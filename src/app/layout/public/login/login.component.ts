import { Component, OnInit } from '@angular/core';
import { FormArrayName, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(private fb:FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.createLoginForm();
  }
  private createLoginForm(): FormGroup {
    return this.fb.group({
      usuario:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }

  public submitForm() {
    if(this.loginForm.invalid) {
      Object.values(this.loginForm.controls).forEach(
        control=>{
          control.markAllAsTouched();
      });
      return;
    }
    console.log( this.loginForm.value );
  }

  public get f() : any {
    return this.loginForm.controls;
  }

}
