import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';
import { storage } from 'firebase';
import { AuthProvider } from '../../providers/auth/auth';

import { ImageProvider } from '../../providers/image/image';
import { InfofotoModel } from '../../models/infofoto.model';
import { InfofotoProvider} from '../../providers/infofoto/infofoto';

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

  cameraOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  private images = [];
  pref:InfofotoModel=new InfofotoModel();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public camera:Camera,
    private afAuth: AuthProvider,
    private imageSrv: ImageProvider,
    private info: InfofotoProvider,
    public toastCtrl : ToastController) {
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

        let toast = this.toastCtrl.create({
          message: 'Wait a moment',
          duration: 1000,
          position: 'middle'
        });
      
        toast.present();

        let base64Image = 'data:image/jpeg;base64,' + data;

        this.info.addFotoInfo(this.pref);

        return this.imageSrv.uploadImage(base64Image, this.afAuth.getId);
      })
      .then(data => {
        let toast = this.toastCtrl.create({
          message: 'Uploaded! Wait some days to have fun!',
          duration: 1000,
          position: 'middle'
        });
      
        toast.present();
        //this.images.push(data);
        //localStorage.setItem('images', JSON.stringify(this.images));
      });
  }
}
