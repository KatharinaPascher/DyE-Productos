import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DistancePage } from '../distance/distance';
import { PricePage } from '../price/price';
import { FoodPage } from '../food/food';
import { AllergiesPage } from '../allergies/allergies';

import { AuthProvider } from '../../providers/auth/auth';


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
  constructor(public naController: NavController, public navParams: NavParams, public auth : AuthProvider) {
  }

  distanceButton(){
    this.naController.setRoot(DistancePage);
    }

  priceButton(){
      this.naController.setRoot(PricePage);
      }

  foodsButton(){
      this.naController.setRoot(FoodPage);
        }
  allergiesButton(){
      this.naController.setRoot(AllergiesPage);
          }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  cerrarSesion(){
    //this.menu.toggle();

    this.auth.logout();
}
}
