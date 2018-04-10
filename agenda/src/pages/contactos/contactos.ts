import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { NuevoContactoPage} from '../nuevo-contacto/nuevo-contacto'

import { Contacto } from '../../models/contacto.model';
import { ContactService} from '../../services/contacto.services';

import { VerContactoPage } from '../ver-contacto/ver-contacto';


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

  //esta estructura de datos dio problemas
  contacts$ : any ;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private ContactService: ContactService,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactosPage');
  }

  onLoadNewPage(){ 
    this.navCtrl.push(NuevoContactoPage); 
  }

  ionViewWillEnter(){

    this.contacts$ = this.ContactService
     .getContacts()  //Retorna la DB
     .snapshotChanges() //retorna los cambios en la DB (key and value)
     .map(
       changes => {
         return changes.map(c=> ({
           key: c.payload.key, ...c.payload.val()
         }));
       }); 
  }   

  onItemTapped($event, contact){
    this.navCtrl.push(VerContactoPage, contact);
  }
}
