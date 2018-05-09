import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController , ToastController , AlertController} from 'ionic-angular';

import { ImageProvider } from '../../providers/image/image';
import { AuthProvider } from '../../providers/auth/auth';
import { MapType } from '@angular/compiler/src/output/output_ast';
import { GoogleAuthProvider } from '@firebase/auth-types';
import { AngularFireDatabase } from 'angularfire2/database';
import { RestauranteProvider} from '../../providers/restaurante/restaurante';

import firebase from 'firebase';
import { Restaurante } from '../../models/restaurante.model';

//declarar esta variable porque de alguna manera IONIC no entiende google.
declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
@ViewChild('map') mapElement;
map:any;
imgsource : any; 
restaurante : Restaurante;

  constructor(
    public navCtrl: NavController,
    public auth : AuthProvider,
    public alertCtrl : AlertController,
    public toastCtrl: ToastController,
    private imageSrv: ImageProvider,
    public zone: NgZone,
    public afd: AngularFireDatabase,
    public resSer: RestauranteProvider
  ) {
   
  }

  ionViewDidLoad(){
    this.initMap();
    
  }

  ionViewDidEnter(){

    let uid=this.auth.getId;
    let storageRef = firebase.storage().ref();
    let imageRef = storageRef.child('logos/'+uid+'.JPG');
    imageRef.getDownloadURL().then(function(urls){
      let source = document.getElementById('foto');
      source.setAttribute('src',urls);
    });
    
  }
  //Función con la información para inicializar un mapa. Se puede configurar la latitud y longitud
  initMap(){
    //Aquí se ponen las coordenadas!!!!
    let latLng = new google.maps.LatLng(40.4233873,-3.6927541);
    
    let mapOptions = {
      center:latLng,
      zoom:15,
      MapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  cerrarSesion(){
    this.auth.logout();
  }

}