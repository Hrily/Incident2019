import { Component, OnInit } from '@angular/core';
import {isHome, getPath} from '../app.component';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { aboutInit, sliderNext, sliderCurrent, sliderEvent } from '../about/about.component';
import * as $ from 'jquery';
import { blackFooter, whiteFooter } from '../footer/footer.component';
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

export function bigLogo () {
  $('.header .header-logo .text').hide('fast');
  $('.header').css({ position: 'absolute' });
  // This is a hack. Initially the logo has a negative
  // top, we wait for it to become positive. Just like I'm
  // waiting for my life to become positive.
  $(document).ready(function () {
    const logoInterval = setInterval(() => {
      const logo = document.getElementById('home-logo');
      const home = document.getElementById('home');
      const landing = document.getElementById('landing');
      console.log($(landing).offset().top , $(home).innerHeight());
      if ($('.landing').offset().top < 0 || $('.landing').offset().top == $('.landing .title').offset().top) {
        return;
      }
      $('.header .header-logo .logo').css({
        height: $(logo).height(),
        top: $(landing).offset().top - $(home).offset().top + $(landing).css('padding-top'),
        left: '50%',
        transform: 'translateX(-50%)',
        padding: 0
      });
      clearInterval(logoInterval);
    }, 6);
  });
}

export function blackHeader() {
  setTimeout(() => {
    $('.header').addClass('invert');
    blackFooter();
  }, 0);
}

export function whiteHeader() {
  setTimeout(() => {
    $('.header').removeClass('invert');
    whiteFooter();
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
          console.log();
        } else {
          $('.header').attr('style', '');
          $('.header .header-logo .text').show('fast');
          $('.header .header-logo .logo').attr('style', '');
        }
        window.scrollTo({
          top: 0,
          left: 0,
        });
      }
    });
    setTimeout(() => {
      $('.header .header-logo .logo').addClass('animated');
    }, 600);
  }

  isHome = isHome;
  social = SOCIAL;
  getPath = getPath;
  bigLogo = bigLogo;

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
    if (location.search.length > 0) {
      $.getScript('/assets/launch-zork.js', function () { });
    } else {
      console.log('You didn\'t GET me anything :(');
    }
  }
}
