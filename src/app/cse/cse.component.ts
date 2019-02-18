import { Component, OnInit } from '@angular/core';
import { whiteHeader } from '../header/header.component';

@Component({
  selector: 'app-cse',
  templateUrl: './cse.component.html',
  styleUrls: ['./cse.component.css']
})
export class CseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    whiteHeader();
  }

}
