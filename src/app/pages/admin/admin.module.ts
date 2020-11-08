import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasComponent } from './empresas/empresas.component';
import { AdminRoutingModule } from './admin.routing';
import { HomeComponent } from './home/home.component';
import { NuevoPlanComponent } from './nuevo-plan/nuevo-plan.component';
import { TemaAgregarComponent } from './tema-agregar/tema-agregar.component';
import { AceEditorModule } from 'ng2-ace-editor';



@NgModule({
  declarations: [EmpresasComponent, HomeComponent, NuevoPlanComponent, TemaAgregarComponent],
  exports: [EmpresasComponent, HomeComponent, NuevoPlanComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AceEditorModule,
  ]
})
export class AdminModule { }
