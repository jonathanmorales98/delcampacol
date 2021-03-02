import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrtoPageRoutingModule } from './registrto-routing.module';

import { RegistrtoPage } from './registrto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrtoPageRoutingModule
  ],
  declarations: [RegistrtoPage]
})
export class RegistrtoPageModule {}
