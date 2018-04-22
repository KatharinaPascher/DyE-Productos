import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { FotoPage } from '../foto/foto';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  navController: any;
  constructor(public naController: NavController, public navParams: NavParams) {
  }
  
  restaurant1Button(){
    this.naController.setRoot(SettingsPage);
    }
}
