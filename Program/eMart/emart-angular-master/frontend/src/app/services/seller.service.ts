import { Injectable } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  categoryList:any;
  private headers: Headers;
  constructor(private http: HttpClient,public router: Router) { }

  addCategory(category:any){
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    this.http.post("/apiseller/category/save",category,httpOptions).subscribe( val => {
      // this.router.navigateByUrl("code200Page/signup");
    },
    error => {
      this.router.navigateByUrl("errPage");
    }
    );
  }

  
  addSubcategory(subCategory:any){
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    this.http.post("/apiseller/subCategory/save",subCategory,httpOptions).subscribe( val => {
      // this.router.navigateByUrl("code200Page/signup");
    },
    error => {
      this.router.navigateByUrl("errPage");
    }
    );
  }

  addItem(item:any){
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    this.http.post("/apiseller/item/addItem",item,httpOptions).subscribe( val => {
      // this.router.navigateByUrl("code200Page/signup");
    },
    error => {
      this.router.navigateByUrl("errPage");
    }
    );
  }
}
