import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { blackHeader } from '../header/header.component';
import { isMobile } from '../app.component';

@Component({
  selector: 'app-icare',
  templateUrl: './icare.component.html',
  styleUrls: ['./icare.component.css']
})
export class IcareComponent implements OnInit {

  isMobile = isMobile;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Incident 2019 - iCare');
  }

  ngOnInit() {
    blackHeader();
  }

}
