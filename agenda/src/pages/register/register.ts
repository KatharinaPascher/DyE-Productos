import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
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
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  // Registro de usuario
  register(){
    this.auth.registerUser(this.user.email,this.user.password)
    .then((user) => {
      // El usuario se ha creado correctamente

      let toast = this.toastCtrl.create({
        message: 'Usuario '+this.user.email+' creado',
        duration: 1000,
        position: 'middle'
      });
    
      toast.present();

      this.menu.swipeEnable(true);
    })
    .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })
  }
}
