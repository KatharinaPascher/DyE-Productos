import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { TareaService } from '../../services/tarea.services';
import { Tarea } from '../../models/tarea.model';

/**
 * Generated class for the NuevaTareaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nueva-tarea',
  templateUrl: 'nueva-tarea.html',
})
export class NuevaTareaPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public toastCtrl: ToastController,
    public tareaService: TareaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevaTareaPage');
  }

  tareaCreada(value: Tarea){

    this.tareaService.addTarea(value).then(ref => {
  });
    this.navCtrl.pop();

    let toast = this.toastCtrl.create({
      message: 'Tarea '+value.tarea+' creada',
      duration: 1000,
      position: 'middle'
    });
  
    toast.present();
  }

}
