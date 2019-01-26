import { Component, OnInit } from '@angular/core';
import { blackHeader } from '../header/header.component';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    blackHeader();
  }

}
