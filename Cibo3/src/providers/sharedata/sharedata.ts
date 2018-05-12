import { Preferences } from '../../models/preferences.model';
import { Injectable } from '@angular/core';

@Injectable()
export class SharedataProvider {

  preferences:Preferences=new Preferences();

  constructor() {
  }
  
  setPreferences(newpreferences:Preferences) {
     this.preferences.asian=newpreferences.asian;
     this.preferences.italian=newpreferences.italian;
     this.preferences.fastfood=newpreferences.fastfood;
     this.preferences.mediterranean=newpreferences.mediterranean;
     this.preferences.texmex=newpreferences.texmex;
     
     this.preferences.vegan=newpreferences.vegan;
     this.preferences.vegetarian=newpreferences.vegetarian;
     this.preferences.glutenfree=newpreferences.glutenfree;

     this.preferences.price=newpreferences.price;
     this.preferences.distance=newpreferences.distance;
  }

  getPreferences() {
      return this.preferences;
  }  

}
