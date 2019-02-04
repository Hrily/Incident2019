import { Component, OnInit } from '@angular/core';
import { blackHeader } from '../header/header.component';

@Component({
  selector: 'app-fourohfour',
  templateUrl: './fourohfour.component.html',
  styleUrls: ['./fourohfour.component.css']
})
export class FourohfourComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    blackHeader();
  }

}
