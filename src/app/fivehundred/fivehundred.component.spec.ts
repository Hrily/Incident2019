import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivehundredComponent } from './fivehundred.component';

describe('FivehundredComponent', () => {
  let component: FivehundredComponent;
  let fixture: ComponentFixture<FivehundredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivehundredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivehundredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
