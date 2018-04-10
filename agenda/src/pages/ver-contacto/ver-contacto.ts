import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import {Contacto} from '../../models/contacto.model';
import {ContactService} from '../../services/contacto.services'

/**
 * Generated class for the VerContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-contacto',
  templateUrl: 'ver-contacto.html',
})
export class VerContactoPage {

  contact: Contacto;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private contactService: ContactService,
    public toastCtrl: ToastController) {
    this.contact = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerContactoPage');
  }

  onUpdateContact($event, contact){

    this.contactService.updateContact(this.contact);
    
    let toast = this.toastCtrl.create({
      message: 'Actualizado '+this.contact.nombre,
      duration: 1000,
      position: 'middle'
    });
  
    toast.present();

    this.navCtrl.pop();
  }

  onRemoveContact($event, contact){

    this.contactService.removeContact(this.contact);

    let toast = this.toastCtrl.create({
      message: 'Eliminado '+this.contact.nombre,
      duration: 1000,
      position: 'middle'
    });
  
    toast.present();

    this.navCtrl.pop();
  }
}
