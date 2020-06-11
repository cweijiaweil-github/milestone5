import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuyerService } from '../services/buyer.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-buyer-master',
  templateUrl: './buyer-master.component.html',
  styleUrls: ['./buyer-master.component.css']
})

export class BuyerMasterComponent implements OnInit {

  buyerId: string;
  itemList: any;
  items: any[];
  subCategoryList: any;
  checkCartVal: any;

  historys: any[];
  categorys: any[];
  startPrice: number;
  endPrice: number;
  category: string;
  category_id: number;
  subCategory: string;
  subCategory_id: number;
  item_name: string;
  piece: number;
  count: number;


  constructor(private buyerService: BuyerService, private fb: FormBuilder, public router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.buyerId = window.sessionStorage.getItem("buyer");
    this.findAllItems()
  }
  
  @ViewChild('cartComponent', { static: false })
  public cartComponent: CartComponent;

  public findAllCar() {
    // 调用子组件的方法
    this.cartComponent.findAllCar(this.buyerId);
  }
  findItemsByName(value: any) {
    if (value["item_name"] != "") {
      this.http.get("/apibuyer/order/searchItems" + "/" + value["item_name"]).subscribe(val => {
        const arr = [];
        const itemList = val["key"];
        for (var i in itemList) {
          //  alert(JSON.stringify(itemList[i]));
          arr.push(itemList[i]);
        }
        this.itemList = arr;
      },
        error => {
          // this.router.navigateByUrl("errPage");
        }
      );
    }else{
      this.findAllItems();
    }
  }

  findAllItems() {
      this.http.get("/apibuyer/order/searchAllItems").subscribe(val => {
        const arr = [];
        const itemList = val["key"];
        for (var i in itemList) {
          //  alert(JSON.stringify(itemList[i]));
          arr.push(itemList[i]);
        }
        this.itemList = arr;
      },
        error => {
          // this.router.navigateByUrl("errPage");
        }
      );
    $(".specifications").css("display", "none");
    $(".item-content").css("display", "block");
  }

  viewDetails(sub_category_id: string) {
    $(".item-content").css("display", "none");
    $(".specifications").css("display", "block");
    this.http.get("/apibuyer/order/searchSubCategory" + "/" + sub_category_id).subscribe(val => {
      const arr = [];
      const itemList = val["key"];
      //  alert(JSON.stringify(itemList[0]));
      arr.push(itemList[0]);
      this.subCategoryList = arr;
    },
      error => {
        this.router.navigateByUrl("errPage");
      }
    );
  }

  findItemsByPriceAndFacturer() {
    if (this.startPrice != undefined && this.endPrice != undefined) {
      $("#a-buyer").parent("li").addClass("active");
      $("#a-purchaseHistory").parent("li").removeClass("active");
      $("#purchaseHistory").removeClass("active");
      $("#buyItem").addClass("active");
      // back_end start
      //  alert("startPrice="+this.startPrice+";endPrice="+this.endPrice+";category="+this.category+";subCategory="+this.subCategory);

      this.http.get("/apibuyer/order/fillerItems" + "/" + this.startPrice + "/" + this.endPrice).subscribe(val => {
        const arr = [];
        const itemList = val["key"];
        for (var i in itemList) {
          //  alert(JSON.stringify(itemList[i]));
          arr.push(itemList[i]);
        }
        this.itemList = arr;
      },
        error => {
          // this.router.navigateByUrl("errPage");
        }
      );
    }
  }

  addToCart(item_id: String, item_name: String, price: String) {
    this.findCartChk(item_id, item_name, price);
  }

  findCartChk(item_id: String, item_name: String, price: String) {
    this.http.get("/apibuyer/cart/getcart" + "/" + item_id).subscribe(val => {
      if (val == null) {
        const jsoncart = { "itemId": item_id, "item_name": item_name, "price": price, "num_items": "1", "buyerId": this.buyerId }
        const jsonParms = JSON.stringify(jsoncart);
        this.buyerService.addToCart(jsonParms);
      } else {
        const val1 = JSON.stringify(val);
        const id = val["id"];
        const num_item = val["num_items"] + 1;
        const jsoncart = { "id": id, "itemId": item_id, "item_name": item_name, "price": price, "num_items": num_item, "buyerId": this.buyerId }
        const jsonParms = JSON.stringify(jsoncart);
        this.buyerService.addToCart(jsonParms);
      }
    },
      error => {
        // this.router.navigateByUrl("errPage");
      }
    );
  }

  findAllHistory() {
    this.historys = [
      {
        id: 10001,
        item_name: "Tanmay3",
        price: "10211",
        description: "zhejiushi1003",
        date_time: "20200401"
      },
      {
        id: 10002,
        item_name: "Tanmay2",
        price: "10212",
        description: "zhejiushi1002",
        date_time: "20200402"
      },
      {
        id: 10003,
        item_name: "Tanmay3",
        price: "10213",
        description: "zhejiushi1003",
        date_time: "20200403"
      },
      {
        id: 10004,
        item_name: "Tanmay4",
        price: "10214",
        description: "zhejiushi1004",
        date_time: "20200404"
      }
    ];
  }
  checkOut(){
    alert()
  }
  selSubCategory(category: any, subCategory: any) {
    this.category_id = category.category_id;
    this.subCategory_id = subCategory.subCategory_id;
    this.category = category.category_name;
    this.subCategory = subCategory.subCategory_name;
  }

  retSearchRel() {
    this.findAllItems();
  }
  clearData() {
    $(".left-input").val("");
    $(".right-input").val("");
    this.category = "";
    this.subCategory = "";
  }
}
