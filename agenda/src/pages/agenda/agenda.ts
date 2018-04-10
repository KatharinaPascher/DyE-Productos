import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { NuevaTareaPage} from '../nueva-tarea/nueva-tarea' ;

import { Tarea } from '../../models/tarea.model';
import { TareaService } from '../../services/tarea.services';
import { VerTareaPage } from '../../pages/ver-tarea/ver-tarea' 

/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {
  
  tareas$ : any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private TareaService: TareaService,
    private alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

  onLoadNewPage(){ 
    this.navCtrl.push(NuevaTareaPage); 
  }

  ionViewWillEnter(){
    this.tareas$=this.TareaService
    .getTareas()  //Retorna la DB
    .snapshotChanges() //retorna los cambios en la DB (key and value)
    .map(
      changes => {
        return changes.map(c=> ({
          key: c.payload.key, ...c.payload.val()
        }));
      }); 
  } 

  onItemTapped($event, tarea){
    this.navCtrl.push(VerTareaPage, tarea);
  }

}
