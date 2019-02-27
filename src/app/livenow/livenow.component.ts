import { Component, OnInit } from '@angular/core';
import { blackHeader } from '../header/header.component';
import * as $ from 'jquery';
import { isMobile } from '../app.component';
import { Title } from '@angular/platform-browser';

const NO_EVENTS_STRING = 'Looks like the flurry of events has stopped momentarily - go grab a snack or chill out at the beach!';

export let HAPPENING_NOW = [
  {'event_name': 'Incident \'19 Inauguration', 'event_location': 'Verzeo SJA', 'event_time': '28th Feb 7pm'},
  {'event_name': 'Incident \'19 1', 'event_location': 'Verzeo SJA', 'event_time': '28th Feb 7pm'}
];

export let COMING_UP = HAPPENING_NOW;

export function getData(instance: any, cb: any) {
  $.getJSON('/register/happening_now',
    function (data: any) {
      cb(instance, data);
    }
  );
}

@Component({
  selector: 'app-livenow',
  templateUrl: './livenow.component.html',
  styleUrls: ['./livenow.component.css']
})
export class LivenowComponent implements OnInit {

  isMobile = isMobile;
  happeningNow = [];
  comingUp = [];
  happeningNowStatus = 'Loading...';
  comingUpStatus = 'Loading...';

  renderData(instance: LivenowComponent, data: any) {
    console.log(data);
    instance.happeningNow = data['happening_now'];
    instance.comingUp = data['coming_up'];
    instance.happeningNowStatus = (instance.happeningNow.length === 0) ? NO_EVENTS_STRING : '';
    instance.comingUpStatus = '';
  }

  constructor(private titleService: Title) {
    this.titleService.setTitle('Incident 2019 - Live Now');
  }

  ngOnInit() {
    blackHeader();
    getData(this, this.renderData);
  }

}
