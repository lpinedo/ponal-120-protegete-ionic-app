import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

openLogin(){
  this.navCtrl.setRoot(LoginPage);
}
  /*ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }*/

}
