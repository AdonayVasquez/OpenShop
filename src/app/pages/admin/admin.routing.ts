import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { EmpresasComponent } from './empresas/empresas.component';



const routes: Routes = [
  /*   { path: 'admin', component: AdminComponent},
    { path: 'empresas', component: EmpresasComponent}, */

  {
    path: 'admin',
    component: AdminComponent,
    data: {titulo: 'Ecommerce'},
    loadChildren: () => import('./child-routes.module').then( m => m.ChildAdminRoutesModule )
  },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class AdminRoutingModule {}
