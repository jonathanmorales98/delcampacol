import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexComerciantePageRoutingModule } from './index-comerciante-routing.module';

import { IndexComerciantePage } from './index-comerciante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexComerciantePageRoutingModule
  ],
  declarations: [IndexComerciantePage]
})
export class IndexComerciantePageModule {}
