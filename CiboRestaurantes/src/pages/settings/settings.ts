import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PricePage } from '../price/price';
import { FoodPage } from '../food/food';
import { FotoPage } from '../foto/foto';



/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  navController: any;
  constructor(public naController: NavController, public navParams: NavParams) {
  }

  addfotoButton(){
    this.naController.setRoot(FotoPage);
    }

  modifyfotoButton(){
      this.naController.setRoot(PricePage);
      }

  modifyinfoButton(){
      this.naController.setRoot(FoodPage);
        }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
