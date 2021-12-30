import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReactiveFormsModule } from '@angular/forms';

import { AuthentificationPageRoutingModule } from './authentification-routing.module';

import { AuthentificationPage } from './authentification.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    // FormsModule,
    IonicModule,
    AuthentificationPageRoutingModule
  ],
  declarations: [AuthentificationPage]
})
export class AuthentificationPageModule { }
