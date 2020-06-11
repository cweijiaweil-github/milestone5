import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { EqualValidator } from './equal-validator.directive';
import { BuyerComponent } from './signup/buyer/buyer.component';
import { SellerComponent } from './signup/seller/seller.component';
import { BuyerMasterComponent } from './buyer-master/buyer-master.component';
import { SellerMasterComponent } from './seller-master/seller-master.component';
import { Code404Component } from './common/code404/code404.component';
import { LoginService } from './services/login.service';
import { SuccPageComponent } from './signup/succPage/succ-page/succ-page.component';
import { Code505Component } from './common/code505/code505.component';
import { Code200Component } from './common/code200/code200.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    EqualValidator,
    BuyerComponent,
    SellerComponent,
    BuyerMasterComponent,
    SellerMasterComponent,
    Code404Component,
    SuccPageComponent,
    Code505Component,
    Code200Component,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
