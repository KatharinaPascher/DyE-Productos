import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapType } from '@angular/compiler/src/output/output_ast';
import { Restaurante } from '../../models/restaurante.model';
import firebase from 'firebase';

/**
 * Generated class for the RestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@IonicPage()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage {
  @ViewChild('map') mapElement;
  map:any;
  rest:Restaurante;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams
    ) {

      this.rest = this.navParams.data;
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('logos/'+this.rest.fotoid);
     
      imageRef.getDownloadURL().then(function(urls){
        let source = document.getElementById('foto-restaurante');
        source.setAttribute('src',urls);
    });
  }

  ionViewDidLoad() {
<<<<<<< HEAD
    
=======
>>>>>>> f6fc193daba89014ad2a2c4dc3dd35a0351f2186
  }

  //Función con la información para inicializar un mapa. Se puede configurar la latitud y longitud
  initMap2(){
    //Aquí se ponen las coordenadas!!!!
    let latLng = new google.maps.LatLng(this.rest.lat,this.rest.long);
    
    let mapOptions = {
      center:latLng,
      zoom:15,
      MapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
}
