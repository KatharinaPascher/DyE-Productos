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

import { LoginPage } from '../pages/login/login';
import { RegisterPage} from '../pages/register/register';

import { LoginPageModule } from '../pages/login/login.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth'; 

/** constante firebaseConfig con la información de nuestro api de firebase */
export const firebaseConfig = {
  apiKey: "AIzaSyCQcpvZQUcXYWPY6Q9p--AFLsLRzDg8GrA",
  authDomain: "bbdd-cibo-login.firebaseapp.com",
  databaseURL: "https://bbdd-cibo-login.firebaseio.com",
  projectId: "bbdd-cibo-login",
  storageBucket: "",
  messagingSenderId: "93991556088"
};

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
    DetailPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
