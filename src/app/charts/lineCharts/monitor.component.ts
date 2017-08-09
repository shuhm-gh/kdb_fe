import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../dashboard/nav.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgClass } from '@angular/common';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { TableData } from '../../dashboard/table-data-alart';

import * as moment from 'moment';

@Component({
  selector: 'app-charts',
  templateUrl: './monitor.component.html',
})
export class MonitorComponent implements OnInit {
  date: any;
  constructor(
    private parent: NavComponent,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.date = new Date().getDate();;
    this.date = moment(new Date()).format('YYYY/MM/DD');
  }

  ngOnInit() {
    this.parent.setActiveByPath("charts", this.parent.monitor);
  };

  public category_list: Array<any> = [
    { 'id': '办公软件', 'text': '办公软件' },
    { 'id': '图形图象/视频', 'text': '图形图象/视频' },
    { 'id': '编程语言与程序设计', 'text': '编程语言与程序设计' },
    { 'id': '数据库/算法', 'text': '数据库/算法' },
    { 'id': '操作系统/移动开发', 'text': '操作系统/移动开发' },
    { 'id': '网站设计/网络技术', 'text': '网站设计/网络技术' },
    { 'id': 'AutoCAD/辅助设计', 'text': 'AutoCAD/辅助设计' },
    { 'id': '硬件/维护', 'text': '硬件/维护' },
    { 'id': '计算机理论', 'text': '计算机理论' },
    { 'id': 'IT人文', 'text': 'IT人文' },
  ];
  test_value = []; //TableData;
  test_label = [
    { title: '店铺', name: 'shop', sort: '' },
    { title: '书目', name: 'price', sort: 'asc' },
    { title: '公式', name: 'discount', sort: 'asc' },
    { title: '类型', name: 'sale', sort: 'asc' },
    { title: '值', name: 'comment', sort: 'asc' },
    { title: '日期', name: 'inv', sort: 'asc' }
  ];
  public period_list: Array<any> = [
    { 'id': '3d', 'text': '3天' },
    { 'id': '1w', 'text': '1周' },
    { 'id': '2w', 'text': '2周' },
    { 'id': '1m', 'text': '1月' },
  ];
  public formula_list: Array<any> = [
    { 'id': '1', 'text': '公式一' },
    { 'id': '2', 'text': '公式二' },
    { 'id': '3', 'text': '公式三' },
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
