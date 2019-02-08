import { Component, OnInit } from '@angular/core';
import { blackHeader } from '../header/header.component';
import { isMobile } from '../app.component';

@Component({
  selector: 'app-fivehundred',
  templateUrl: './fivehundred.component.html',
  styleUrls: ['./fivehundred.component.css']
})
export class FivehundredComponent implements OnInit {

  isMobile = isMobile;

  constructor() { }

  ngOnInit() {
    blackHeader();
  }

}
