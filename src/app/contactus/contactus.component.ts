import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { blackHeader } from '../header/header.component';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Incident 2019 - Contact Us');
  }

  ngOnInit() {
    blackHeader();
  }

}
