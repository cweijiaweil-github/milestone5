import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-master',
  templateUrl: './seller-master.component.html',
  styleUrls: ['./seller-master.component.css']
})
export class SellerMasterComponent implements OnInit {

  sellerId: string;
  categoryId: string;
  subcategoryId: string;
  categoryList: any;
  subCategoryList: any;
  itemList: any;
  constructor(private sellerService: SellerService, private http: HttpClient, public router: Router) { }

  ngOnInit(): void {
    this.sellerId = window.sessionStorage.getItem("seller");
    this.getFindAllCategory(this.sellerId);
  }


  addCategory(value: any) {
    const jsonParms = JSON.stringify(value);
    this.sellerService.addCategory(jsonParms);
  }
  getFindAllCategory(sellerId: string) {
    // this.categoryList = this.sellerService.getFindAllCategory(sellerId);
    this.http.get("/apiseller/category/findcategorys" + "/" + sellerId).subscribe(val => {
      const arr = [];
      const categoryList = val["key"];
      for (var i in categoryList) {
        //  alert(JSON.stringify(categoryList[i]));
        arr.push(categoryList[i]);
        //  for(var j in categoryList[i]){
        //    alert(j+":"+categoryList[i][j]);
        //  }
      }
      // arr.push({'categoryId':'0001','category_name':'iphone3'});
      // arr.push({'categoryId':'0002','category_name':'iphhne5'});
      this.categoryList = arr;
    },
      error => {
        this.router.navigateByUrl("errPage");
      }
    );
  }
  getCategoryId(value) {
    this.categoryId = value;
    this.getFindAllSubCategory(this.sellerId, this.categoryId);
  }

  getFindAllSubCategory(sellerId: string, categoryId: string) {
    this.http.get("/apiseller/subCategory/findsubcategorys" + "/" + sellerId + "/" + categoryId).subscribe(val => {
      const arr = [];
      const subCategoryList = val["key"];
      for (var i in subCategoryList) {
        arr.push(subCategoryList[i]);
      }
      this.subCategoryList = arr;
    },
      error => {
        this.router.navigateByUrl("errPage");
      }
    );
  }
  getSubCategoryId(value) {
    this.subcategoryId = value;
  }
  addSubcategory(value: any) {
    const jsonParms = JSON.stringify(value);
    this.sellerService.addSubcategory(jsonParms);
  }

  addItem(value: any) {
    const jsonParms = JSON.stringify(value);
    this.sellerService.addItem(jsonParms);
  }
  veiwItem() {
    this.http.get("/apiseller/item/listItems" + "/" + this.sellerId).subscribe(val => {
      const arr = [];
      const itemList = val["key"];
      for (var i in itemList) {
        // alert(JSON.stringify(itemList[i]));
        arr.push(itemList[i]);
        // for (var j in itemList[i]) {
          // alert(itemList[i][j]);
        // }
      }
      this.itemList = arr;
    },
      error => {
        this.router.navigateByUrl("errPage");
      }
    );
  }

  reports(value: any) {

  }
}
