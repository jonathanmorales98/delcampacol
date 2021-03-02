import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaPublicacionPage } from './nueva-publicacion.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaPublicacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaPublicacionPageRoutingModule {}
