import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Preferences } from '../../models/preferences.model';
import { SharedataProvider } from '../../providers/sharedata/sharedata';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  preferencelist:Preferences;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public share: SharedataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
   
  }

  ionViewDidEnter(){
    this.preferencelist=this.share.getPreferences();
    console.log('Vegetarian is: '+this.preferencelist.vegetarian);
  }

}
