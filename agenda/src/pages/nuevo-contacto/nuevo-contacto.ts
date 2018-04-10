import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { ContactService } from '../../services/contacto.services';
import { Contacto } from '../../models/contacto.model';

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

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public toastCtrl: ToastController,
    public contactoService: ContactService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoContactoPage');
  }

  contactoCreado(value: Contacto){

    this.contactoService.addContact(value).then(ref => {
  });
    this.navCtrl.pop();

    let toast = this.toastCtrl.create({
      message: 'Agregamos tu contacto amigo',
      duration: 1000,
      position: 'middle'
    });
  
    toast.present();
  }

}
