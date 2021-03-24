import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrtoPageRoutingModule } from './registrto-routing.module';

import { RegistrtoPage } from './registrto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrtoPageRoutingModule,
    ReactiveFormsModule, //se intancia esta para que funcione el formulario
  ],
  declarations: [RegistrtoPage]
})
export class RegistrtoPageModule {}
