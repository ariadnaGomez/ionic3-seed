import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule} from 'ionic-angular/index';
import {} from 'jasmine';

import { MenuPage } from './menu';

describe('MenuPage', () => {
  let de: DebugElement;
  let comp: MenuPage;
  let fixture: ComponentFixture<MenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPage],
      imports: [
        IonicModule.forRoot(MenuPage)
      ],
      providers: []
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPage);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h3'));
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have expected <h3> text', () => {
    fixture.detectChanges();
    const h3 = de.nativeElement;
    expect(h3.innerText).toMatch(/ionic/i,
      '<h3> should say something about "Ionic"');
  });
});
