import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';
import { whiteHeader, bigLogo } from '../header/header.component';
import { getData, HAPPENING_NOW } from '../livenow/livenow.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  happeningNow = '';

  constructor(private titleService: Title) {
    this.titleService.setTitle('Incident 2019');
  }

  ngOnInit() {
    whiteHeader();
    bigLogo();
    getData(this, (instance: HomeComponent, data: any) => {
      if (data['happening_now'].length === 0) {
        return;
      }
      const happeningEvent = data['happening_now'][0];
      instance.happeningNow = `
        <b>${happeningEvent.event_name}</b>
        is happening at
        <i>${happeningEvent.event_location}</i>.
        <a href="/livenow" class="azuki">VIEW&nbsp;ALL</a>
      `;
    });
    // const happeningEvent = HAPPENING_NOW[0];
    // this.happeningNow = `
    // <b>${happeningEvent.event_name}</b>
    // is happening at
    // <i>${happeningEvent.event_location}</i>.
    // <a href="/livenow" class="azuki">VIEW&nbsp;ALL</a>
    // `;
  }

}
