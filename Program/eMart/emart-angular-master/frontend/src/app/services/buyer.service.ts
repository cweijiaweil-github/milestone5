import { Injectable } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  private headers: Headers;
  constructor(private http: HttpClient,public router: Router) { }

  findItemsByPriceAndFacturer(){

  }

  findItemsByItemName(){
    
  }

  findItemdetailById(){
    
  }

  addToCart(cart:any){
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    this.http.post("/apibuyer/cart/addcart",cart,httpOptions).subscribe( val => {
      // this.router.navigateByUrl("code200Page/signup");
    },
    error => {
      this.router.navigateByUrl("errPage");
    }
    );
  }

  checkOut(){

  }


}
