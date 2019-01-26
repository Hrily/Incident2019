import { Component, OnInit } from '@angular/core';
import { isHome } from '../app.component';
import { Title } from '@angular/platform-browser';
import { blackHeader } from '../header/header.component';
import { aboutInit } from '../about/about.component';
import * as $ from 'jquery';
declare const require;

const SPONSORS = require('../../assets/data/sponsors.json');
@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {
  sponsors = SPONSORS;
  isHome = isHome;

  constructor(private titleService: Title) {
    if (!isHome()) {
      this.titleService.setTitle('Incident 2019 - Sponsors');
    }
  }

  ngOnInit() {
    blackHeader();
    $('.sponsor .nav-sown a').click(aboutInit);
  }
}
