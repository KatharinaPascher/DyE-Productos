import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private auth : AuthProvider) {

 
    this.auth.Session.subscribe(session=>{
      if(session){
        this.rootPage = TabsPage;
      }
        else{
          this.rootPage = LoginPage;
        }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  //Cerrar sesión
  cerrarSesion(){
    this.auth.logout();
  }
}
