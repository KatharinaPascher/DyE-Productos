import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';
import { storage } from 'firebase';
import { AuthProvider } from '../../providers/auth/auth';

import { ImageProvider } from '../../providers/image/image';
// ...


/**
 * Generated class for the AddFoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-food',
  templateUrl: 'add-food.html',
})
export class AddFoodPage {
s
  cameraOptions: CameraOptions = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  private images = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public camera:Camera,
    private afAuth: AuthProvider,
    private imageSrv: ImageProvider) {
      let data = localStorage.getItem('images');
      if (data) {
        this.images = JSON.parse(data);
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFoodPage');
  }
  
  takePicture() {
    
    this.camera.getPicture(this.cameraOptions)
      .then(data => {
        let base64Image = 'data:image/jpeg;base64,' + data;

        return this.imageSrv.uploadImage(base64Image, this.afAuth.getId);
      })
      .then(data => {
        this.images.push(data.a.name);
        localStorage.setItem('images', JSON.stringify(this.images));
      });
  }
}
