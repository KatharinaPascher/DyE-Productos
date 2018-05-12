import { Restaurante } from '../../models/restaurante.model';
import { Injectable } from '@angular/core';

@Injectable()
export class SharerestaurantedataProvider {

  resta:Restaurante[]=[new Restaurante(),new Restaurante(),
    new Restaurante(),new Restaurante(),new Restaurante(),new Restaurante()];

  constructor() {
  }
  
  setRest(pnew:Restaurante[]) {
    //console.log('log llamado: '+pnew[1].price);
    this.resta=pnew;
    //console.log('llamado pregado:'+this.ps[1].price);
  }

  getRest(i:number) {
    //console.log('llamado:'+this.ps[i].price);
      return this.resta[i];
  }  

}
