import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { LoginComponent } from './layout/public/login/login.component';
import { RegistroComponent } from './layout/public/registro/registro.component';
import { RecuperarPasswordComponent } from './layout/public/recuperar-password/recuperar-password.component';
import { DatosGeneralesComponent } from './layout/private/datos-generales/datos-generales.component';
import { ProduccionCientificaComponent } from './layout/private/produccion-cientifica/produccion-cientifica.component';
import { DocumentosComponent } from './layout/private/documentos/documentos.component';

import { AuthGuard } from './auth.guard';
import { LugarNacimientoComponent } from './layout/private/lugar-nacimiento/lugar-nacimiento.component';
import { DomicilioComponent } from './layout/private/domicilio/domicilio.component';
import { ContactoComponent } from './layout/private/contacto/contacto.component';
import { AreaDesarrolloComponent } from './layout/private/area-desarrollo/area-desarrollo.component';
import { FormacionAcademicaComponent } from './layout/private/formacion-academica/formacion-academica.component';

const routes: Routes = [
  { path:'', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'recuperar-acceso', component: RecuperarPasswordComponent },
  { path: 'datos-generales', component: DatosGeneralesComponent, canActivate:[AuthGuard] },
  { path: 'produccion-cientifica', component: ProduccionCientificaComponent, canActivate:[AuthGuard] },
  { path: 'documentos', component: DocumentosComponent, canActivate:[AuthGuard]},
  { path: 'lugar-de-nacimiento', component: LugarNacimientoComponent, canActivate:[AuthGuard] },
  { path: 'domicilio', component: DomicilioComponent, canActivate:[AuthGuard] },
  { path: 'contacto', component: ContactoComponent, canActivate:[AuthGuard] },
  { path: 'area-de-desarrollo', component: AreaDesarrolloComponent, canActivate:[AuthGuard] },
  { path: 'formacion-academica', component: FormacionAcademicaComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
