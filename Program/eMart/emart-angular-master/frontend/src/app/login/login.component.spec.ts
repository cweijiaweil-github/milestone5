import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { LoginService } from '../services/login.service';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from '../app-routing.module';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule
      ],
      providers: [
        LoginService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
  });

  it('form should be invalid', async(() => {
    component.loginForm.controls['email'].setValue('');
    component.loginForm.controls['password'].setValue('');
    expect(component.loginForm.valid).toBeFalsy();
  }));

  it('form should be vaild', async(() => {
    component.loginForm.controls['email'].setValue('asd@asd.com');
    component.loginForm.controls['password'].setValue('aaaaaa');
    expect(component.loginForm.valid).toBeTruthy();
  }));

  it('form call the onSubmit method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'loginSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click(); 
    expect(component.loginSubmit).toHaveBeenCalledTimes(1);
  }));

  it('should have as info test service', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.info).toEqual('test service');
  }));

});
