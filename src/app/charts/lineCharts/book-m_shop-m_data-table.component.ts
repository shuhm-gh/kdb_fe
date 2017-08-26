import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../dashboard/nav.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgClass } from '@angular/common';

import { Http, Headers, Response } from '@angular/http';

import * as moment from 'moment';

import { DatepickerModule } from 'ng2-bootstrap';
import { filter } from "rxjs/operator/filter";

import { TableData } from '../../dashboard/table-data';

import * as globals from '../../_services/globals';
import { TableDemoComponent } from '../../dashboard/table';

@Component({
  selector: 'app-charts',
  templateUrl: './book-m_shop-m_data-table.component.html',
})
export class BookM_shopM_dataTableComponent implements OnInit {
  date: any;
  constructor(
    private parent: NavComponent,
    private route: ActivatedRoute,
    private router: Router,
    private http: Http,
  ) {
    this.test_value = []; // = TableData;
    this.test_label = [
      {title:'店铺', name:'shop', sort: ''},
      {title:'售价', name:'price', sort: 'asc'}, 
      {title:'折扣', name:'discount', sort: 'asc'}, 
      {title:'销量', name:'sale', sort: 'asc'},
      {title:'评论数', name:'comment', sort: 'asc'}, 
      {title:'直通车投入', name:'inv', sort: 'asc'}
      ];
    this.date = new Date().getDate();;
    this.date = moment(new Date()).format('YYYY/MM/DD');
    console.log(this.date);
  }

  public get_data() {
    return this.http.post(globals.api_base_url+'/api/query_book_mshop_init_data', JSON.stringify({}), { withCredentials: true })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let res = response.json();
                console.log(res);
                this.book_list = res.book_list;
                this.test_value = res.data;
            }).toPromise();
  }

  public query() {
    if (!this.book_select || !this.period_select) {
      return;
    }
    return this.http.post(globals.api_base_url+'/api/query_book_mshop_data', JSON.stringify({'book':this.book_select, 'period':this.period_select.days}), { withCredentials: true })
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
    this.parent.setActiveByPath("charts", this.parent.bookM_shopM_dataTable);
  };

  public template_list: Array<any> = [{ 'id': 'xxx', 'text': 'xxx' }];
  public period: Array<any> = [
    { 'id': '1', 'text': '今天' },
    { 'id': '3', 'text': '3天' },
    { 'id': '7', 'text': '1周' },
    { 'id': '14', 'text': '2周' },
    { 'id': '30', 'text': '1月' },
    ];
  public book_list: Array<any> = [{ 'id': '9787115394392', 'text': 'Python参考手册(第4版·修订版)' }];

  public data: Array<any> = [
    ['人邮', 59, 80, 81, 56, 55, 40],
    ['当当', 48, 40, 19, 86, 27, 90],
    ['机械', 48, 77, 9, 100, 27, 40]
  ];

  public test_label: Array<any>;
  public test_value: Array<any>; // = TableData;
  public columns: Array<any> = ['店铺', '售价', '折扣', '销量', '评论数', '直通车投入'];
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };
  public value;
  public period_select;
  public book_select;


  public refreshPeriod(value:any):void {
    this.value = value;
    console.log('refreshValue: ', this.value);
  }

  public selected_period(value:any):void {
    this.period_select = value;
    this.period_select.days = value.id;
    console.log('Selected value is: ', value);
  }

  public refreshValueBook(value:any):void {
    this.value = value;
    console.log('refreshValue: ', this.value);
  }

  public selected_book(value:any):void {
    this.book_select = value;
    console.log('Selected value is: ', value);
  }}