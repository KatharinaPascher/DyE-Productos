import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AgendaPage } from '../pages/agenda/agenda';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { LoginPage } from '../pages/login/login';
import { ContactosPage} from '../pages/contactos/contactos';

import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
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
         this.rootPage = 'AgendaPage';
        }
          else{
            this.rootPage = 'LoginPage';
          }
      });


      // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Contactos', component: ContactosPage},
      { title: 'Agenda', component: AgendaPage},
      { title: 'Acerca de', component: AcercaDePage}
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
