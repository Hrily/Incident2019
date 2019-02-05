import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (window.outerWidth <= 800
        && navigator.userAgent.indexOf('Safari') !== -1
        && navigator.userAgent.indexOf('Android') === -1
        && navigator.userAgent.indexOf('Chrome') === -1
        && navigator.userAgent.indexOf('Mozilla') === -1) {
      // Safari doesn't support fixed background images, remove the image.
      $('.background-image').css({ background: '#D3D3D3'});
    }
  }

}
