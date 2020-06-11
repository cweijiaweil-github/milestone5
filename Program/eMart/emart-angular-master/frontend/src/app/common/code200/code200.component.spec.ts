import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Code200Component } from './code200.component';

describe('Code200Component', () => {
  let component: Code200Component;
  let fixture: ComponentFixture<Code200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Code200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Code200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
