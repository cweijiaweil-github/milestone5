import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Code505Component } from './code505.component';

describe('Code505Component', () => {
  let component: Code505Component;
  let fixture: ComponentFixture<Code505Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Code505Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Code505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
