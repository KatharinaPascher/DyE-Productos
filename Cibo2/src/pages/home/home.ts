import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Preferences } from '../../models/preferences.model';
import { SharedataProvider } from '../../providers/sharedata/sharedata';
import { Favs } from '../../models/favs.model';
import { Restaurante } from '../../models/restaurante.model';
import { Plato } from '../../models/plato.model';
import { RestaurantPage } from '../../pages/restaurant/restaurant';
import { SharedatafotoProvider } from '../../providers/sharedatafoto/sharedatafoto';
import { SharefavsProvider } from '../../providers/sharefavs/sharefavs';
import { SharerestaurantedataProvider} from '../../providers/sharerestaurantdata/sharerestaurantdata'

import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  preferencelist:Preferences;
  //6 restaurantes
  restauranteslist:Restaurante[]=[new Restaurante(),new Restaurante(),
    new Restaurante(),new Restaurante(),new Restaurante(),new Restaurante()];
  //20 platos
  platoslist:Plato[]=[new Plato(),new Plato(),new Plato(),new Plato(),new Plato(),new Plato(),
                      new Plato(),new Plato(),new Plato(),new Plato(),new Plato(),new Plato(),
                      new Plato(),new Plato(),new Plato(),new Plato(),new Plato()];

  actual:number=0;
  total=this.platoslist.length-1;  
  favori:number[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public share: SharedataProvider,
    public sharefoto: SharedatafotoProvider,
    public sharefav: SharefavsProvider,
    public shareres: SharerestaurantedataProvider) {

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

      this.restauranteslist[1].nombre="Tori-Key Madrid";
      this.restauranteslist[1].sitioweb="www.torikey.com";
      this.restauranteslist[1].telefono="914 388 670";
      this.restauranteslist[1].descripcion="Comida tradicional japonesa, pero no tiene sushi. Sus famosas brochetas de pollo, al carbón, aliñadas con sal o con tare ( sake,soja,mirin), crujientes por fuera y jugosas.";
      this.restauranteslist[1].correo="madrid@torikey.com";
      this.restauranteslist[1].direccion="Plaza del Descubridor Diego de Ordás, 2, 28003 Madrid, España";
      this.restauranteslist[1].lat=40.440978;
      this.restauranteslist[1].long=-3.700427;
      this.restauranteslist[1].fotoid="002.JPG";

      this.restauranteslist[2].nombre="Lakasa";
      this.restauranteslist[2].sitioweb="www.lakasa.es";
      this.restauranteslist[2].telefono="915 338 715";
      this.restauranteslist[2].descripcion="Madera rústica y tintes modernos en un amplio local de cocina internacional de mercado con toques del chef.";
      this.restauranteslist[2].correo="info@lakasa.es";
      this.restauranteslist[2].direccion="Plaza Descubridor Diego de Ordás, 1  28003 Madrid, España";
      this.restauranteslist[2].lat=40.44084;
      this.restauranteslist[2].long=-3.700845;
      this.restauranteslist[2].fotoid="003.JPG";

      this.restauranteslist[3].nombre="Korea";
      this.restauranteslist[3].sitioweb="No hay información";
      this.restauranteslist[3].telefono="915 542 034";
      this.restauranteslist[3].descripcion="Acogedor local con lámparas de papel, máscaras y mesas de madera para tomar kimchi y otros platos coreanos.";
      this.restauranteslist[3].correo="No hay información";
      this.restauranteslist[3].direccion="Calle de Cristóbal Bordiú, 59, 28003 Madrid, España";
      this.restauranteslist[3].lat=40.44084;
      this.restauranteslist[3].long=-3.700845;
      this.restauranteslist[3].fotoid="004.JPG";

      this.restauranteslist[4].nombre="La leñera";
      this.restauranteslist[4].sitioweb="www.lalenera.com";
      this.restauranteslist[4].telefono="915 342 724";
      this.restauranteslist[4].descripcion="Un caserío pintado en la pared preside este familiar asador de gastronomía del Norte con parrilla a la vista.";
      this.restauranteslist[4].correo="support@lawfirm.com";
      this.restauranteslist[4].direccion="Calle de Hernani, 60, 28020 Madrid, España";
      this.restauranteslist[4].lat=40.447917;
      this.restauranteslist[4].long=-3.697602;
      this.restauranteslist[4].fotoid="005.JPG";

      this.restauranteslist[5].nombre="Restaurante Ferreiro";
      this.restauranteslist[5].sitioweb="www.restauranteferreiro.com";
      this.restauranteslist[5].telefono="915 539 342";
      this.restauranteslist[5].descripcion="Gran cocina asturiana, bien hecha, en pleno centro de Madrid.";
      this.restauranteslist[5].correo="support@lawfirm.com";
      this.restauranteslist[5].direccion="Calle Comandante Zorita 32, 28020 Madrid, España";
      this.restauranteslist[5].lat=40.450045;
      this.restauranteslist[5].long=-3.698157;
      this.restauranteslist[5].fotoid="006.JPG";

      /**Platos */

      this.platoslist[0].asian=false;

      this.platoslist[0].fastfood=false;

      this.platoslist[0].italian=false;

      this.platoslist[0].mediterranean=true;

      this.platoslist[0].texmex=false;

      this.platoslist[0].vegan=false;

      this.platoslist[0].vegetarian=true;

      this.platoslist[0].glutenfree=false;

      this.platoslist[0].price=10;

      this.platoslist[0].distancia=100;

      this.platoslist[0].fotoid='C001.JPG';

      this.platoslist[0].restauranteid=0;

      this.platoslist[0].fotourl="https://firebasestorage.googleapis.com/v0/b/bbdd-cibo-login.appspot.com/o/fotosComidas%2FC001.JPG?alt=media&token=337fcc70-d068-4b1e-ade3-71b35fa6c898";



      this.platoslist[1].asian=true;

      this.platoslist[1].fastfood=false;

      this.platoslist[1].italian=false;

      this.platoslist[1].mediterranean=false;

      this.platoslist[1].texmex=false;

      this.platoslist[1].vegan=false;

      this.platoslist[1].vegetarian=false;

      this.platoslist[1].glutenfree=false;

      this.platoslist[1].price=10;

      this.platoslist[1].distancia=150;

      this.platoslist[1].fotoid='C002.JPG';

      this.platoslist[1].restauranteid=1;

      this.platoslist[1].fotourl="https://firebasestorage.googleapis.com/v0/b/bbdd-cibo-login.appspot.com/o/fotosComidas%2FC002.JPG?alt=media&token=a77f954b-5d70-41d4-8eda-802ac20dde50";



      this.platoslist[2].asian=false;

      this.platoslist[2].fastfood=false;

      this.platoslist[2].italian=false;

      this.platoslist[2].mediterranean=true;

      this.platoslist[2].texmex=false;

      this.platoslist[2].vegan=false;

      this.platoslist[2].vegetarian=false;

      this.platoslist[2].glutenfree=false;

      this.platoslist[2].price=22;

      this.platoslist[2].distancia=200;

      this.platoslist[2].fotoid='C003.JPG';

      this.platoslist[2].restauranteid=2;

      this.platoslist[2].fotourl="https://firebasestorage.googleapis.com/v0/b/bbdd-cibo-login.appspot.com/o/fotosComidas%2FC003.JPG?alt=media&token=02b3e0b0-28e8-404b-818a-53bcde24be73";



      this.platoslist[3].asian=true;

      this.platoslist[3].fastfood=false;

      this.platoslist[3].italian=false;

      this.platoslist[3].mediterranean=false;

      this.platoslist[3].texmex=false;

      this.platoslist[3].vegan=false;

      this.platoslist[3].vegetarian=false;

      this.platoslist[3].glutenfree=false;

      this.platoslist[3].price=17;

      this.platoslist[3].distancia=50;

      this.platoslist[3].fotoid='C004.JPG';

      this.platoslist[3].restauranteid=3;

      this.platoslist[3].fotourl="https://firebasestorage.googleapis.com/v0/b/bbdd-cibo-login.appspot.com/o/fotosComidas%2FC004.JPG?alt=media&token=d1b94771-bd56-4123-905d-87a287ab68a4";



      this.platoslist[4].asian=false;

      this.platoslist[4].fastfood=true;

      this.platoslist[4].italian=false;

      this.platoslist[4].mediterranean=false;

      this.platoslist[4].texmex=false;

      this.platoslist[4].vegan=false;

      this.platoslist[4].vegetarian=false;

      this.platoslist[4].glutenfree=false;

      this.platoslist[4].price=15;

      this.platoslist[4].distancia=70;

      this.platoslist[4].fotoid='C005.JPG';

      this.platoslist[4].restauranteid=4;

      this.platoslist[4].fotourl="https://firebasestorage.googleapis.com/v0/b/bbdd-cibo-login.appspot.com/o/fotosComidas%2FC005.JPG?alt=media&token=28d4f124-b486-485c-a8da-7ce6a50a27bd";



      this.platoslist[5].asian=false;

      this.platoslist[5].fastfood=false;

      this.platoslist[5].italian=false;

      this.platoslist[5].mediterranean=true;

      this.platoslist[5].texmex=false;

      this.platoslist[5].vegan=false;

      this.platoslist[5].vegetarian=false;

      this.platoslist[5].glutenfree=false;

      this.platoslist[5].price=15;

      this.platoslist[5].distancia=40;

      this.platoslist[5].fotoid='C006.JPG';

      this.platoslist[5].restauranteid=5;

      this.platoslist[5].fotourl="https://firebasestorage.googleapis.com/v0/b/bbdd-cibo-login.appspot.com/o/fotosComidas%2FC006.JPG?alt=media&token=38f49cbd-5944-431c-b37a-0b61775316fb";



      this.platoslist[6].asian=false;

      this.platoslist[6].fastfood=false;

      this.platoslist[6].italian=true;

      this.platoslist[6].mediterranean=true;

      this.platoslist[6].texmex=false;

      this.platoslist[6].vegan=false;

      this.platoslist[6].vegetarian=true;

      this.platoslist[6].glutenfree=true;

      this.platoslist[6].price=20;

      this.platoslist[6].distancia=40;

      this.platoslist[6].fotoid='C007.JPG';

      this.platoslist[6].restauranteid=5;

      this.platoslist[6].fotourl="https://firebasestorage.googleapis.com/v0/b/bbdd-cibo-login.appspot.com/o/fotosComidas%2FC007.JPG?alt=media&token=7a9ac680-8fba-4f66-b670-eae9fa3e0224";



      this.platoslist[7].asian=false;

      this.platoslist[7].fastfood=true;

      this.platoslist[7].italian=false;

      this.platoslist[7].mediterranean=false;

      this.platoslist[7].texmex=true;

      this.platoslist[7].vegan=false;

      this.platoslist[7].vegetarian=true;

      this.platoslist[7].glutenfree=false;

      this.platoslist[7].price=15;

      this.platoslist[7].distancia=200;

      this.platoslist[7].fotoid='C008.JPG';

      this.platoslist[7].restauranteid=2;

      this.platoslist[7].fotourl="https://firebasestorage.googleapis.com/v0/b/bbdd-cibo-login.appspot.com/o/fotosComidas%2FC008.JPG?alt=media&token=5f7dafd7-b86a-4a87-9f73-d2cab96d543e";



      this.platoslist[8].asian=false;

      this.platoslist[8].fastfood=false;

      this.platoslist[8].italian=false;

      this.platoslist[8].mediterranean=true;

      this.platoslist[8].texmex=false;

      this.platoslist[8].vegan=false;

      this.platoslist[8].vegetarian=true;

      this.platoslist[8].glutenfree=true;

      this.platoslist[8].price=15;

      this.platoslist[8].distancia=100;

      this.platoslist[8].fotoid='C009.JPG';

      this.platoslist[8].restauranteid=0;

      this.platoslist[8].fotourl="https://firebasestorage.googleapis.com/v0/b/bbdd-cibo-login.appspot.com/o/fotosComidas%2FC009.JPG?alt=media&token=b56b823c-013c-4abd-9c9d-2411a0a40737";



      this.platoslist[9].asian=false;

      this.platoslist[9].fastfood=false;

      this.platoslist[9].italian=false;

      this.platoslist[9].mediterranean=true;

      this.platoslist[9].texmex=false;

      this.platoslist[9].vegan=true;

      this.platoslist[9].vegetarian=true;

      this.platoslist[9].glutenfree=true;

      this.platoslist[9].price=25;

      this.platoslist[9].distancia=40;

      this.platoslist[9].fotoid='C010.JPG';

      this.platoslist[9].restauranteid=5;

      this.platoslist[9].fotourl="https://firebasestorage.googleapis.com/v0/b/bbdd-cibo-login.appspot.com/o/fotosComidas%2FC010.JPG?alt=media&token=502c5b4d-668e-41c4-a2da-f9f11f4a64dd";



      this.platoslist[10].asian=true;

      this.platoslist[10].fastfood=false;

      this.platoslist[10].italian=false;

      this.platoslist[10].mediterranean=false;

      this.platoslist[10].texmex=false;

      this.platoslist[10].vegan=false;

      this.platoslist[10].vegetarian=false;

      this.platoslist[10].glutenfree=true;

      this.platoslist[10].price=40;

      this.platoslist[10].distancia=50;

      this.platoslist[10].fotoid='C011.JPG';

      this.platoslist[10].restauranteid=3;

      this.platoslist[10].fotourl="https://firebasestorage.googleapis.com/v0/b/bbdd-cibo-login.appspot.com/o/fotosComidas%2FC011.JPG?alt=media&token=175c27b1-cbb5-4c98-859e-8c9db636f0e9";



      this.platoslist[11].asian=false;

      this.platoslist[11].fastfood=false;

      this.platoslist[11].italian=true;

      this.platoslist[11].mediterranean=true;

      this.platoslist[11].texmex=false;

      this.platoslist[11].vegan=false;

      this.platoslist[11].vegetarian=false;

      this.platoslist[11].glutenfree=false;

      this.platoslist[11].price=27;

      this.platoslist[11].distancia=70;

      this.platoslist[11].fotoid='C012.JPG';

      this.platoslist[11].restauranteid=4;

      this.platoslist[11].fotourl="https://firebasestorage.googleapis.com/v0/b/bbdd-cibo-login.appspot.com/o/fotosComidas%2FC012.JPG?alt=media&token=da5968ec-352c-4569-9735-cb56cea0cff9";



      this.platoslist[12].asian=true;

      this.platoslist[12].fastfood=false;

      this.platoslist[12].italian=false;

      this.platoslist[12].mediterranean=false;

      this.platoslist[12].texmex=false;

      this.platoslist[12].vegan=false;

      this.platoslist[12].vegetarian=false;

      this.platoslist[12].glutenfree=false;

      this.platoslist[12].price=27;

      this.platoslist[12].distancia=150;

      this.platoslist[12].fotoid='C013.JPG';

      this.platoslist[12].restauranteid=1;

      this.platoslist[12].fotourl="https://firebasestorage.googleapis.com/v0/b/bbdd-cibo-login.appspot.com/o/fotosComidas%2FC013.JPG?alt=media&token=7c1e5bd2-db02-4066-aefe-3bb12bca81e1";



      this.platoslist[13].asian=true;

      this.platoslist[13].fastfood=false;

      this.platoslist[13].italian=false;

      this.platoslist[13].mediterranean=false;

      this.platoslist[13].texmex=false;

      this.platoslist[13].vegan=true;

      this.platoslist[13].vegetarian=true;

      this.platoslist[13].glutenfree=true;

      this.platoslist[13].price=20;

      this.platoslist[13].distancia=50;

      this.platoslist[13].fotoid='C014.JPG';

      this.platoslist[13].restauranteid=3;

      this.platoslist[13].fotourl="https://firebasestorage.googleapis.com/v0/b/bbdd-cibo-login.appspot.com/o/fotosComidas%2FC014.JPG?alt=media&token=d78ba93c-7f0e-4057-b39f-5bd9ff73b071";



      this.platoslist[14].asian=false;

      this.platoslist[14].fastfood=true;

      this.platoslist[14].italian=false;

      this.platoslist[14].mediterranean=false;

      this.platoslist[14].texmex=false;

      this.platoslist[14].vegan=false;

      this.platoslist[14].vegetarian=false;

      this.platoslist[14].glutenfree=false;

      this.platoslist[14].price=10;

      this.platoslist[14].distancia=70;

      this.platoslist[14].fotoid='C015.JPG';

      this.platoslist[14].restauranteid=4;

      this.platoslist[14].fotourl="https://firebasestorage.googleapis.com/v0/b/bbdd-cibo-login.appspot.com/o/fotosComidas%2FC015.JPG?alt=media&token=04d3419b-1f70-45e0-88e8-33d4d7c57c06";



      this.platoslist[15].asian=false;

      this.platoslist[15].fastfood=true;

      this.platoslist[15].italian=true;

      this.platoslist[15].mediterranean=true;

      this.platoslist[15].texmex=false;

      this.platoslist[15].vegan=false;

      this.platoslist[15].vegetarian=true;

      this.platoslist[15].glutenfree=true;

      this.platoslist[15].price=17;

      this.platoslist[15].distancia=40;

      this.platoslist[15].fotoid='C016.JPG';

      this.platoslist[15].restauranteid=5;

      this.platoslist[15].fotourl="https://firebasestorage.googleapis.com/v0/b/bbdd-cibo-login.appspot.com/o/fotosComidas%2FC016.JPG?alt=media&token=82084f9a-24d4-49e9-8a07-43c871dbab15";



      this.platoslist[16].asian=false;

      this.platoslist[16].fastfood=true;

      this.platoslist[16].italian=false;

      this.platoslist[16].mediterranean=false;

      this.platoslist[16].texmex=true;

      this.platoslist[16].vegan=false;

      this.platoslist[16].vegetarian=false;

      this.platoslist[16].glutenfree=false;

      this.platoslist[16].price=17;

      this.platoslist[16].distancia=200;

      this.platoslist[16].fotoid='C017.JPG';

      this.platoslist[16].restauranteid=2;

      this.platoslist[16].fotourl="https://firebasestorage.googleapis.com/v0/b/bbdd-cibo-login.appspot.com/o/fotosComidas%2FC017.JPG?alt=media&token=7ad584c8-85a9-4501-8938-8b6ed0661ae0";



      this.sharefoto.setPlatos(this.platoslist);
      this.shareres.setRest(this.restauranteslist);
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

    this.sharefav.setF(this.actual);

    if(this.actual<this.total){  
      //console.log('I: '+this.actual);

      let source = document.getElementById('foto-plato');
      source.setAttribute('src',' ');

      this.navCtrl.push(RestaurantPage, 
        this.platoslist[this.actual].restauranteid);//this.restauranteslist[this.platoslist[this.actual].restauranteid]);

      this.actual++;
      this.updatePhoto(this.platoslist[this.actual].fotoid);

    }else{
      //console.log('FINISH: '+this.actual);
      let source = document.getElementById('foto-plato');
      source.setAttribute('src','../../assets/imgs/NoMore.JPG');
    }
  }

  onDislike(){
    
    if(this.actual<this.total){  
      //console.log('I: '+this.actual);

      let source = document.getElementById('foto-plato');
      source.setAttribute('src',' ');

      this.actual++;
      this.updatePhoto(this.platoslist[this.actual].fotoid);
      
    }else{
      let source = document.getElementById('foto-plato');
      source.setAttribute('src','../../assets/imgs/NoMore.JPG');
    }

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
