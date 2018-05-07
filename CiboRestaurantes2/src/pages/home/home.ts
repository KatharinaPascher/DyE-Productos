import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController , ToastController , AlertController} from 'ionic-angular';

import { ImageProvider } from '../../providers/image/image';
import { AuthProvider } from '../../providers/auth/auth';
import { MapType } from '@angular/compiler/src/output/output_ast';
import { GoogleAuthProvider } from '@firebase/auth-types';

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

  constructor(
    public navCtrl: NavController,
    public auth : AuthProvider,
    public alertCtrl : AlertController,
    public toastCtrl: ToastController,
    private imageSrv: ImageProvider,
    public zone: NgZone
  ) {

  }

  ionViewDidLoad(){
    this.initMap();
    
  }

  ionViewDidEnter(){
    //Se supone que esto trae el logo del restaurante, pero pruebo traer la imagen
    //FM2MX1xJEjMeGOKRNPYFZYJGg112.jpg del storage y no funciona
    this.imgsource=this.imageSrv.getLogo('FM2MX1xJEjMeGOKRNPYFZYJGg112');
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