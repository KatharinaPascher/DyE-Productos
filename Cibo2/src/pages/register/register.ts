import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController, ToastController } from 'ionic-angular';

import {Camera, CameraOptions} from '@ionic-native/camera';
import { AuthProvider } from '../../providers/auth/auth';
import { ImageProvider } from '../../providers/image/image';
import { RestauranteProvider} from '../../providers/restaurante/restaurante';
import { Restaurante } from '../../models/restaurante.model'
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  /**Registro con correo y contraseña */
  user= { email : '', password : ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public auth : AuthProvider,
    public alertCtrl : AlertController,
    public menu : MenuController,
    public toastCtrl: ToastController,
    public camera:Camera,
    private imageSrv: ImageProvider,
    public resProvider : RestauranteProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  // Registro de usuario
  register(){
    
    }
    //Crear registro de restaurante
}
