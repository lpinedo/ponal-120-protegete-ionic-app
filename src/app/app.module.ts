import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {InicioPage} from '../pages/inicio/inicio';
import { NecesitasPage } from '../pages/necesitas/necesitas';
import { CentroPage } from '../pages/centro/centro';
import { PreguntasPage } from '../pages/preguntas/preguntas';
import { CuadrantePage } from '../pages/cuadrante/cuadrante';
import { NumerosPage } from '../pages/numeros/numeros';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';


@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    NecesitasPage,
    CentroPage,
    PreguntasPage,
    CuadrantePage,
    NumerosPage,
    LoginPage,
    RegistroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    NecesitasPage,
    CentroPage,
    PreguntasPage,
    CuadrantePage,
    NumerosPage,
    LoginPage,
    RegistroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
