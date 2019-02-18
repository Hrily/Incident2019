import { Component, OnInit } from '@angular/core';

const EVENT = require('../../assets/data/verzio.json');

const CATEGORIES = EVENT.categories;

@Component({
  selector: 'app-verzio',
  templateUrl: './verzio.component.html',
  styleUrls: ['./verzio.component.css']
})
export class VerzioComponent implements OnInit {

  categories = CATEGORIES;
 

  constructor() { }

  ngOnInit() {
  }

}
