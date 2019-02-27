import { Component, OnInit } from '@angular/core';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { isDevMode } from '@angular/core';
import * as $ from 'jquery';
import * as materialize from 'materialize-css';
import { blackHeader } from '../header/header.component';
import { isMobile } from '../app.component';
declare const require;

const EVENT = require('../../assets/data/events.json');

const EVENTS = EVENT.events;
const CATEGORIES = EVENT.categories;

let instance;

function getCategoryFromHash(hash) {
  for (const item of CATEGORIES) {
    if (item.hash === hash) {
      return item;
    }
  }
}

function getCategoryNameFromHash(hash) {
  return getCategoryFromHash(hash).name;
}

export function handleHashChange() {
  const hash = location.hash.replace('#', '');
  $('.events-listing').css('opacity', '0');
  $('html, body').animate({ scrollTop: 0 }, 300);
  setTimeout(() => {
    $('.events-listing').removeClass('active');
    if (hash === '') {
      instance.list = CATEGORIES;
      $('.category-list').addClass('active');
      $('.category-list').css('opacity', '1');
      $('.page-title').text('EVENTS');
      $('.back-link').css('opacity', '0');
    } else {
      instance.list = EVENTS[hash];
      $('.' + hash + '-list').addClass('active');
      $('.' + hash + '-list').css('opacity', '1');
      $('.page-title').text(getCategoryNameFromHash(hash).toUpperCase());
      $('.back-link').css('opacity', '1');
    }
  }, 310);
}

window.onhashchange = handleHashChange;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {

  constructor(private titleService: Title, private sanitizer: DomSanitizer) {
    this.titleService.setTitle('Incident 2019 - Events');
  }

  categories = CATEGORIES;
  events = EVENTS;
  eventKeys = Object.keys(EVENTS);
  list = undefined;
  modalTitle = 'title';
  modalText = 'text';
  isDevMode = isDevMode;
  getCategoryFromHash = getCategoryFromHash;
  isMobile = isMobile;

  listIsCategory () {
    return this.list === CATEGORIES;
  }

  setModalTitleText(event) {
    this.modalTitle = $(event.target).attr('data-title');
    this.modalText = $(event.target).attr('data-text');
  }

  getSafeUrl(url) {
    console.log(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
    // Sanitize youtube urls
    for (const key of this.eventKeys) {
      for (const item of this.events[key]) {
        if (item.youtube) {
          item.youtube = this.getSafeUrl(item.youtube);
        }
      }
    }
    blackHeader();
    instance = this;
    instance.list = undefined;
    handleHashChange();
    $(document).ready(function () {
      const elems = document.querySelectorAll('.modal');
      materialize.Modal.init(elems, {});
      $('a[data-target="modal"]').click(this.setModalTitleText);
      $('.back-link').click(() => { location.hash = ''; });
      handleHashChange();
    });
    if (instance.list === undefined) {
      instance.list = CATEGORIES;
    }
  }

}
