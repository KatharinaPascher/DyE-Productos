import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Preferences } from '../../models/preferences.model';
import { SharedataProvider } from '../../providers/sharedata/sharedata';
import { Favs } from '../../models/favs.model';
import { Restaurante } from '../../models/restaurante.model';
import { Plato } from '../../models/plato.model';
import { RestaurantPage } from '../../pages/restaurant/restaurant';

import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  preferencelist:Preferences;
  //5 restaurantes
  restauranteslist:Restaurante[]=[new Restaurante(),new Restaurante(),
    new Restaurante(),new Restaurante(),new Restaurante()];
  //20 platos
  platoslist:Plato[]=[new Plato(),new Plato(),new Plato(),new Plato(),new Plato(),new Plato(),
                      new Plato(),new Plato(),new Plato(),new Plato(),new Plato(),new Plato(),
                      new Plato(),new Plato(),new Plato(),new Plato(),new Plato(),new Plato(),
                      new Plato(),new Plato()];

  actual:number=0;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public share: SharedataProvider) {

      this.preferencelist=this.share.getPreferences();
      /**Gran parte de código dedicada a precargar datos */

      /**Restaurantes*/
      this.restauranteslist[0].nombre="Restaurante Ático";
      this.restauranteslist[0].sitioweb="www.atico-restaurantes.com";
      this.restauranteslist[0].telefono="677 234 123";
      this.restauranteslist[0].descripcion="Bocados de autor en distinguido y luminoso salón y cócteles en terraza con olivos e icónicas vistas";
      this.restauranteslist[0].correo="atico.rest@gmail.com";
      this.restauranteslist[0].direccion="Calle Marqués de Valdeiglesias, 1, 28004 Madrid, España";
      this.restauranteslist[0].lat=40.419297;
      this.restauranteslist[0].long=-3.697198;
      this.restauranteslist[0].fotoid="001.JPG";

      /**Platos */
      this.platoslist[0].asian=false;this.platoslist[0].fastfood=false;
      this.platoslist[0].italian=false;this.platoslist[0].mediterranean=false;
      this.platoslist[0].texmex=false;
      this.platoslist[0].vegan=false;this.platoslist[0].vegetarian=false;
      this.platoslist[0].glutenfree=false;
      this.platoslist[0].price=30;this.platoslist[0].distancia=122;
      this.platoslist[0].fotoid='cb6e42f1-3fdb-2fd1-2914-bf28a3fb0819.jpg';
      this.platoslist[0].restauranteid=0;

      this.platoslist[1].asian=true;this.platoslist[1].fastfood=false;
      this.platoslist[1].italian=false;this.platoslist[1].mediterranean=false;
      this.platoslist[1].texmex=false;
      this.platoslist[1].vegan=false;this.platoslist[1].vegetarian=false;
      this.platoslist[1].glutenfree=false;
      this.platoslist[1].price=12;this.platoslist[1].distancia=90;
      this.platoslist[1].fotoid='d11638f6-e740-ff78-1992-980393042f48.jpg';
      this.platoslist[1].restauranteid=0;

      //this.filter();
      this.updatePhoto(this.platoslist[this.actual].fotoid);
  }

  ionViewDidLoad() {
   
  }

  ionViewWillEnter(){
    this.preferencelist=this.share.getPreferences();
  }

  updatePhoto(id:string){

    let storageRef = firebase.storage().ref();
    let imageRef = storageRef.child('fotosComidas/'+id);
    imageRef.getDownloadURL().then(function(urls){
      let source = document.getElementById('foto-plato');
      source.setAttribute('src',urls);
    });
  }

  onLike(){
    this.navCtrl.push(RestaurantPage, 
    this.restauranteslist[this.platoslist[this.actual].restauranteid]);
    
    if(this.actual<1) this.actual++;

    this.filter();
    this.updatePhoto(this.platoslist[this.actual].fotoid);
  }

  onDislike(){
    let source = document.getElementById('foto-plato');
      source.setAttribute('src',' ');
    
    if(this.actual<1)  this.actual++;

    this.filter();
    this.updatePhoto(this.platoslist[this.actual].fotoid);
  }

  filter(){
    
    for (let entry of this.platoslist) {
      if(entry.distancia<this.preferencelist.distance){
           break; 
         } else {
           if(this.actual<1) this.actual++;
          }   
    }
  }
}
