import { Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';

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
