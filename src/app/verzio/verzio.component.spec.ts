import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerzioComponent } from './verzio.component';

describe('VerzioComponent', () => {
  let component: VerzioComponent;
  let fixture: ComponentFixture<VerzioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerzioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerzioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
