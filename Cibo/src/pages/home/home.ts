import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  navController: any;
  constructor(public naController: NavController, public navParams: NavParams) {
  }
  
  likeButton(){
    this.naController.setRoot(DetailPage);
    }
}
