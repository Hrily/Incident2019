import { Component, OnInit } from '@angular/core';
import { blackHeader } from '../header/header.component';
import { Title } from '@angular/platform-browser';
import { isMobile } from '../app.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-fourohfour',
  templateUrl: './fourohfour.component.html',
  styleUrls: ['./fourohfour.component.css']
})
export class FourohfourComponent implements OnInit {

  isMobile = isMobile;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Incident 2019 - Error 404');
  }

  ngOnInit() {
    blackHeader();
    if (location.search.length > 0) {
      $.getScript('/assets/launch-zork.js', function () {});
    } else {
      console.log('You didn\'t GET me anything :(');
    }
  }

}
