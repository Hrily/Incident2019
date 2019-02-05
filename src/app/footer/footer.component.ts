import { Component, OnInit } from '@angular/core';
import { isHome, getPath } from '../app.component';
import * as $ from 'jquery';
import { Router, NavigationEnd } from '@angular/router';
declare const require;

const SOCIAL = require('../../assets/data/social.json');

export function whiteFooter() {
  setTimeout(() => {
    $('.footer-social').removeClass('invert');
    $('.mobile-footer-social').removeClass('invert');
  }, 0);
}

export function blackFooter() {
  setTimeout(() => {
    $('.footer-social').addClass('invert');
    $('.mobile-footer-social').addClass('invert');
  }, 0);
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url === '/') {
          $('.footer-social').hide('fast');
        } else {
          $('.footer-social').show('fast');
        }
      }
    });
  }

  social = SOCIAL;
  isHome = isHome;
  getPath = getPath;
  isMobile = () => window.outerWidth <= 800;

  ngOnInit() {
  }

}
