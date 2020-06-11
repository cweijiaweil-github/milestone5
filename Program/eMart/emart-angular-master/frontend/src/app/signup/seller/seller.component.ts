import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {


  signupForm: FormGroup;

  constructor(private signupService:SignupService,private fber: FormBuilder, public router: Router) { }

  // public company:string;

  ngOnInit(): void {

    $(function () {
      $("#a-seller").click(function () {
        $(".w-content").css("height", "1030px");
        $(".w-box").css("height", "930px");
      });
      $("#a-buyer").click(function () {
        $(".w-content").css("height", "660px");
        $(".w-box").css("height", "560px");
      });
    });

    this.signupForm = this.fber.group(
      {
        username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(26)]],
        email: ['', [Validators.required, Validators.email]],
        mobile: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(26)]],
        rePassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(26)]],
        company_name: [''],
        gstin: [''],
        about_company: [''],
        postal: [''],
        website: ['']
      });
  }
  get username(): AbstractControl {
    return this.signupForm.get('username');
  }
  get email(): AbstractControl {
    return this.signupForm.get('email');
  }
  get mobile(): AbstractControl {
    return this.signupForm.get('mobile');
  }

  get password(): AbstractControl {
    return this.signupForm.get('password');
  }
  get rePassword(): AbstractControl {
    return this.signupForm.get('rePassword');
  }
  
  // get company(): AbstractControl {
  //   return this.signupForm.get('company');
  // }

  siginSubmit(value) {
    if (this.signupForm.valid) {
      const jsonParms = JSON.stringify(value);
      this.signupService.onSignupSeller(jsonParms);
    }
   }
}
