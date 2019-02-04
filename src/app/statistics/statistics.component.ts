import { Component, OnInit } from '@angular/core';
import { whiteHeader } from '../header/header.component';
import { isMobile } from '../app.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  isMobile = isMobile;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Incident 2019 - Statistics');
  }

  ngOnInit() {
    whiteHeader();
  }

}
