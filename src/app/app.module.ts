import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/public/login/login.component';
import { DatosGeneralesComponent } from './layout/private/datos-generales/datos-generales.component';
import { RegistroComponent } from './layout/public/registro/registro.component';
import { RecuperarPasswordComponent } from './layout/public/recuperar-password/recuperar-password.component';
import { ProduccionCientificaComponent } from './layout/private/produccion-cientifica/produccion-cientifica.component';
import { DocumentosComponent } from './layout/private/documentos/documentos.component';

import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { LugarNacimientoComponent } from './layout/private/lugar-nacimiento/lugar-nacimiento.component';
import { DomicilioComponent } from './layout/private/domicilio/domicilio.component';
import { ContactoComponent } from './layout/private/contacto/contacto.component';
import { AreaDesarrolloComponent } from './layout/private/area-desarrollo/area-desarrollo.component';
import { FormacionAcademicaComponent } from './layout/private/formacion-academica/formacion-academica.component';
import { LibrosComponent } from './layout/private/libros/libros.component';
import { ProyectosDeInvestigacionComponent } from './layout/private/proyectos-de-investigacion/proyectos-de-investigacion.component';
import { PatentesComponent } from './layout/private/patentes/patentes.component';
import { RevistasIndexadasComponent } from './layout/private/revistas-indexadas/revistas-indexadas.component';
import { DivulgacionCientificaComponent } from './layout/private/divulgacion-cientifica/divulgacion-cientifica.component';
import { ImplementacionTecnologicaComponent } from './layout/private/implementacion-tecnologica/implementacion-tecnologica.component';
import { PncpComponent } from './layout/private/pncp/pncp.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DatosGeneralesComponent,
    RegistroComponent,
    RecuperarPasswordComponent,
    ProduccionCientificaComponent,
    DocumentosComponent,
    LugarNacimientoComponent,
    DomicilioComponent,
    ContactoComponent,
    AreaDesarrolloComponent,
    FormacionAcademicaComponent,
    LibrosComponent,
    ProyectosDeInvestigacionComponent,
    PatentesComponent,
    RevistasIndexadasComponent,
    DivulgacionCientificaComponent,
    ImplementacionTecnologicaComponent,
    PncpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
