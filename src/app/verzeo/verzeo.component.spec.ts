import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerzeoComponent } from './verzeo.component';

describe('VerzeoComponent', () => {
  let component: VerzeoComponent;
  let fixture: ComponentFixture<VerzeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerzeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerzeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
