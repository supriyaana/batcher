import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmisionreceiptComponent } from './admisionreceipt.component';

describe('AdmisionreceiptComponent', () => {
  let component: AdmisionreceiptComponent;
  let fixture: ComponentFixture<AdmisionreceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmisionreceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmisionreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
