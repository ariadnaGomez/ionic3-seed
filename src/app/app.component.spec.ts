import { async, TestBed } from '@angular/core/testing';
import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicModule, Platform } from 'ionic-angular';
import {} from 'jasmine';

import { MyApp } from './app.component';

import {
  KeyboardMock,
  PlatformMock,
  SplashScreenMock,
  StatusBarMock
} from 'ionic3-mocks';

describe('MyApp Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp],
      imports: [
        IonicModule.forRoot(MyApp)
      ],
      providers: [
        {
          provide: StatusBar,
          useFactory: () => StatusBarMock.instance()},
        {
          provide: SplashScreen,
          useFactory: () => SplashScreenMock.instance()},
        {
          provide: Platform,
          useFactory: () => PlatformMock.instance()},
        {
          provide: Keyboard,
          useFactory: () => KeyboardMock.instance()}
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof MyApp).toBe(true);
  });

  it('should set keyboard options', () => {
    expect(component.platform.ready).toHaveBeenCalled();
    fixture.whenStable().then(() => {
      expect(component.platform.is).toHaveBeenCalledWith('cordova');
      expect(component.keyboard.disableScroll).toHaveBeenCalledWith(true);
      expect(component.keyboard.hideKeyboardAccessoryBar)
        .toHaveBeenCalledWith(true);
    });
  });

});
