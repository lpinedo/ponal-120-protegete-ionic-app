import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CentroPage } from './centro';

@NgModule({
  declarations: [
    CentroPage,
  ],
  imports: [
    IonicPageModule.forChild(CentroPage),
  ],
})
export class CentroPageModule {}
