import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresasComponent } from './empresas/empresas.component';
import { HomeComponent } from './home/home.component';
import { PlanNuevoComponent } from './plan-agregar/plan-agregar.component';
import { PlanGestionComponent } from './plan-gestion/plan-gestion.component';
import { TemaAgregarComponent } from './tema-agregar/tema-agregar.component';
import { TiendaCrearComponent } from './tienda-crear/tienda-crear.component';
import { TiendaDesignComponent } from './tienda-design/tienda-design.component';
import { TiendaBloqueAgregarComponent } from './tienda-bloque-agregar/tienda-bloque-agregar.component';


const childAdminRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'empresas', component: EmpresasComponent},
  { path: 'nuevo-plan', component: PlanNuevoComponent},
  { path: 'tema-agregar', component: TemaAgregarComponent},
  { path: 'gestion-plan', component: PlanGestionComponent},
  { path: 'crear-tienda', component: TiendaCrearComponent},
  { path: 'design-tienda', component: TiendaDesignComponent},
  { path: 'nuevo-bloque-tienda', component: TiendaBloqueAgregarComponent},
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
