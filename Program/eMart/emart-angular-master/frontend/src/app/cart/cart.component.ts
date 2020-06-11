import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  
  buyerId: string;
  cartItems: any[];
  sumMoney: number = 0;
  sumPiece: number = 0;
  constructor( public router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.buyerId = window.sessionStorage.getItem("buyer");
    // this.findAllCar(this.buyerId);
  }
  
  findAllCar(buyerId:string){
    this.sumMoney = 0;
    this.http.get("/apibuyer/cart/listcarts" + "/" + buyerId).subscribe(val => {
      const arr = [];
      const cartList = val["key"];
      for (var i in cartList) {
        //  alert(JSON.stringify(cartList[i]));
        arr.push(cartList[i]);
      }
      this.cartItems = arr;
      this.getSum();
    },
      error => {
        this.router.navigateByUrl("errPage");
      }
    );
  }
  getSum() {
    this.sumMoney = 0;
    this.sumPiece = 0;
    this.cartItems.forEach((item, index, array) => {
      this.sumMoney = (array[index].price * array[index].num_items) + this.sumMoney;
      this.sumPiece = array[index].num_items + this.sumPiece;
    })
    $("#totaPiece").text(this.sumPiece);
    $("#totalPrice").text(this.sumMoney);
  }
  
  increment($event:any, index:number) {
    this.cartItems[index]["num_items"]= Number($($event.target).siblings(".s-count").text()) + 1;
    $($event.target).siblings(".s-count").text(this.cartItems[index]["num_items"]);
    this.getSum();
  }
  decrement($event:any,  index:number) {
    this.cartItems[index]["num_items"] = Number($($event.target).siblings(".s-count").text()) - 1;
    if (this.cartItems[index]["num_items"] < 1) {
      this.cartItems[index]["num_items"] = 1;
      $($event.target).siblings(".s-count").text(1)
    } else {
      $($event.target).siblings(".s-count").text(this.cartItems[index]["num_items"])
    }
    this.getSum();
  }


  delCarItems() {
    let id = "";
    $(".w-check").each((index,element) => {
      if($(element).prop("checked") === true){
        $(element).parents("tr").remove();
        id  += $(element).attr('id') + ",";
      }
    })
    
    this.http.get("/apibuyer/cart/deletecart"+ "/" + this.buyerId + "/" + id).subscribe(val => {
      const arr = [];
      const cartList = val["key"];
      for (var i in cartList) {
        //  alert(JSON.stringify(cartList[i]));
        arr.push(cartList[i]);
      }
      this.cartItems = arr;
      this.getSum();
    },
      error => {
        // this.router.navigateByUrl("errPage");
      }
    );
  }
  
  chkallchange() {
    $(".w-check").prop("checked", $(".checkall").prop("checked"));
  }
  chkwchange() {
    if ($(".w-check").length === $(".w-check:checked").length) {
      $(".checkall").prop("checked", true);
    } else {
      $(".checkall").prop("checked", false);
    }
  }
  
  checkOut(){
    //update buyer's history
  }
  
}
