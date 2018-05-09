import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ImageProvider } from '../../providers/image/image';
import { AuthProvider } from '../../providers/auth/auth';

import firebase from 'firebase';

/**
 * Generated class for the FoodListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 /**Falta gestionar la relación del RealTime DataBase con el storage
  * 
  * Luego ya se puede seleccionar imágenes por restaurante
  */
@IonicPage()
@Component({
  selector: 'page-food-list',
  templateUrl: 'food-list.html',
})
export class FoodListPage {

  imageUrls = [];
  private images = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AuthProvider,
    private imageSrv: ImageProvider) {

      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('logos/');
      imageRef.getDownloadURL().then(function(urls){
        this.imageURLs=urls;
        console.log(urls);
      });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodListPage');
  }

}
