import { Component } from '@angular/core';
import * as $ from 'jquery';
import { routerTransition } from './animations';
import { RouterOutlet } from '@angular/router';

export function isHome() {
  return window.location.pathname === '/';
}

export function getPath() {
  const path = window.location.pathname.replace('/', '');
  return path === '' ? 'home' : path;
}

export function isMobile() {
  return window.outerWidth <= 800;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    routerTransition
  ]
})
export class AppComponent {

  isMobile = isMobile;

  prepareRoute(outlet: RouterOutlet) {
    let ret = outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    if (ret === 'EventsPage' && location.hash === '#pro_shows') {
      ret = 'ProShowsPage';
    }
    return ret;
  }
}
