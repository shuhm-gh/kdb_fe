import { Component, OnInit } from '@angular/core';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private authenticationService: AuthenticationService) { }
  onSubmit(f: NgForm) {

    this.authenticationService.login(this.model._username, this.model._password)
      .subscribe(
      data => {
        //this.router.navigate([this.returnUrl]);
        this.router.navigate(['main/bookM_shopM_dataTable']);
      },
      error => {
        console.log(error)
        this.alertService.error(error);
        //this.loading = false;
      });
  }
  clickReg() {
    this.log_signal.emit("logged");
    console.log("logged in");
  };

}
