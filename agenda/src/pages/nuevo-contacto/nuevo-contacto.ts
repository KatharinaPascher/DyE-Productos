import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the NuevoContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-contacto',
  templateUrl: 'nuevo-contacto.html',
})
export class NuevoContactoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoContactoPage');
  }

  toastContactoCreado() {
    let toast = this.toastCtrl.create({
      message: 'Agregamos tu contacto amigo',
      duration: 1000,
      position: 'middle'
    });
  
    toast.present();

    this.navCtrl.pop();
  }

  cancelarContacto(){
    this.navCtrl.pop(); 
  }

}
