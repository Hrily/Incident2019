import { Component, OnInit } from '@angular/core';
import { blackHeader } from '../header/header.component';

@Component({
  selector: 'app-fivehundred',
  templateUrl: './fivehundred.component.html',
  styleUrls: ['./fivehundred.component.css']
})
export class FivehundredComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    blackHeader();
  }

}
