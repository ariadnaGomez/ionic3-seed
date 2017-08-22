import { Component } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard';
import { StatusBar } from '@ionic-native/status-bar';
import {TranslateService} from '@ngx-translate/core';
import { Platform } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage: any = 'menu';
  constructor(
    public platform: Platform,
    public keyboard: Keyboard,
    public statusbar: StatusBar,
    public translate: TranslateService
  ) {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.keyboard.disableScroll(true);
        this.keyboard.hideKeyboardAccessoryBar(true);
      }
      translate.setDefaultLang('en');
      translate.use('en');
    });
  }
}
