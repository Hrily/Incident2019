import { Component, OnInit } from '@angular/core';
import { whiteHeader } from '../header/header.component';

declare const require;
const EVENT = require('../../assets/data/verzeo.json');

const CATEGORIES = EVENT.categories;

@Component({
  selector: 'app-verzeo',
  templateUrl: './verzeo.component.html',
  styleUrls: ['./verzeo.component.css']
})
export class VerzeoComponent implements OnInit {

  categories = CATEGORIES;
 

  constructor() { }

  ngOnInit() {
    whiteHeader()
  }

}
