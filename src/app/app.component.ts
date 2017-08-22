import { Component } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage: any = 'menu';
  constructor(
    public platform: Platform,
    public keyboard: Keyboard,
    public statusbar: StatusBar
  ) {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.keyboard.disableScroll(true);
        this.keyboard.hideKeyboardAccessoryBar(true);
      }
    });
  }
}
