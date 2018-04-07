import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NuevaTareaPage} from '../nueva-tarea/nueva-tarea' ;

import { Tarea } from '../../models/tarea.model';
import { TareaService } from '../../services/tarea.services';

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
  
  tareas: Tarea []=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private TareaService: TareaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

  onLoadNewPage(){ 
    this.navCtrl.push(NuevaTareaPage); 
  }

  ionViewWillEnter(){
    this.tareas=this.TareaService.getTarea();
  } 

  onItemTapped($event, tarea){
    
  }

}
