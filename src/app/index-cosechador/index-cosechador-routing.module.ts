import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexCosechadorPage } from './index-cosechador.page';

const routes: Routes = [
  {
    path: '',
    component: IndexCosechadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexCosechadorPageRoutingModule {}
