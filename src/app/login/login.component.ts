import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Output, Input, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { UserLogin } from './user';

import { Router, ActivatedRoute } from '@angular/router';
import {AlertService, AuthenticationService } from '../_services/index';
//import { AuthenticationService } from '../_services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  ngOnInit() {

  };

  //@Input() xsrf_token: string;
  @Output() log_signal = new EventEmitter();
  model = new UserLogin("", "", "", "");
  location: Location;

  submitted = false;
  login_result: any;

  err_tip: string = ' ';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private authenticationService: AuthenticationService) { }

  login(f: NgForm) {
    this.authenticationService.login(this.model._username, this.model._password)
      .subscribe(
      data => {
        //this.router.navigate([this.returnUrl]);
        console.log('login successfull');
        this.router.navigate(['main/bookM_shopM_dataTable']);
      },
      error => {
        console.log(error)
        this.alertService.error(error);
        this.err();
        //this.loading = false;
      });
  }
  clickReg() {
    this.log_signal.emit("logged");
    console.log("logged in");
  };

  public alerts: any = [];
  //  {
  //    type: 'success',
  //    msg: `You successfully read this important alert message.`
  //  },
  //  {
  //    type: 'info',
  //    msg: `This alert needs your attention, but it's not super important.`
  //  },
  //  {
  //    type: 'danger',
  //    msg: `Better check yourself, you're not looking too good.`
  //  }
  //];
 //
  //public reset(): void {
  //  this.alerts = this.alerts.map((alert: any) => Object.assign({}, alert));
  //}
  public err(): void {
    console.log('xxxxxx');
    this.err_tip = '用户名或密码错误';
    this.alerts = [];
    //this.alerts = [
    //  {
    //    type: 'danger',
    //    msg: `登录失败, 用户名或密码错误`,
    //    timeout: 3000
    //  }
    //  ];

    //this.alerts = this.alerts.map((alert: any) => Object.assign({}, alert)); //不用处理, 否则出现闪动
  }

  public focus() {
    this.err_tip = ' ';
    console.log('focus...')
  }
}
