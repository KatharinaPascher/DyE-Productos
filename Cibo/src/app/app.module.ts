import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import {FavsPage} from '../pages/favs/favs';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsPage } from '../pages/settings/settings';
import { DistancePage } from '../pages/distance/distance';
import { AllergiesPage } from '../pages/allergies/allergies';
import { PricePage } from '../pages/price/price';
import { FoodPage } from '../pages/food/food';
import { DetailPage } from '../pages/detail/detail';

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    FavsPage,
    HomePage,
    TabsPage,
    DistancePage,
    AllergiesPage,
    PricePage,
    FoodPage,
    DetailPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    FavsPage,
    HomePage,
    TabsPage,
    DistancePage,
    AllergiesPage,
    PricePage,
    FoodPage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
