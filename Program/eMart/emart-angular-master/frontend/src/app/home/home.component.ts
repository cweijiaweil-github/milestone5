import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public userCheck:string;
  public emartcolor:string;

  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit(): void {
    this.emartcolor = "#fff";
    this.userCheck = this.routeInfo.snapshot.params["diff"];

  }
  
}
