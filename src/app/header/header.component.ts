import { Component, OnInit } from '@angular/core';
import {isHome, getPath} from '../app.component';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { aboutInit, sliderNext, sliderCurrent, sliderEvent } from '../about/about.component';
import * as $ from 'jquery';
declare const require;

const SOCIAL = require('../../assets/data/social.json');

function toggleMenu() {
  const navLinks = $('.header .nav-links');
  const i = $('.header i');
  const isClosed = i.html() === 'menu';
  const translate = isClosed ? '0' : '100';
  const iHTML = isClosed ? 'close' : 'menu';
  i.html(iHTML);
  i.attr('style', isClosed ? 'color: white;' : '');
  setTimeout(() => {
    navLinks.css('transform', 'translateX(' + translate + '%)');
  }, 0);
}

export function blackHeader() {
  setTimeout(() => {
    $('.header').addClass('invert');
  }, 0);
}

export function whiteHeader() {
  setTimeout(() => {
    $('.header').removeClass('invert');
  }, 0);
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url === '/') {
          const logo = $('.home .landing .logo');
          $('.header .header-logo .text').hide('fast');
          $('.header .header-logo .logo').css({
            height: logo.height(),
            top: logo.offset().top,
            left: '50%',
            transform: 'translateX(-50%)',
            padding: 0
          });
        } else {
          $('.header .header-logo .text').show('fast');
          $('.header .header-logo .logo').attr('style', '');
        }
      }
    });
    setTimeout(() => {
      $('.header .header-logo .logo').addClass('animated');
    }, 600);
  }

  isHome = isHome;
  social = SOCIAL;
  getPath = getPath;

  ngOnInit() {
    $('.header i').click(toggleMenu);
    $('.header .nav-links a').click(toggleMenu);
    $('.header .about').click(aboutInit);
    const aTop = $('.header .header-logo .text').height();
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 1.3 * aTop) {
        $('.header .header-logo .text').addClass('small');
      } else {
        $('.header .header-logo .text').removeClass('small');
      }
    });
  }
}
