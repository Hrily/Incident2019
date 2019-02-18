import { Component, OnInit } from '@angular/core';
import { whiteHeader } from '../header/header.component';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    whiteHeader();
  }

}
