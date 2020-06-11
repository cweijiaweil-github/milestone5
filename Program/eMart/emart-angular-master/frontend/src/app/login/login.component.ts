import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
 
  loginForm: FormGroup;
  private info:string;

  constructor(private loginService:LoginService,private fb: FormBuilder,public router: Router) { 
    this.info = this.loginService.getInfo();
  }
  
  ngOnInit() {

  this.loginForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    });
  }
  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }
  loginSubmit(value:any) {
    if (this.loginForm.valid) {
      const jsonParms = JSON.stringify(value);
      this.loginService.onLogin(jsonParms);
    }
   }
}
