import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, Menu, Nav, NavController } from 'ionic-angular';
import {} from 'jasmine';

import { MenuPage } from './menu';

import {
  MenuMock,
  NavControllerMock,
  NavMock
} from 'ionic3-mocks';

describe('MenuPage', () => {
  let component: MenuPage;
  let debugElement;
  let fixture: ComponentFixture<MenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPage],
      imports: [
        IonicModule.forRoot(MenuPage)
      ],
      providers: [
        {
          provide: NavController,
          useFactory: () => NavControllerMock.instance()}
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPage);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create component', () => expect(component).toBeDefined());
  it('should create list', () =>  {
    const list = debugElement.query(By.css('ion-list'));
    expect(list).toBeDefined();
  });

});
