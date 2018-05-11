import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedatafotoProvider } from '../../providers/sharedatafoto/sharedatafoto';
import { SharefavsProvider } from '../../providers/sharefavs/sharefavs';
import { Plato } from '../../models/plato.model';

/**
 * Generated class for the FavsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favs',
  templateUrl: 'favs.html',
})
export class FavsPage {
  list:Plato[];/*=[new Plato(),new Plato(),new Plato(),new Plato(),new Plato(),new Plato(),
    new Plato(),new Plato(),new Plato(),new Plato(),new Plato(),new Plato(),
    new Plato(),new Plato(),new Plato(),new Plato(),new Plato()];*/
  prov:Plato;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public sharef: SharedatafotoProvider) {
      //this.list=this.sharef.getToplas();
      //this.prov=this.sharef.getPlato(0);
      //console.log('log'+this.list[0].price);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavsPage');
  }

}
