import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { ViewCell } from 'ng2-smart-table';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';

//import { NotificationsService } from 'angular2-notifications'
//import {MaterializeAction} from 'angular2-materialize'
//import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';
//import { Ng2SmartTableModule } from 'ng2-smart-table';
//import { LocalDataSource } from 'ng2-smart-table';
import { AuthenticationService } from '../../_services/index';

import { NavComponent } from '../../dashboard/nav.component';
import * as globals from '../../_services/globals';


//@Component({
//  selector: 'button-view',
//  template: `
//    <button (click)="onClick()">{{ renderValue }}</button>
//  `,
//})
//export class ButtonViewComponent implements ViewCell, OnInit {
//  renderValue: string;
//
//  @Input() value: string | number;
//  @Input() rowData: any;
//
//  @Output() save: EventEmitter<any> = new EventEmitter();
//
//  ngOnInit() {
//    this.renderValue = this.value.toString().toUpperCase();
//    console.log('on init', this.renderValue, this.value, this.rowData);
//  }
//
//  onClick() {
//    this.save.emit(this.rowData);
//    console.log(this.value, this.rowData);
//  }
//}

/*Angular 2 Collapse Example*/
@Component({
  selector: 'app-charts',
  templateUrl: './setting.component.html',
})
export class SettingComponent {
  //collapse content
  public isCollapsedContent: boolean = false;
  public isCollapsedContent1: boolean = true;
  //collapse image (example)
  public isCollapsedImage: boolean = true;

  err_tip = '';

  current_user = '';
  password1 = '';
  user_null = {
    user: '',
    name: '',
    role: '',
    password: ''
  }
  user = this.user_null;

  role = '';
  value = '';

  op = 'l';
  btn_add = true;
  active_role = {
        'id': 'user',
        'text': '普通用户'
      };
  admin_role = {
    'id':'admin',
    'text':'管理员'
  }

  role_list = [
    {
      'id': 'admin',
      'text': '管理员'
    },
    {
      'id': 'user',
      'text': '普通用户'
    },
  ];

  public options = {
    position: ["bottom", "left"],
    timeOut: 5000,
    lastOnBottom: true
  }

  //settings = {
  //  //mode: 'external',
  //  //selectMode: 'multi',
  //  columns: {
  //    user: {
  //      title: '用户',
  //      //editable: false
  //    },
  //    name: {
  //      title: '姓名'
  //    },
  //    role: {
  //      title: '角色',
  //      type: 'html',
  //      editor: {
  //        type: 'list',
  //        config: {
  //          list: [{ title: '管理员', value: 'admin' }, { title: '普通用户', value: 'user' }]
  //        }
  //      },
  //      //editable: false
  //    },
  //    //password: {
  //    //  title: '密码',
  //    //  show: false
  //    //}
  //    
  //    //checkbox: {
  //    //  title: 'Re-Assiiiiign',
  //    //  type: 'html',
  //    //  valuePrepareFunction: (value) => { return this._sanitizer.bypassSecurityTrustHtml(this.input); },
////
  //    //  filter: false
  //    //},
//
  //    button: {
  //      title: 'Button',
  //      type: 'custom',
  //      renderComponent: ButtonViewComponent,
  //      onComponentInitFunction(instance) {
  //        instance.save.subscribe(row => {
  //          alert(`${row.name} saved!`)
  //        });
  //      }
  //    },
//
  //  },
  //  actions: {
  //    columnTitle: '操作',
  //  },
  //  add: {
  //    addButtonContent: '新建',
  //    createButtonContent: '创建',
  //    cancelButtonContent: '取消',
  //    confirmCreate: true,
  //    mode: 'external',
  //  },
  //  edit: {
  //    editButtonContent: '编辑',
  //    saveButtonContent: '更新',
  //    cancelButtonContent: '取消',
  //    confirmSave: true,
  //    mode: 'external',
  //  },
  //  delete: {
  //    deleteButtonContent: '删除',
  //    confirmDelete: true
  //  },
  //};
//
  ////user_list:Array<any> = [];
  //user_list = new LocalDataSource();
  //selectedEntry: { [key: string]: any } = {
  //  value: null,
  //  description: null
  //};
  user_list1 = [];
  //modalActions = new EventEmitter<string|MaterializeAction>();

  public input: string = '<input type="checkbox"></input>';

  constructor(private parent: NavComponent,
    private route: ActivatedRoute,
    private router: Router,
    private http: Http,
    private authenticationService: AuthenticationService,
    private _sanitizer: DomSanitizer,
    //private _service: NotificationsService,
  ) {
    //private toastyService:ToastyService, private toastyConfig: ToastyConfig) { 
        // Assign the selected theme name to the `theme` property of the instance of ToastyConfig. 
        // Possible values: default, bootstrap, material
    //    this.toastyConfig.theme = 'material';
  }

  ngOnInit() {
    this.op = 'a';

    //this.user_list = [
    //  {
    //      name: "测试",
    //      password: "111111",
    //      role: "user",
    //      user: "test"
    //    }
    //];

    // select the first one
    //if (this.user_list) {
    //  this.onSelectionChange(this.user_list[0]);
    //}
    this.query_user_list().then();
    this.current_user = this.authenticationService.get_current_user();
    //this.toast();
  }

