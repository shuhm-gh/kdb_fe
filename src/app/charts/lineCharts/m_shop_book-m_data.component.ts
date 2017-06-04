import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../dashboard/nav.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgClass } from '@angular/common';

import { ChartsModule } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './m_shop_book-m_data.component.html',
})
export class M_shop_bookM_dataChartsComponent implements OnInit {

  constructor(
    private parent: NavComponent,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.parent.setActiveByPath("charts", this.parent.m_shop_bookM_dataCharts);
  };


  // lineChart
  public lineChartDataArray: Array<any> = [
    [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
      { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
    ],
    [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series D' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series E' },
      { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series F' }
    ],
    [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series G' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series H' },
      { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series I' }
    ],

  ];

  public lineChartData1: Array<any> = [
    {data:[], label:''}
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    animation: false,
    responsive: true,
    hide: true
  };
  public lineChartColours: Array<any> = [
    { // green
      backgroundColor: 'rgba(202,252,209,0.2)',
      borderColor: 'rgba(90,202,106,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // gre
      backgroundColor: 'rgba(168,226,178,0.2)',
      borderColor: 'rgba(5,124,22,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  public randomize(): void {
    for  (let i = 0; i < this.lineChartDataArray.length; i++) {
      let lineChartData = this.lineChartDataArray[i];
      let _lineChartData: Array<any> = new Array(lineChartData.length);
      for (let i = 0; i < lineChartData.length; i++) {
        _lineChartData[i] = { data: new Array(lineChartData[i].data.length), label: lineChartData[i].label };
        for (let j = 0; j < lineChartData[i].data.length; j++) {
          _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
        }
      }
      this.lineChartDataArray[i] = _lineChartData;
    }
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
