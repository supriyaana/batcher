import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbatchComponent } from './newbatch.component';

describe('NewbatchComponent', () => {
  let component: NewbatchComponent;
  let fixture: ComponentFixture<NewbatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewbatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
