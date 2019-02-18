import { Component, OnInit } from '@angular/core';
import { whiteHeader } from '../header/header.component';

@Component({
  selector: 'app-civil',
  templateUrl: './civil.component.html',
  styleUrls: ['./civil.component.css']
})
export class CivilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    whiteHeader();
  }

}
