import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Preferences } from '../../models/preferences.model';
import { SharedataProvider } from '../../providers/sharedata/sharedata';
import { Favs } from '../../models/favs.model';
import { Restaurante } from '../../models/restaurante.model';
import { Plato } from '../../models/plato.model';
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
  platoslist:Plato[]=[new Plato(),new Plato(),new Plato(),new Plato(),new Plato(),new Plato()
    ,new Plato(),new Plato(),new Plato(),new Plato(),new Plato(),new Plato(),
    new Plato(),new Plato()
    ,new Plato(),new Plato(),new Plato(),new Plato(),new Plato(),new Plato()];
  favslist:Favs[];

  actual:number=0;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public share: SharedataProvider) {

      /**Gran parte de código dedicada a precargar datos */
      this.platoslist[0].asian=false;this.platoslist[0].fastfood=false;
      this.platoslist[0].italian=false;this.platoslist[0].mediterranean=false;
      this.platoslist[0].texmex=false;
      this.platoslist[0].vegan=false;this.platoslist[0].vegetarian=false;
      this.platoslist[0].glutenfree=false;
      this.platoslist[0].price=12;
      this.platoslist[0].distancia=122;
      this.platoslist[0].fotoid='40c12ffe-0bde-3df5-3853-b031d0cda23f.jpg';

      this.updatePhoto(this.platoslist[0].fotoid);
  }

  ionViewDidLoad() {
   
  }

  ionViewDidEnter(){
    this.preferencelist=this.share.getPreferences();
    console.log('Vegetarian is: '+this.preferencelist.vegetarian);
  }

  updatePhoto(id:string){
    let storageRef = firebase.storage().ref();
    let imageRef = storageRef.child('fotosComidas/'+id);
    imageRef.getDownloadURL().then(function(urls){
      let source = document.getElementById('foto-plato');
      source.setAttribute('src',urls);
    });
  }

}
