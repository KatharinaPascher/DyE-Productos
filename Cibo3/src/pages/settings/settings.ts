import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedataProvider } from '../../providers/sharedata/sharedata';
import { Preferences } from '../../models/preferences.model';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  pref:Preferences=new Preferences();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public share: SharedataProvider,
    public auth:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  update(){
    this.share.setPreferences(this.pref);
  }

  cerrarSesion(){
    this.auth.logout();
  }

}
