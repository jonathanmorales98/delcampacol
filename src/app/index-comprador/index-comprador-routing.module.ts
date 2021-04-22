import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexCompradorPage } from './index-comprador.page';

const routes: Routes = [
  {
    path: '',
    component: IndexCompradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexCompradorPageRoutingModule {}
