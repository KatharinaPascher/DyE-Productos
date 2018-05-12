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
  restaurante: Restaurante = {
    nombre: '',
    descripcion: '',
    telefono: '',
    correo: '',
    sitioweb: '',
    direccion:'',
    foto_id:'',
    lat: '',
    long: '',
    user:''};

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
    this.auth.registerUser(this.user.email,this.user.password)
    .then((user) => {
      // El usuario se ha creado correctamente

      let toast = this.toastCtrl.create({
        message: 'Usuario '+this.user.email+' creado',
        duration: 1000,
        position: 'middle'
      });
    
      toast.present();



      this.restaurante.user=this.auth.getId;



      this.resProvider.addRestaurante(this.restaurante).then(ref => {

        this.toastCtrl.create({

          message: 'creado',

          duration: 1000,

          position: 'middle'

        });

      });
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
    //Crear registro de restaurante
}
