import { Component, OnInit } from '@angular/core';
import { blackHeader } from '../header/header.component';
import { isMobile } from '../app.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {

  isMobile = isMobile;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Incident 2019 - Incident');
  }

  ngOnInit() {
    blackHeader();
  }

}
