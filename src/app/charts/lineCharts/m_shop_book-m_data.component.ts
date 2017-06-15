import { Component, OnInit, ChangeDetectorRef, ApplicationRef, NgZone } from '@angular/core';
import { NavComponent } from '../../dashboard/nav.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgClass } from '@angular/common';
import { Http, Headers, Response } from '@angular/http';

import { ChartsModule } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './m_shop_book-m_data.component.html',
})
export class M_shop_bookM_dataChartsComponent implements OnInit {

  constructor(
    private parent: NavComponent,
    private route: ActivatedRoute,
    private router: Router,
    private cdRef:ChangeDetectorRef,
    private appRef:ApplicationRef,
    private zone:NgZone,
    private http: Http
  ) { }

  public get_data() {
    return this.http.post('http://kylin-ux.com:8888/api/query_mshopbook_data', JSON.stringify({}))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let data = response.json();
                console.log(data);
                for (let i = 0; i<data.data.length; i++) {
                  let _data = data.data[i].val;
                  let _lable = data.data[i].date;
                  this.lineChartDataArray.push(_data);
                  this.lineChartLabelArray.push(_lable);
                }

            }).toPromise();
  }
  ngOnInit() {
    console.log('init');
    this.get_data().then();
    console.log('after get data');
    this.parent.setActiveByPath("charts", this.parent.m_shop_bookM_dataCharts);
  };


  // lineChart
  public lineChartData: any = [{ data: [65, 59, 80, 81, 56, 55, 40, 12, 45, 70, 88, 10, 22, 81, 56, 55, 40, 12, 45, 70, 40, 12, 45, 70, 88, 10, 22, 43, 150, 22], label: 'Series A' }];
  public lineChartDataArray: Array<any> = [];

  public shop_select: string;
  public book_select: string;
  public datatype: string="售价";
  public template: string="模板一";

  public lineChartLabelArray: Array<any> = [];
  public lineChartOptions: any = {
    animation: false,
    responsive: true,
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
    this.lineChartDataArray = []
    for  (let i = 0; i < this.tags.length; i++) {
      let lineChartData = this.lineChartData;
      let _lineChartData: Array<any> = new Array(lineChartData.length);
      for (let i = 0; i < lineChartData.length; i++) {
        _lineChartData[i] = { data: new Array(lineChartData[i].data.length), label: lineChartData[i].label };
        for (let j = 0; j < lineChartData[i].data.length; j++) {
          _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
        }
      }
      this.lineChartDataArray.push( _lineChartData);
    }

    this.lineChartLabelArray = [];

    for (let o = 0; o < this.lineChartDataArray.length; o++) {
      let _label = [];
      for (let i = 0; i < this.lineChartData[0].data.length; i++) {
        _label.push(i+1);
      }
      this.lineChartLabelArray.push(_label);
    }
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  

  public items:Array<string> = ['人民邮电出版社官方旗舰店', '新华文轩', '当当网'];
  public items_book:Array<string> = ['软件工程', '操作系统', '计算机网络'];
  public tags: Array<string> = [];
  public items_added_show: Array<string> = [];
  public items_added: Array<string> = [];
  public item:string;

  public add(): void {
    this.items_added.push(this.shop_select['text'] + '###' + this.book_select['text']);
    this.tags.push(this.shop_select['text'] + '###' + this.book_select['text']);
    console.log(this.items_added);
    console.log(this.datatype);
    //

  }

  public refresh_selected() {
    this.items_added_show = this.items_added;
    console.log(this.items_added_show);
    //this.appRef.tick();
    //this.cdRef.detectChanges();
    this.zone.run(() => {
            console.log('enabled time travel');
        });
  }
  
  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;
 
  private disabledV():string {
    return this._disabledV;
  }
  //private get disabledV():string {
  //  return this._disabledV;
  //}
 
  //private set disabledV(value:string) {
  //  this._disabledV = value;
  //  this.disabled = this._disabledV === '1';
  //}
 
  public selected_shop(value:any):void {
    this.shop_select = value;
    //console.log('Selected value is: ', value);
    console.log('Selected value is: ', this.shop_select);
  }

  public selected_book(value:any):void {
    this.book_select = value;
    console.log('Selected value is: ', value);
  }
 
  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }
 
  public typed(value:any):void {
    console.log('New search input: ', value);
  }
 
  public refreshValue(value:any):void {
    this.value = value;
    console.log('refreshValue: ', this.value);
  }

  public load_template(value:any):void {
    console.log(this.template);
    console.log(value);
  }
}
