import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { NuevoContactoPage} from '../pages/nuevo-contacto/nuevo-contacto';
import { AgendaPage } from '../pages/agenda/agenda';
import { AcercaDePage} from '../pages/acerca-de/acerca-de';
import { ContactosPage} from '../pages/contactos/contactos';
import { NuevaTareaPage} from '../pages/nueva-tarea/nueva-tarea'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    NuevoContactoPage,
    AcercaDePage,
    AgendaPage,
    ContactosPage,
    NuevaTareaPage,
    NuevoContactoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    NuevoContactoPage,
    AcercaDePage,
    AgendaPage,
    ContactosPage,
    NuevaTareaPage,
    NuevoContactoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
