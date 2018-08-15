import { Component,ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {InicioPage} from '../pages/inicio/inicio';
import {NecesitasPage} from '../pages/necesitas/necesitas';
import {CentroPage} from '../pages/centro/centro';
import {PreguntasPage} from '../pages/preguntas/preguntas';
import {CuadrantePage} from '../pages/cuadrante/cuadrante';
import {NumerosPage} from '../pages/numeros/numeros';
import {LoginPage} from '../pages/login/login';
import {RegistroPage} from '../pages/registro/registro';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;
  public rootPage:any;

  public pages: Array<{titulo: string, component:  any,  icon: string}>


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.rootPage = InicioPage;

    this.pages  = [
      {titulo: 'Inicio',     component: InicioPage,      icon:  'home'},
      {titulo: 'Necesitas Proteción?',  component: NecesitasPage,   icon:  'umbrella'},
      {titulo: 'Ayuda y orientación',     component: CentroPage,      icon:  'information'},
      {titulo: 'Preguntas frecuentes',  component: PreguntasPage,   icon:  'book'},
      {titulo: 'Cuadrante',  component: CuadrantePage,   icon:  'pin'},
      {titulo: 'Numeros de emergencia',    component: NumerosPage,     icon:  'phone-portrait'},
      {titulo: 'Login',      component: LoginPage,       icon:  'key'},
      {titulo: 'Registro',   component: RegistroPage,    icon:  'person-add'}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
goToPage(page){
  this.nav.setRoot(page);

}

}

