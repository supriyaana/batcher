import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelecComponent } from './updatelec.component';

describe('UpdatelecComponent', () => {
  let component: UpdatelecComponent;
  let fixture: ComponentFixture<UpdatelecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatelecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatelecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
