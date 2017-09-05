import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectdetailsComponent } from './lectdetails.component';

describe('LectdetailsComponent', () => {
  let component: LectdetailsComponent;
  let fixture: ComponentFixture<LectdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
