import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasComponent } from './empresas/empresas.component';
import { AdminRoutingModule } from './admin.routing';
import { HomeComponent } from './home/home.component';
import { PlanNuevoComponent } from './plan-agregar/plan-agregar.component';
import { TemaAgregarComponent } from './tema-agregar/tema-agregar.component';
import { AceEditorModule } from 'ng2-ace-editor';



@NgModule({
  declarations: [EmpresasComponent, HomeComponent, PlanNuevoComponent, TemaAgregarComponent],
  exports: [EmpresasComponent, HomeComponent, PlanNuevoComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AceEditorModule,
  ]
})
export class AdminModule { }
