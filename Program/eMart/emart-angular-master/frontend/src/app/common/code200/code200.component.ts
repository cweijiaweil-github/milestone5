import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-code200',
  templateUrl: './code200.component.html',
  styleUrls: ['./code200.component.css']
})
export class Code200Component implements OnInit {

  public param: any;
  constructor(public router: Router,private routerParams: ActivatedRoute) {
    this.param = this.routerParams.snapshot.paramMap.get('param') 
  }

  ngOnInit(): void {
  }

}
