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
import { VerContactoPage } from '../pages/ver-contacto/ver-contacto'
import { VerTareaPage } from '../pages/ver-tarea/ver-tarea' 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/*Así se resolvión el problema de declarations in 2 modules*/
import { LoginPageModule } from '../pages/login/login.module';
import { AgendaPageModule } from '../pages/agenda/agenda.module';

/**Importaciones asociadas a firebase */

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth'; 

/** constante firebaseConfig con la información de nuestro api de firebase */
export const firebaseConfig = {
  apiKey: "AIzaSyAeKBIJh1bhD1KyBXw826hjxwEoq_7EPzc",
  authDomain: "depi-agenda.firebaseapp.com",
  databaseURL: "https://depi-agenda.firebaseio.com",
  projectId: "depi-agenda",
  storageBucket: "depi-agenda.appspot.com",
  messagingSenderId: "359379729897"
};

@NgModule({
  declarations: [
    MyApp,
    NuevoContactoPage,
    AcercaDePage,
    ContactosPage,
    NuevaTareaPage,
    NuevoContactoPage,
    RegisterPage,
    VerContactoPage,
    VerTareaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    LoginPageModule,
    AgendaPageModule
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
    RegisterPage,
    VerTareaPage,
    VerContactoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactService,
    TareaService,
    AuthProvider
  ]
})
export class AppModule {}
