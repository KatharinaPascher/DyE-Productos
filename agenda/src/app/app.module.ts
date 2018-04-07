import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { NuevoContactoPage} from '../pages/nuevo-contacto/nuevo-contacto';
import { AgendaPage } from '../pages/agenda/agenda';
import { AcercaDePage} from '../pages/acerca-de/acerca-de';
import { ContactosPage} from '../pages/contactos/contactos';
import { NuevaTareaPage} from '../pages/nueva-tarea/nueva-tarea';
import { RegisterPage} from '../pages/register/register';
import { Contacto } from '../models/contacto.model';
import { ContactService} from '../services/contacto.services';
import { Tarea } from '../models/tarea.model';
import { TareaService} from '../services/tarea.services';

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
    NuevoContactoPage,
    RegisterPage
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
    NuevoContactoPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactService,
    TareaService
  ]
})
export class AppModule {}
