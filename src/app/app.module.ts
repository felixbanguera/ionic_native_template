import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { Serial } from '@ionic-native/serial';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GeoPage } from '../pages/geo/geo';
import { CamPage } from '../pages/cam/cam';
import { SerialPage } from '../pages/serial/serial';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SerialProvider } from '../providers/serial/serial';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GeoPage,
    CamPage,
    SerialPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    GeoPage,
    CamPage,
    SerialPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    Serial,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SerialProvider
  ]
})
export class AppModule {}
