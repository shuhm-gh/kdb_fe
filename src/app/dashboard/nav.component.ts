import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {AlertService, AuthenticationService } from '../_services/index';

@Component({
  selector: 'app-charts',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  para = '';

  public bookM_shopM_dataTable = "";
  public m_shop_bookM_dataCharts = "";
  public shop_bookM_dataCharts = "";
  public monitor = "";
  public setting = "";
  //public pieCharts = "";
  //public dashboard = "";
  //public datatable = "";
  //public bootstrap = "";
  //public plugin = "";

  routers = [];



  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.para = params['id'];
    });

    this.bookM_shopM_dataTable = "/main/bookM_shopM_dataTable";
    this.m_shop_bookM_dataCharts = "/main/m_shop_bookM_dataCharts";
    //this.shop_bookM_dataCharts = "/main/shop_bookM_dataCharts";
    this.monitor = "/main/monitor";
    this.setting = "/main/setting";
    //this.pieCharts = "/main/"+this.para+"/pieCharts";
    //this.dashboard = "/main/"+this.para+"/dashboard";
    //this.datatable = "/main/"+this.para+"/datatable";
    //this.bootstrap = "/main/"+this.para+"/bootstrap-static";
    //this.plugin = "/main/"+this.para+"/bootstrap-plugin";

    this.routers = [
      //{
      //  href: this.dashboard,
      //  name: "Dashboard",
      //  type: false
      //},
      {
        //href: 'charts',
        //name: "Charts",
        type: false,
        href: this.bookM_shopM_dataTable, name: "单品销售情况查询"
        //child: [
        //  {href: this.lineCharts, name: "Line Charts"},
        //  {href: this.pieCharts, name: "Pie Charts"}
        //]
      },
      {
        //href: 'charts',
        //name: "Charts",
        type: false,
        href: this.m_shop_bookM_dataCharts, name: "竞品情况比较"
        //child: [
        //  {href: this.lineCharts, name: "Line Charts"},
        //  {href: this.pieCharts, name: "Pie Charts"}
        //]
      },
      //{
      //  type: false,
      //  href: this.shop_bookM_dataCharts, name: "单品销售情况查询"
      //},
      {
        //href: 'charts',
        //name: "Charts",
        type: false,
        href: this.monitor, name: "特殊表现监控"
        //child: [
        //  {href: this.lineCharts, name: "Line Charts"},
        //  {href: this.pieCharts, name: "Pie Charts"}
        //]
      },
      {
        //href: 'charts',
        //name: "Charts",
        type: false,
        href: this.setting, name: "设置"
        //child: [
        //  {href: this.lineCharts, name: "Line Charts"},
        //  {href: this.pieCharts, name: "Pie Charts"}
        //]
      },
      //{
      //  href: 'tables',
      //  name: "Tables",
      //  type: true,
      //  child: [
      //    {href: this.datatable, name: "Data Tables"}
      //  ]
      //},
      //{
      //  href: 'bootstrap',
      //  name: "Bootstrap",
      //  type: true,
      //  child: [
      //    {href: this.bootstrap, name: "Static Components"},
      //    {href: this.plugin, name: "Plugin Components"}
      //  ]
      //}

    ];

  };

  setActiveByPath = function (path, childPath) {
    for (var i = 0; i < this.routers.length; i++) {
      if (this.routers[i].active) {
        this.routers[i].active = false;
        break;
      }
    }
    for (var i = 0; i < this.routers.length; i++) {
      var router = this.routers[i];
      if (router.href == path) {
        if (!router.active) {
          router.active = true;
          if (childPath != "") {
            for (var j = 0; j < router.child.length; j++) {
              var route = router.child[j];
              if (route.href == childPath) {
                route.active = true;
              }
            }
          }
        } else {
          router.active = false;
        }
      }
    }
  };
  changeNavStatis = function (path) {
    for (var i = 0; i < this.routers.length; i++) {
      if (this.routers[i].active) {
        this.routers[i].active = false;
        break;
      }
    }
    for (var i = 0; i < this.routers.length; i++) {
      var router = this.routers[i];
      if (router.href == path) {
        router.active = true;
      }
    }
  };
  changeChildNavStatis = function (path, childPath) {
    for (var i = 0; i < this.routers.length; i++) {
      var router = this.routers[i];
      if (router.href == path) {

        for (var j = 0; j < router.child.length; j++) {
          var route = router.child[j];
          if (route.href != childPath) {
            route.active = false;
          } else {
            route.active = true;
          }
        }
      }

    }
  };
  getQueryString = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return r[2]; return null;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
