import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

import { Tarea } from '../../models/tarea.model';
import { TareaService } from '../../services/tarea.services';

/**
 * Generated class for the VerTareaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-tarea',
  templateUrl: 'ver-tarea.html',
})
export class VerTareaPage {

  tarea: Tarea;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public tareaService: TareaService,
    public toastCtrl: ToastController) {
    
      this.tarea = this.navParams.data;
    console.log(this.tarea.key);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerTareaPage');
  }

  onUpdateTarea($event, tarea){

    this.tareaService.updateTareas(this.tarea);

    let toast = this.toastCtrl.create({
      message: 'Actualizado '+this.tarea.tarea,
      duration: 1000,
      position: 'middle'
    });
  
    toast.present();

    this.navCtrl.pop();
  }

  onRemoveTarea($event, tarea){

    this.tareaService.removeTareas(this.tarea);

    let toast = this.toastCtrl.create({
      message: 'Eliminado '+this.tarea.tarea,
      duration: 1000,
      position: 'middle'
    });
  
    toast.present();

    this.navCtrl.pop();
  }

}
