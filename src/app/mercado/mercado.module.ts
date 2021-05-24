import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MercadoPageRoutingModule } from './mercado-routing.module';

import { MercadoPage } from './mercado.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MercadoPageRoutingModule,
    PipesModule
  ],
  declarations: [MercadoPage]
})
export class MercadoPageModule {}
