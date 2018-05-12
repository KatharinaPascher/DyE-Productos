import { Preferences } from '../../models/preferences.model';
import { Injectable } from '@angular/core';

@Injectable()
export class SharefavsProvider {

  f:number[]=[];

  constructor() {
  }
  
  setF(a:number) {
     this.f.push(a);
  }

  getF() {
      return this.f;
  }  

}
