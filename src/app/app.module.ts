import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__lolesports-vods'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [ StatusBar, SplashScreen, Keyboard]
})
export class AppModule { }
