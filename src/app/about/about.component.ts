import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as materialize from 'materialize-css';
import { Title } from '@angular/platform-browser';
import { whiteHeader } from '../header/header.component';
import { isMobile } from '../app.component';
declare const require;

const ABOUT = require('../../assets/data/about.json');

export let sliderCurrent = 0;
export let sliderEvent;

export function sliderNext() {
  sliderEvent = setTimeout(() => {
    const element = document.querySelectorAll('.about-slider')[0];
    const instance = materialize.Carousel.getInstance(element);
    if (sliderCurrent !== instance.center) {
      aboutInit();
      return;
    }
    instance.next();
    sliderCurrent = (sliderCurrent + 1) % ABOUT.about_desc.length;
    sliderNext();
  }, ABOUT.about_desc[sliderCurrent].delay * 1000);
}

export function aboutInit() {
  clearTimeout(sliderEvent);
  const elements = document.querySelectorAll('.about-slider');
  const instance = materialize.Carousel.getInstance(elements[0]);
  if (instance) {
    sliderCurrent = instance.center;
  } else {
    sliderCurrent = 0;
    const slider = materialize.Carousel.init(elements, {
      fullWidth: true,
      indicators: true
    });
  }
  sliderNext();
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutDesc = ABOUT.about_desc;
  history = ABOUT.history;
  slider = undefined;
  isMobile = isMobile;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Incident 2019 - About');
  }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function () {
      aboutInit();
    });
    whiteHeader();
  }

}
