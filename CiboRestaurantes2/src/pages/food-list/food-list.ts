import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ImageProvider } from '../../providers/image/image';
import { AuthProvider } from '../../providers/auth/auth';

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

      let data = localStorage.getItem('images');
      if (data) {
        this.images = JSON.parse(data);
      }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodListPage');
  }

  downloadImageUrls(){
    console.log(this.images.length);
    let promiseList = [];

      for (let i = 0; i < 2/*this.images.length*/; i++) {
        let promise = this.imageSrv.getImage(this.afAuth.getId, this.images[0]);
        promiseList.push(promise);
      }

      Promise.all(promiseList)
        .then(urls => {
          this.imageUrls = urls;
          console.log(urls);
        });
  }
}
