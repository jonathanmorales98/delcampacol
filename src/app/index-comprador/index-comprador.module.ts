import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexCompradorPageRoutingModule } from './index-comprador-routing.module';

import { IndexCompradorPage } from './index-comprador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexCompradorPageRoutingModule
  ],
  declarations: [IndexCompradorPage]
})
export class IndexCompradorPageModule {}
