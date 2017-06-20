import { Component, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef, ApplicationRef, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavComponent } from '../../dashboard/nav.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgClass } from '@angular/common';
import { Http, Headers, Response } from '@angular/http';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SelectComponent } from 'ng2-select';

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

  public get_data() {
    return this.http.post('http://kylin-ux.com:8888/api/query_mshopbook_init_data', JSON.stringify({}))
    //return this.http.post('http://localhost:8888/api/query_mshopbook_init_data', JSON.stringify({}))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let data = response.json();
                console.log(data);
                //
                this.datatype = data.m_shop_book_data.type;
                //let _tags: Array<string>;

                // 曲线图数据
                for (let i = 0; i<data.m_shop_book_data.data.length; i++) {
                  let _item = data.m_shop_book_data.data[i];
                  let _data: Array<any> = [{data:[], label:''}];
                  _data[0].data = _item.val;
                  _data[0].label = this.datatype;

                  let _lable = _item.date;
                  this.tags.push(_item.shop + '#' + _item.book);
                  this.lineChartDataArray.push(_data);
                  this.lineChartLabelArray.push(_lable);
                }
                //this.tags = _tags;

                //datatype
                this.datatype_list = data.datatype_list

                //template
                let _template_name_list: Array<string>=[];
                this.template_list = data.template_list;
                for (let i = 0; i < data.template_list.length; i++) {
                  _template_name_list.push(data.template_list[i].name)
                }
                this.template_name_list = _template_name_list;

                //shop
                this.shop_list = data.shop_list

                //book
                let _book_list: Array<any> = []
                for (let i = 0; i < data.book_list.length; i++) {
                  let _book = data.book_list[i];
                  _book_list.push({id:1+i, text:_book.name});
                }
                this.book_list = _book_list;

                //console.log(this.shop_list);
                console.log(this.book_list);
                //console.log(this.datatype_list);
                //console.log(this.template_name_list);
            }).toPromise();
  }

  ngOnInit() {
    console.log('init');
    this.get_data().then();
    console.log('after get data');
    console.log(this.book_list);
    


    this.parent.setActiveByPath("charts", this.parent.m_shop_bookM_dataCharts);
  };


  // lineChart
  public lineChartData: any = [{ data: [65, 59, 80, 81, 56, 55, 40, 12, 45, 70, 88, 10, 22, 81, 56, 55, 40, 12, 45, 70, 40, 12, 45, 70, 88, 10, 22, 43, 150, 22], label: 'Series A' }];
  public lineChartDataArray: Array<any> = [];
  public datatype_list: Array<string> = [];
  public template_name_list: Array<string> = [];
  public template_list: Array<any>;

  public shop_select: string;
  public book_select: string;
  public isbn: string = 'this is isbn';
  public datatype: string="售价";
  public template: string="模板一";
  public templ_name: string;

  public shop_list:Array<string> = [];
  public book_list:Array<any> = [];
  public tags: Array<string> = [];
  public items_added_show: Array<string> = [];
  public items_added: Array<any> = [];
  public item:string;

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

  public query() {
    return this.http.post('http://kylin-ux.com:8888/api/query_mshopbook_data', JSON.stringify({}))
    //return this.http.post('http://localhost:8888/api/query_mshopbook_data', JSON.stringify({'type':this.datatype, 'data':this.tags}))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let data = response.json();
                console.log(data);

                // 曲线图数据
                this.lineChartDataArray = [];
                this.lineChartLabelArray = [];
                for (let i = 0; i<data.data.length; i++) {
                  let _item = data.data[i];
                  let _data: Array<any> = [{data:[], label:''}];
                  _data[0].data = _item.val;
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
    for (let i = 0; i < this.tags.length; i++) {

    }
    return this.http.post('http://kylin-ux.com:8888/api/save_template', JSON.stringify({
    //return this.http.post('http://localhost:8888/api/save_template', JSON.stringify({
      'name': this.templ_name,
      'type': this.datatype,
      'data': [
        {
          'shop': this.shop_select,
          'book': this.book_select,
          'isbn': this.isbn,
        }
        ]
    }))
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let data = response.json();
        console.log(data);

        if (data.res == true) {
          this.template_name_list.push(this.templ_name);
          console.log('add new template', this.template_name_list);
          this.select.items = this.template_name_list; //must
          //this.template_name_list.push(this.templ_name);

          //this.template_list
          let _shop_book = [];
          //shop_list
          let _template = {name:this.templ_name, shop_book:[{}]}
        }
        else {
          console.log('something wrong');
        }

      }
      ).toPromise();
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public add(): void {
    this.items_added.push({'shop':this.shop_select['text'], 'book':this.book_select['text'], 'isbn':''});
    this.tags.push(this.shop_select['text'] + '###' + this.book_select['text']);
    console.log(this.items_added);
    console.log(this.datatype);
    //

  }

  public clear(): void {
    this.tags = [];
    this.items_added = [];
  }

  public remove(tag: string): void {
    console.log('on remove' + tag);
    //delete tag
    let index: number = this.tags.indexOf(tag);
    if (index !== -1) {
        this.tags.splice(index, 1);
    }
    console.log(this.tags);

    let _index = tag.indexOf('###');
    let _shop = tag.substring(0, _index);
    let _book = tag.substring(_index + 3, );

    //delete item_added
    for (let i = 0; i < this.items_added.length; i++) {
      let _item = this.items_added[i];
      //if (_item['shop'] == _shop && _item['isbn'] == _isbn) {

      }
    //}
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
  }

  public selected_book(value:any):void {
    this.book_select = value;
    console.log('Selected value is: ', value);
  }

  public selected_datatype(value:any):void {
    this.datatype = value;
    console.log('Selected value is: ', value);
  }

  public selected_template(value:any):void {
    this.template = value;
    console.log('Selected value is: ', value);
    // update tags
    console.log(this.template_list);
    for (let i=0; i<this.template_list.length; i++) {
      let _template = this.template_list[i];
      console.log(_template);
      if (value.text == _template.name) {
        this.tags = [];
        this.datatype = _template.type;
        for (let j=0; j<_template.data.length; j++) {
          let _item = _template.data[j];
          console.log(_item);
          this.tags.push(_item.shop + '#' + _item.book)
        }
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
}
