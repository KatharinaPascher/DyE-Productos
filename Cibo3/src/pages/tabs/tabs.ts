import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
import { FavsPage } from '../favs/favs';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SettingsPage;
  tab2Root = HomePage;
  tab3Root = FavsPage;

  constructor() {

  }
}
