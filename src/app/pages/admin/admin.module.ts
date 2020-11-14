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
import { TiendaDesignComponent } from './tienda-design/tienda-design.component';
import { TiendaBloqueAgregarComponent } from './tienda-bloque-agregar/tienda-bloque-agregar.component';



@NgModule({
  declarations: [
    EmpresasComponent,
    HomeComponent,
    PlanNuevoComponent,
    TemaAgregarComponent,
    PlanGestionComponent,
    TiendaCrearComponent,
    TiendaDesignComponent,
    TiendaBloqueAgregarComponent
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
