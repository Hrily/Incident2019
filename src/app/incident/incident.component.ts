import { Component, OnInit } from '@angular/core';
import { blackHeader } from '../header/header.component';
import { isMobile } from '../app.component';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {

  isMobile = isMobile;

  constructor() { }

  ngOnInit() {
    blackHeader();
  }

}
