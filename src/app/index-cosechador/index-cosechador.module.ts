import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexCosechadorPageRoutingModule } from './index-cosechador-routing.module';

import { IndexCosechadorPage } from './index-cosechador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexCosechadorPageRoutingModule
  ],
  declarations: [IndexCosechadorPage]
})
export class IndexCosechadorPageModule {}
