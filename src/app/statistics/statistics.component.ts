import { Component, OnInit } from '@angular/core';
import { whiteHeader } from '../header/header.component';
import { isMobile } from '../app.component';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  isMobile = isMobile;

  constructor() { }

  ngOnInit() {
    whiteHeader();
  }

}
