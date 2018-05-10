import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapType } from '@angular/compiler/src/output/output_ast';

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

  constructor(public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPage');
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
}
