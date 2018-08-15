import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CuadrantePage } from './cuadrante';

@NgModule({
  declarations: [
    CuadrantePage,
  ],
  imports: [
    IonicPageModule.forChild(CuadrantePage),
  ],
})
export class CuadrantePageModule {}
