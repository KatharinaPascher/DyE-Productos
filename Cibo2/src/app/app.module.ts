import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SettingsPage} from '../pages/settings/settings';
import { RestaurantPage} from '../pages/restaurant/restaurant';
import { FavsPage} from '../pages/favs/favs';
import { HomePage} from '../pages/home/home';

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

//Providers
import { RestauranteProvider } from '../providers/restaurante/restaurante';
import { SharedataProvider } from '../providers/sharedata/sharedata';
import { SharedatafotoProvider } from '../providers/sharedatafoto/sharedatafoto';
import { SharefavsProvider } from '../providers/sharefavs/sharefavs';

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
    SettingsPage,
    TabsPage,
    LoginPage,
    RegisterPage,
    RestaurantPage,
    FavsPage,
    HomePage
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
    SettingsPage,
    TabsPage,
    LoginPage,
    RegisterPage,
    RestaurantPage,
    HomePage,
    FavsPage
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
    SharedataProvider,
    SharedatafotoProvider,
    SharefavsProvider
  ]
})
export class AppModule {}
