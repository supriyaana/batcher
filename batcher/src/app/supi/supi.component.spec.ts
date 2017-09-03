import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupiComponent } from './supi.component';

describe('SupiComponent', () => {
  let component: SupiComponent;
  let fixture: ComponentFixture<SupiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
