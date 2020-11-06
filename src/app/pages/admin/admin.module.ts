import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasComponent } from './empresas/empresas.component';
import { AdminRoutingModule } from './admin.routing';
import { HomeComponent } from './home/home.component';
import { NuevoPlanComponent } from './nuevo-plan/nuevo-plan.component';


@NgModule({
  declarations: [EmpresasComponent, HomeComponent, NuevoPlanComponent],
  exports: [EmpresasComponent, HomeComponent, NuevoPlanComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
