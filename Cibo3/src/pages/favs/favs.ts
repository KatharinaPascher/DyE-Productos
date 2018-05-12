import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SharedatafotoProvider } from '../../providers/sharedatafoto/sharedatafoto';
import { SharefavsProvider } from '../../providers/sharefavs/sharefavs';
import { Plato } from '../../models/plato.model';
import { RestaurantPage } from '../../pages/restaurant/restaurant';

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
  prov:Plato[]=[];
  flist:number[]=[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public sharef: SharedatafotoProvider, 
    public f: SharefavsProvider,
    public view: ViewController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavsPage');
  }

  ionViewDidEnter(){
    //this.view.dismiss();
 
  }

  ionViewWillEnter() {

    this.flist=this.f.getF();

    for(let i of this.flist){
      this.prov.push(this.sharef.getPlato(i));
    }

    
  }

  ionViewDidLeave(){
   
    //this.view.dismiss();
  }
  ionViewWillLeave(){
    
  }

  onItemTapped(th){
    
    this.navCtrl.push(RestaurantPage,th.restauranteid);
    this.view.dismiss();
  }

}
