import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InicioPage } from './inicio';
import { LoginPage } from '../login/login';



@NgModule({
  declarations: [
    InicioPage,
    LoginPage
  ],
  imports: [
    IonicPageModule.forChild(InicioPage),
  ],
})
export class InicioPageModule {}
