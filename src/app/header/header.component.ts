import { Component, OnInit } from '@angular/core';
import {isHome, getPath} from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { aboutInit, sliderNext, sliderCurrent, sliderEvent } from '../about/about.component'
import * as $ from 'jquery';
declare const require;

const SOCIAL = require('../../assets/data/social.json');

function toggleMenu() {
  if (window.outerWidth > 700) {
    return;
  }
  const header = $('.header');
  const i = $('.header i');
  const height = header.height() === 80 ? '500px' : '80px';
  const iHTML = i.html() === 'menu' ? 'close' : 'menu';
  i.html(iHTML);
  setTimeout(() => {
    header.css('max-height', height);
  }, 0);
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  isHome = isHome;
  social = SOCIAL;
  getPath = getPath;

  ngOnInit() {
    $('.header i').click(toggleMenu);
    $('.header a').click(toggleMenu);
    $('.header .about').click(aboutInit);
  }
}
