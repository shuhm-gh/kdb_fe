import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../dashboard/nav.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgClass } from '@angular/common';
import { Http, Headers, Response } from '@angular/http';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { TableData } from '../../dashboard/table-data-alart';

import * as moment from 'moment';

import * as globals from '../../_services/globals';

@Component({
  selector: 'app-charts',
  templateUrl: './monitor.component.html',
})
export class MonitorComponent implements OnInit {
  date: any;
  constructor(
    private parent: NavComponent,
    private route: ActivatedRoute,
    private router: Router,
    private http: Http
  ) {
    this.date = new Date().getDate();;
    this.date = moment(new Date()).format('YYYY/MM/DD');
  }

  public get_data() {
    return this.http.post(globals.api_base_url+'/api/query_concerned_init_data', JSON.stringify({}), { withCredentials: true })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let res = response.json();
                console.log(res);
                this.category_list = res.category_list;
                this.formula_list = res.formula_list;
            }).toPromise();
  }

  public query() {
    if (!this.category || !this.formula) {
      return;
    }
    return this.http.post(globals.api_base_url+'/api/query_concerned_data', JSON.stringify({'category':this.category, 'formula':this.formula.id}), { withCredentials: true })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let res = response.json();
                console.log(res, 'xxx');

                // 曲线图数据
                this.test_value = res.data; //.slice();
                //table.data = res.data;
              }
          ).toPromise();
  }

  ngOnInit() {
    this.get_data().then();
    this.parent.setActiveByPath("charts", this.parent.monitor);
  };

  public category;
  public period;
  public formula;
  public value;

  public category_list: Array<any> = [];
  //[
  //  { 'id': '办公软件', 'text': '办公软件' },
  //  { 'id': '图形图象/视频', 'text': '图形图象/视频' },
  //  { 'id': '编程语言与程序设计', 'text': '编程语言与程序设计' },
  //  { 'id': '数据库/算法', 'text': '数据库/算法' },
  //  { 'id': '操作系统/移动开发', 'text': '操作系统/移动开发' },
  //  { 'id': '网站设计/网络技术', 'text': '网站设计/网络技术' },
  //  { 'id': 'AutoCAD/辅助设计', 'text': 'AutoCAD/辅助设计' },
  //  { 'id': '硬件/维护', 'text': '硬件/维护' },
  //  { 'id': '计算机理论', 'text': '计算机理论' },
  //  { 'id': 'IT人文', 'text': 'IT人文' },
  //];
  test_value = []; //TableData;
  test_label = [
    { title: '店铺', name: 'shop', sort: '' },
    { title: '书目', name: 'book', sort: 'asc' },
    { title: '类型', name: 'datatype', sort: 'asc' },
    { title: '值', name: 'value', sort: 'asc' },
    { title: '公式', name: 'formula', sort: 'asc' },
    { title: '日期', name: 'date', sort: 'asc' }
  ];

  public period_list: Array<any> = [
    { 'id': '1', 'text': '今天' },
    { 'id': '3', 'text': '3天' },
    { 'id': '7', 'text': '1周' },
    { 'id': '14', 'text': '2周' },
    { 'id': '30', 'text': '1月' },
    ];

  public formula_list: Array<any> = [];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


  public refreshPeriod(value:any):void {
    this.value = value;
    console.log('refreshValue: ', this.value);
  }

  public selected_period(value:any):void {
    this.period = value;
    this.period.days = value.id;
    console.log('Selected value is: ', value);
  }

  public refreshValueCate(value:any):void {
    this.value = value;
    console.log('refreshValue: ', this.value);
  }

  public selected_category(value:any):void {
    this.category = value;
    console.log('Selected value is: ', value);
  }

  public refreshValueFormula(value:any):void {
    this.value = value;
    console.log('refreshValue: ', this.value);
  }

  public selected_formula(value:any):void {
    this.formula = value;
    console.log('Selected value is: ', value);
  }

}
