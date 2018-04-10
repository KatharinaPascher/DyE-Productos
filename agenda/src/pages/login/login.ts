import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController, ToastController } from 'ionic-angular';

import { RegisterPage} from '../register/register';

import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  /**Registro con correo y contraseña */
  user= { email : '', password : ''};


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public auth : AuthProvider,
    public alertCtrl : AlertController,
    public menu : MenuController,
    public toastCtrl : ToastController) {
      this.menu = menu;
      this.menu.swipeEnable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.auth.loginUser(this.user.email,this.user.password ).then((user) => {
      //Sesión iniciada correctamente

      let toast = this.toastCtrl.create({
        message: 'Bienvenido '+this.user.email,
        duration: 1000,
        position: 'middle'
      });
    
      toast.present();
      
      this.menu.swipeEnable(true);
    }
  )
   .catch(err=>{
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: err.message,
      buttons: ['Aceptar']
    });
    alert.present();
  })

  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

}
