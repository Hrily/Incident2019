import { Component, OnInit } from '@angular/core';
import { whiteHeader } from '../header/header.component';

@Component({
  selector: 'app-mech',
  templateUrl: './mech.component.html',
  styleUrls: ['./mech.component.css']
})
export class MechComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    whiteHeader();
  }

}
