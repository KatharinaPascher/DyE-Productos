import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { FoodListPage } from '../pages/food-list/food-list';
import { AddFoodPage } from '../pages/add-food/add-food';

import { LoginPageModule } from '../pages/login/login.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';

//Camara
import { Camera} from '@ionic-native/camera';
import { ImageProvider } from '../providers/image/image';
import { FotoProvider } from '../providers/foto/foto';
import { RestauranteProvider } from '../providers/restaurante/restaurante';
import { InfofotoProvider } from '../providers/infofoto/infofoto';

/** constante firebaseConfig con la información de nuestro api de firebase */
export const firebaseConfig = {
  apiKey: "AIzaSyCQcpvZQUcXYWPY6Q9p--AFLsLRzDg8GrA",
  authDomain: "bbdd-cibo-login.firebaseapp.com",
  databaseURL: "https://bbdd-cibo-login.firebaseio.com",
  projectId: "bbdd-cibo-login",
  storageBucket: "bbdd-cibo-login.appspot.com",
  messagingSenderId: "93991556088"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    AddFoodPage,
    FoodListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    AddFoodPage,
    FoodListPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImageProvider,
    FotoProvider,
    RestauranteProvider,
    InfofotoProvider
  ]
})
export class AppModule {}
