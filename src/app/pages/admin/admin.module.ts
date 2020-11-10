import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasComponent } from './empresas/empresas.component';
import { AdminRoutingModule } from './admin.routing';
import { HomeComponent } from './home/home.component';
import { PlanNuevoComponent } from './plan-agregar/plan-agregar.component';
import { TemaAgregarComponent } from './tema-agregar/tema-agregar.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { PlanGestionComponent } from './plan-gestion/plan-gestion.component';
import { TiendaCrearComponent } from './tienda-crear/tienda-crear.component';



@NgModule({
  declarations: [
    EmpresasComponent,
    HomeComponent,
    PlanNuevoComponent,
    TemaAgregarComponent,
    PlanGestionComponent,
    TiendaCrearComponent
  ],
  exports: [
    EmpresasComponent,
    HomeComponent,
    PlanNuevoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AceEditorModule,
  ]
})
export class AdminModule { }
