import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../dashboard/nav.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgClass } from '@angular/common';

import * as moment from 'moment';

import { DatepickerModule } from 'ng2-bootstrap';
import { filter } from "rxjs/operator/filter";

import { TableData } from '../../dashboard/table-data';

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
  ) {
    this.test_value = TableData;
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

  ngOnInit() {
    this.parent.setActiveByPath("charts", this.parent.bookM_shopM_dataTable);
  };

  public template_list: Array<any> = [{ 'id': 'xxx', 'text': 'xxx' }];
  public period: Array<any> = [
    { 'id': '3d', 'text': '3天' },
    { 'id': '1w', 'text': '1周' },
    { 'id': '2w', 'text': '2周' },
    { 'id': '1m', 'text': '1月' },
    ];
  public book_list: Array<any> = [{ 'id': 'xxx', 'text': '人民邮电出版社官方旗舰店' }];

  public data: Array<any> = [
    ['人邮', 59, 80, 81, 56, 55, 40],
    ['当当', 48, 40, 19, 86, 27, 90],
    ['机械', 48, 77, 9, 100, 27, 40]
  ];

  public test_label: Array<any>;
  public test_value: Array<any> = TableData;
  public columns: Array<any> = ['店铺', '售价', '折扣', '销量', '评论数', '直通车投入'];
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };
  public value;
  public period_select;
  public book_select;

  query() {
    console.log('query data');
  }

  public refreshPeriod(value:any):void {
    this.value = value;
    console.log('refreshValue: ', this.value);
  }

  public selected_period(value:any):void {
    this.period_select = value;
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