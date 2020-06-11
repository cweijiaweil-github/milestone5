import { Injectable } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private headers: Headers;
  constructor(private http: HttpClient,public router: Router) { }

  onSignupBuyer(user:any){
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    this.http.post("/apiuser/user/buyer/signup",user,httpOptions).subscribe( val => {
      this.router.navigateByUrl("code200Page/signup");
    },
    error => {
      this.router.navigateByUrl("errPage");
    }
    );
  }
  onSignupSeller(user:any){
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    this.http.post("/apiuser/user/seller/signup",user,httpOptions).subscribe( val => {
      this.router.navigateByUrl("code200Page/signup");
    },
    error => {
      this.router.navigateByUrl("errPage");
    }
    );

  }

}
