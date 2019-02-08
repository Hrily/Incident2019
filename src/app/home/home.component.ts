import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';
import { whiteHeader, bigLogo } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Incident 2019');
  }

  ngOnInit() {
    whiteHeader();
    bigLogo();
  }

}
