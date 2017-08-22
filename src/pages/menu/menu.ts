import { Component, ViewChild } from '@angular/core';
import { IonicPage, Menu, Nav, NavController } from 'ionic-angular';

@IonicPage({
    name: 'menu',
    segment: 'menu'
})
@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html',
})
export class MenuPage {
    @ViewChild('content') content: Nav;
    @ViewChild(Menu) menu: Menu;
    public pages = [];
    public menuRoot: string = 'home';
    constructor(public navCtrl: NavController) {
        this.pages = [
            {
              title: 'Home',
              component: 'home',
              icon: 'home'
            }
        ];
    }
    goToDetail(page) {
        this.navCtrl.push(page.component);
    }
}
