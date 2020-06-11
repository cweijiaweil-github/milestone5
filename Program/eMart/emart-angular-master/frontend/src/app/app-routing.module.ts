import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Code404Component } from './common/code404/code404.component';
import { LoginGuard } from './guard/login/loginGuard';
import { SuccPageComponent } from './signup/succPage/succ-page/succ-page.component';
import { Code505Component } from './common/code505/code505.component';
import { Code200Component } from './common/code200/code200.component';

const routes: Routes = [
  {path:"",redirectTo:"/login",pathMatch: "full"},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"succPage",component:SuccPageComponent},
  {path:"errPage",component:Code505Component},
  {path:"code200Page/:param",component:Code200Component},
  // {path:"home/:diff",component:HomeComponent,canActivate: [LoginGuard]},
  {path:"home/:diff",component:HomeComponent},
  // diff=== buyer or seller 
  {path:"**",component:Code404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[LoginGuard]
})
export class AppRoutingModule { }