  query_user_list() {
    return this.http.post(globals.api_base_url + '/api/query_user_list', JSON.stringify({}), { withCredentials: true })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let res = response.json();
        this.user_list1 = res.list;
        this.user_list1.map(user => {
          if (user.role == 'admin') {
            user.role = '管理员';
          }
          else {
            user.role = '普通用户';
          }
        });
        console.log(this.user_list1);
        //for (var i=0; i<res.list.length; i++) {
        //  res.list[i].button = '修改密码';
        //}
        //this.user_list.load(res.list);

        //var _user_list = this.user_list.getAll().then();
        //console.log(_user_list);
        //for (var user in _user_list) {
        //  console.log(user);
        //}
        //for (var i=0; i<this.user_list.data.length; i++) {
        //  if (this.user_list.data[i].user == this.current_user) {
        //    this.user = this.user_list.data[i];
        //  }
        //}
        //console.log(this.user_list);
      }).toPromise();
  }

  delete(user) {
    if (user == 'admin') {
      return;
    }
    if (window.confirm('确定删除该用户?')) {
      return this.http.post(globals.api_base_url + '/api/delete_user', JSON.stringify({ user: user }), { withCredentials: true })
        .map((response: Response) => {
          // login successful if there's a jwt token in the response
          let res = response.json();
          console.log('/api/delete_user', res);
          this.user_list1 = this.user_list1.filter(obj => obj.user !== user);
          this.user = this.user_null;
        }).toPromise();
    }
  }

  add() {
    console.log('add:', this.user);
    var e = this.user_list1.find(obj => obj.user == this.user.user);
    if (e) {
      console.log('existed');
      return;
    }
    this.user.role = 'user';
    return this.http.post(globals.api_base_url + '/api/add_user', JSON.stringify(this.user), { withCredentials: true })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let res = response.json();
        console.log('/api/add_user', res);
        if (this.user.role == 'admin') {
          this.user.role = '管理员';
        }
        else {
          this.user.role = '普通用户';
        }
        this.user_list1.push(Object.assign({}, this.user));
        this.user = this.user_null;
        //this.toast();
      }).toPromise();
  }

  edit(user) {
    Object.keys(this.user).forEach((key) => (this.user[key] == null || this.user[key] == '') && delete this.user[key]);
    return this.http.post(globals.api_base_url + '/api/edit_user', JSON.stringify(this.user), { withCredentials: true })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let res = response.json();
        console.log('/api/edit_user', res);
        this.user_list1.map(obj => {
          if (obj.user == this.user.user) {
            console.log(user);
            Object.keys(this.user).forEach((key) => obj[key] = this.user[key]);
          }
        });
        this.user = this.user_null;
      }).toPromise();
  }

  changePassword() {
    //var m = {};

    //console.log(this.user.password, this.password1);
    //if (this.user.password != this.password1) {
    //  this.err_tip = '密码不一致, 请重新输入!';
    //  return;
    //}
    return this.http.post(globals.api_base_url + '/api/change_password', JSON.stringify({ user: this.current_user, password: this.password1 }), { withCredentials: true })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let res = response.json();
        console.log(res);
        alert('密码修改成功');
      }).toPromise();
  }


  onDeleteConfirm(event) {
    console.log('delete?');
    if (window.confirm('确定删除该用户?')) {
      console.log(event);
      event.confirm.resolve();
      this.delete(event.data.user);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    event.confirm.resolve();
    console.log(event);
    //this.add(event.newData);
    //this.user_list.load(event.source.data);
    //console.log(this.user_list);
  }

  onEditConfirm(event) {
    event.confirm.resolve();
    console.log(event);
    this.edit(event.newData);
    //console.log(this.user_list);
  }

  onUserRowSelect($event): void {
    console.log(event);
  }

  onSelectionChange(entry) {
    // clone the object for immutability
    //this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
  }

  remove(entry) {
    console.log(entry);
  }

  modify(entry) {
    console.log(entry);
  }

  public refreshValueRole(value: any): void {
    this.value = value;
    console.log('refreshValue: ', this.value);
  }

  public selected_role(value: any): void {
    this.role = value;
    this.user.role = value.id;
    console.log('Selected value is: ', value);
  }

  public focus() {
    this.err_tip = ' ';
    console.log('focus...')
  }

  //toast() {
  //      this._service.success(
  //          'Some Title',
  //          'Some Content',
  //          {
  //              showProgressBar: true,
  //              pauseOnHover: false,
  //              clickToClose: false,
  //              maxLength: 10
  //          }
  //      )
  //  }

  //toast() {
  //  this.modalActions.emit({action:"modal",params:['open']});
  //}

  //toast() {
  //      // Just add default Toast with title only
  //      this.toastyService.default('Hi there');
  //      // Or create the instance of ToastOptions
  //      var toastOptions:ToastOptions = {
  //          title: "My title",
  //          msg: "The message",
  //          showClose: true,
  //          timeout: 5000,
  //          theme: 'default',
  //          onAdd: (toast:ToastData) => {
  //              console.log('Toast ' + toast.id + ' has been added!');
  //          },
  //          onRemove: function(toast:ToastData) {
  //              console.log('Toast ' + toast.id + ' has been removed!');
  //          }
  //      };
  //      // Add see all possible types in one shot
  //      this.toastyService.info(toastOptions);
  //      this.toastyService.success(toastOptions);
  //      this.toastyService.wait(toastOptions);
  //      this.toastyService.error(toastOptions);
  //      this.toastyService.warning(toastOptions);
  //  }
}
