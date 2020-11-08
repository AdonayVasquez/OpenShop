import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresasComponent } from './empresas/empresas.component';
import { HomeComponent } from './home/home.component';
import { PlanNuevoComponent } from './plan-agregar/plan-agregar.component';
import { TemaAgregarComponent } from './tema-agregar/tema-agregar.component';


const childAdminRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'empresas', component: EmpresasComponent},
  { path: 'nuevo-plan', component: PlanNuevoComponent},
  { path: 'tema-agregar', component: TemaAgregarComponent},
];

/* @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } */

@NgModule({
  imports: [ RouterModule.forChild(childAdminRoutes) ],
  exports: [ RouterModule ]
})
export class ChildAdminRoutesModule { }
