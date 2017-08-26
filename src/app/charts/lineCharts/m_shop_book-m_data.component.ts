import { Component, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef, ApplicationRef, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavComponent } from '../../dashboard/nav.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgClass } from '@angular/common';
import { Http, Headers, Response } from '@angular/http';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SelectComponent } from 'ng2-select';

import * as globals from '../../_services/globals'

var first = true;

@Component({
  selector: 'app-charts',
  templateUrl: './m_shop_book-m_data.component.html',
  encapsulation: ViewEncapsulation.None  // Enable dynamic HTML styles
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

  @ViewChild('select')
  public select: SelectComponent;

  //@ViewChild('select_book')
  //public select_book: SelectComponent;

  public get_data() {
    return this.http.post(globals.api_base_url+'/api/query_mshopbook_init_data', JSON.stringify({}), { withCredentials: true })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let res = response.json();
                console.log(res);

                //类型
                this.datatype = res.data.type;
                //let _tags: Array<string>;

                // 曲线图数据
                for (let i = 0; i<res.data.data.length; i++) {
                  let _item = res.data.data[i];
                  let _data: Array<any> = [{data:[], label:''}];
                  _data[0].data = _item.value;

                  //label, 店铺#书目
                  //todo
                  _data[0].label = this.datatype;

                  //tag
                  this.tag_list.push({'shop':_item.shop, 'book':_item.book});
                  this.tag_list_v.push(_item['shop']['text'] + '#' + _item['book']['text']);

                  this.lineChartDataArray.push(_data);
                  
                  let _x = _item.date;
                  this.lineChartLabelArray.push(_x);
                }
                this.tag_list_v_bk = this.tag_list_v;

                //datatype
                this.datatype_list = res.datatype_list

                //template
                this.template_list = res.template_list;

                //shop
                this.shop_book_list = res.shop_book_list

                //book
                //let _book_list: Array<any> = []
                //for (let i = 0; i < res.book_list.length; i++) {
                //  let _book = res.book_list[i];
                //  _book_list.push({id:1+i, text:_book.name});
                //}
                //this.book_list = _book_list;

                console.log('+++');
                //console.log(this.shop_book_list);
                //console.log(this.book_list);
                //console.log(this.datatype_list);
                //console.log(this.template_list);
                console.log(this.tag_list_v);
                console.log('+++');
            }).toPromise();
  }

  public query() {
    return this.http.post(globals.api_base_url+'/api/query_mshopbook_data', JSON.stringify({'type':this.datatype, 'data':this.tag_list, 'period':this.period_select.days}), { withCredentials: true })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let res = response.json();
                console.log(res);

                // 曲线图数据
                this.lineChartDataArray = [];
                this.lineChartLabelArray = [];
                for (let i = 0; i<res.data.length; i++) {
                  let _item = res.data[i];
                  let _data: Array<any> = [{data:[], label:''}];

                  console.log('query: ', _item, this.datatype);
                  _data[0].data = _item.value;
                  _data[0].label = this.datatype;

                  let _lable = _item.date;
                  this.lineChartDataArray.push(_data);
                  this.lineChartLabelArray.push(_lable);
                }
              }
          ).toPromise();
  }

  public save_template() {
    //for this.tags
    //for this.book_list
    let _data = [];
    for (let i = 0; i < this.template_list.length; i++) {
      let _template = this.template_list[i];
      if (_template.text == this.template_name) {
        console.log('name existed ', this.template_name);
        return;
      }
    }

    this.template = {
      'id': this.template_name,
      'text': this.template_name,
      //'type': this.datatype,
      'data': this.tag_list
    }
    return this.http.post(globals.api_base_url+'/api/save_template', JSON.stringify(this.template), { withCredentials: true })
    //return this.http.post('http://localhost:8888/api/save_template', JSON.stringify(this.template))
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let res = response.json();
        console.log(res);

        if ('id' in res) {
          this.template.id = res.id;
          this.template_list.push(this.template);
          console.log('add new template', this.template_list, this.template);
          this.select.items = this.template_list; //must
          //this.template_name_list.push(this.templ_name);

          //this.template_list
          //let _shop_book = [];
          //shop_list
          //let _template = {name:this.templ_name, shop_book:[{}]}
        }
        else {
          console.log('something wrong');
        }

      }
      ).toPromise();
  }


  ngOnInit() {
    console.log('init', first);
    if (first) {
      this.get_data().then();
      //first = false;
    }
    console.log('after get data');
    console.log(this.book_list);
    


    this.parent.setActiveByPath("charts", this.parent.m_shop_bookM_dataCharts);
  };


  // lineChart
  public lineChartData: any = [{ data: [65, 59, 80, 81, 56, 55, 40, 12, 45, 70, 88, 10, 22, 81, 56, 55, 40, 12, 45, 70, 40, 12, 45, 70, 88, 10, 22, 43, 150, 22], label: 'Series A' }];
  public lineChartDataArray: Array<any> = [];
  public datatype_list: Array<string> = [];
  //public template_name_list: Array<string> = [];
  public template_list: Array<any>;
  

  public shop_select: any;
  public book_select: any;
  public isbn: string = 'this is isbn';

  public datatype: string="售价";
  public template: any;
  public template_name: string;

  public shop_book_list:Array<any> = [];
  public book_list:Array<any> = []; //选中shop时, 赋值
  public tag_list: Array<any> = [];
  public tag_list_v: Array<string> = [];
  public tag_list_v_bk: Array<string> = [];
  public items_added_show: Array<string> = [];
  public items_added: Array<any> = [];
  public item:string;

  public lineChartLabelArray: Array<any> = [];
  public lineChartOptions: any = {
    animation: false,
    responsive: true,
  };
  public period_select = {'days':7};
  public period: Array<any> = [
    { 'id': '1', 'text': '今天' },
    { 'id': '3', 'text': '3天' },
    { 'id': '7', 'text': '1周' },
    { 'id': '14', 'text': '2周' },
    { 'id': '30', 'text': '1月' },
    ];

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



  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


  // ***** tag *****
  // [{{shop:{id:xxx, text:xxx}, book:{id:xxx, text:xxx}}, {},]
  public transformer(item:any): string {
    console.log('++++++++++', item)
    return item.shop.text + '#' + item.book.text;
  }

  public add(): void {
    // todo 判断重复
    if (!this.shop_select || !this.book_select) {
      console.log('shop or book is empty');
      return;
    }

    let _tag_name = this.shop_select['text'] + '#' + this.book_select['text'];
    if (this.tag_list_v.indexOf(_tag_name) >= 0) {
      console.log('added ', _tag_name);
      return;
    }

    this.tag_list.push({'shop':this.shop_select, 'book':this.book_select});
    console.log(this.tag_list);
    //this.items_added.push({'shop':this.shop_select['text'], 'book':this.book_select['text'], 'isbn':''});
    this.tag_list_v.push(_tag_name);
    this.tag_list_v_bk = this.tag_list_v;
    //console.log(this.items_added);
    //console.log(this.datatype);
    //

  }

  public clear(): void {
    this.tag_list = [];
    this.tag_list_v = [];
    this.tag_list_v_bk = [];
    //this.items_added = [];
  }

  public remove(tag: any): void {
    console.log('on remove' + tag);
    //delete tag
    let index: number = this.tag_list_v_bk.indexOf(tag);
    console.log('on remove ', index, this.tag_list_v);
    if (index !== -1) {
      console.log('on remove ', index);
      console.log(this.tag_list);
      this.tag_list.splice(index, 1);
      //this.tag_list_v.splice(index, 1);
      console.log(this.tag_list);
    }

    let _index = tag.indexOf('###');
    let _shop = tag.substring(0, _index);
    let _book = tag.substring(_index + 3, );
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
  //update book list
  public selected_shop(value:any):void {
    this.shop_select = value;
    //console.log('Selected value is: ', value);
    console.log('Selected value is: ', this.shop_select);
    // update book list
    this.shop_book_list.forEach(element => {
      if (element.id == value.id) {
        this.book_list = element.data;
      }
    });
    
    //this.select_book.items = this.book_list;
  }

  public selected_book(value:any):void {
    this.book_select = value;
    console.log('Selected value is: ', value);
  }

  public selected_datatype(value:any):void {
    this.datatype = value.id;
    console.log('Selected value is: ', value);
  }

  public selected_period(value:any):void {
    this.period_select = value;
    this.period_select.days = value.id;
    console.log('Selected value is: ', value);
  }

  // template {'id':xxx, 'text':xxx}
  public selected_template(value:any):void {
    this.template = value;
    console.log('Selected value is: ', value);
    // update tags
    console.log('this.template_list: ', this.template_list);
    for (let i=0; i<this.template_list.length; i++) {
      let _template = this.template_list[i];
      console.log(_template);
      if (value.text == _template.text) {
        this.tag_list = [];
        this.tag_list_v = [];
        //this.datatype = _template.type;
        for (let j=0; j<_template.data.length; j++) {
          let _item = _template.data[j];
          console.log('_item:', _item);
          this.tag_list.push({'shop':_item.shop, 'book':_item.book});
          this.tag_list_v.push(_item['shop']['text'] + '#' + _item['book']['text']);
        }
        this.tag_list_v_bk = this.tag_list_v;
      }
    }
  }
 
  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }
 
  public typed(value:any):void {
    console.log('New search input: ', value);
  }
 
  public refreshValueShop(value:any):void {
    this.value = value;
    console.log('refreshValue: ', this.value);
  }

  public refreshValueBook(value:any):void {
    this.value = value;
    console.log('refreshValue: ', this.value);
  }

  public refreshValueDatatype(value:any):void {
    this.value = value;
    console.log('refreshValue: ', this.value);
  }

  public refreshValueTemplate(value:any):void {
    this.value = value;
    console.log('refreshValue: ', this.value);
  }

  public load_template(value:any):void {
    console.log(this.template);
    console.log(value);
  }

  //this.tags: Array<string>;
  //public randomize(): void {
  //  this.lineChartDataArray = []
  //  for  (let i = 0; i < this.tags.length; i++) {
  //    let lineChartData = this.lineChartData;
  //    let _lineChartData: Array<any> = new Array(lineChartData.length);
  //    for (let i = 0; i < lineChartData.length; i++) {
  //      _lineChartData[i] = { data: new Array(lineChartData[i].data.length), label: lineChartData[i].label };
  //      for (let j = 0; j < lineChartData[i].data.length; j++) {
  //        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
  //      }
  //    }
  //    this.lineChartDataArray.push( _lineChartData);
  //  }
//
  //  this.lineChartLabelArray = [];
//
  //  for (let o = 0; o < this.lineChartDataArray.length; o++) {
  //    let _label = [];
  //    for (let i = 0; i < this.lineChartData[0].data.length; i++) {
  //      _label.push(i+1);
  //    }
  //    this.lineChartLabelArray.push(_label);
  //  }
  //}
}