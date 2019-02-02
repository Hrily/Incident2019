import { Component, OnInit } from '@angular/core';
import { whiteHeader } from '../header/header.component';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  isMobile = () => window.outerWidth <= 700;

  constructor() { }

  ngOnInit() {
    whiteHeader();
  }

}
