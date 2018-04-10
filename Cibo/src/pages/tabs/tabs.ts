import { Component } from '@angular/core';

import { FavsPage } from '../favs/favs';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';

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
