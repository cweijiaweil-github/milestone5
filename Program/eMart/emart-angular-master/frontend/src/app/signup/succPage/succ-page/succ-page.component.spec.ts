import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccPageComponent } from './succ-page.component';

describe('SuccPageComponent', () => {
  let component: SuccPageComponent;
  let fixture: ComponentFixture<SuccPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
