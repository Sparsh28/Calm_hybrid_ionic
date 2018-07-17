import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {ActivityService} from "../services/activity-service";
import {MyApp} from "./app.component";
import { Calendar } from '@ionic-native/calendar'

import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import { SleepPage } from '../pages/sleep/sleep';
import { MeditatePage } from '../pages/meditate/meditate';
import { MusicPage } from '../pages/music/music';
import { MasterclassPage } from '../pages/masterclass/masterclass';
import { TabsPage } from '../pages/tabs/tabs';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    SleepPage,
    MeditatePage,
    MusicPage,
    TabsPage,
    MasterclassPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    SleepPage,
    MeditatePage,
    MusicPage,
    TabsPage,
    MasterclassPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService
  ]
})

export class AppModule {
}
