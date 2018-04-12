import { Component, ViewChild  } from '@angular/core';
import { Nav, Platform, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { SettingsPage } from '../pages/settings/settings';
import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})

//export class MyApp {
 // rootPage:any= TabsPage;

 // constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
   // platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //statusBar.styleDefault();
     // splashScreen.hide();
    //});
 // }
//}

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private auth: AuthProvider,
    public menu : MenuController) {
    
      this.initializeApp();

      this.auth.Session.subscribe(session=>{
        if(session){
         this.menu.swipeEnable(true); 
         this.rootPage = TabsPage;
        }
          else{
            this.rootPage = LoginPage;
          }
      });


      // used for an example of ngFor and navigation
    this.pages = [
      { title: 'TabsPage', component: TabsPage},
      { title: 'Home', component: HomePage},
      { title: 'Settings', component: SettingsPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  cerrarSesion(){
    this.menu.toggle();

    this.auth.logout();
}

}
