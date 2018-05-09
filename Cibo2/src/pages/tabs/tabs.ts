import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AddFoodPage } from '../add-food/add-food';
import { FoodListPage } from '../food-list/food-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FoodListPage;
  tab3Root = AddFoodPage;

  constructor() {

  }
}
