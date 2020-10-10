import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';



const routes: Routes = [
  { path: 'inicio', component:InicioComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'login', component:LoginComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
