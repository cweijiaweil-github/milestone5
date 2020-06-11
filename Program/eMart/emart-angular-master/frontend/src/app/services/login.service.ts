import { Injectable, SystemJsNgModuleLoader } from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { PlatformLocation} from '@angular/common';

@Injectable({
  providedIn: "root"
})
export class LoginService {
  
  retVal =[];
  private headers: Headers;
  constructor(private http: HttpClient,public router: Router) { }

  getInfo(): string {
    return 'test service';
  }
  
  onLogin(user:any) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    
    this.http.post("/apiuser/user/login",user,httpOptions).subscribe( val => {
      this.retVal= val["key"].split(",");
      window.sessionStorage.setItem(this.retVal[0],this.retVal[1]);
      this.router.navigateByUrl(""+this.retVal[2]);
    },
    error => {
      this.router.navigateByUrl("errPage");
    }
    );
  }
  
}
