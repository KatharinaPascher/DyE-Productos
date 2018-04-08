import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevaTareaPage');
  }

  toastTareaCreada() {
    let toast = this.toastCtrl.create({
      message: 'Agregamos tu tarea amigo',
      duration: 1000,
      position: 'middle'
    });
  
    toast.present();

    this.navCtrl.pop();
  }

  cancelarTarea(){
    this.navCtrl.pop(); 
  }

}
