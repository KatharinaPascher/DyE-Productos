import { Plato } from '../../models/plato.model';
import { Injectable } from '@angular/core';

@Injectable()
export class SharedatafotoProvider {

  ps:Plato[]=[new Plato(),new Plato(),new Plato(),new Plato(),new Plato(),new Plato(),
    new Plato(),new Plato(),new Plato(),new Plato(),new Plato(),new Plato(),
    new Plato(),new Plato(),new Plato(),new Plato(),new Plato()];

  constructor() {
  }
  
  setPlatos(pnew:Plato[]) {
    console.log('log llamado: '+pnew[1].price);
    this.ps=pnew;
    console.log('llamado pregado:'+this.ps[1].price);
  }

  getToplas(){
    return this.ps;
  }

  getPlato(i:number) {
    console.log('llamado:'+this.ps[i].price);
      return this.ps[i];
  }  

}

