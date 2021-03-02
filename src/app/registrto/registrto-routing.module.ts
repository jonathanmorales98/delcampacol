import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrtoPage } from './registrto.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrtoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrtoPageRoutingModule {}
