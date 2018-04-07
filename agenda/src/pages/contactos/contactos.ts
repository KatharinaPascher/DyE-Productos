import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NuevoContactoPage} from '../nuevo-contacto/nuevo-contacto'

import { Contacto } from '../../models/contacto.model';
import { ContactService} from '../../services/contacto.services';


/**
 * Generated class for the ContactosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html',
})
export class ContactosPage {

  contacts: Contacto []=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private ContactService: ContactService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactosPage');
  }

  onLoadNewPage(){ 
    this.navCtrl.push(NuevoContactoPage); 
  }

  ionViewWillEnter(){
    this.contacts=this.ContactService.getContacts();
  } 

  onItemTapped($event, contact){
    
  }
}
