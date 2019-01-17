import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as materialize from 'materialize-css';
import { Title } from '@angular/platform-browser';
declare const require;

const ABOUT = require('../../assets/data/about.json');

export let sliderCurrent = 0;
export let sliderEvent;

export function sliderNext() {
  sliderEvent = setTimeout(() => {
    const element = document.querySelectorAll('.about-slider')[0];
    const instance = materialize.Carousel.getInstance(element);
    instance.next();
    sliderCurrent = (sliderCurrent + 1) % ABOUT.about_desc.length;
    sliderNext();
  }, ABOUT.about_desc[sliderCurrent].delay * 1000);
}

export function aboutInit() {
  clearTimeout(sliderEvent);
  sliderCurrent = 0;
  const elements = document.querySelectorAll('.about-slider');
  const slider = materialize.Carousel.init(elements, {
    fullWidth: true,
    indicators: true
  });
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
  isMobile = () => window.outerWidth <= 800;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Incident 2019 - About');
  }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function () {
      aboutInit();
    });
  }

}
