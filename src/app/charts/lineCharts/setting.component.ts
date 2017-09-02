import { Component } from '@angular/core';

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

  user = {
    user: '',
    role: '',
    pass: ''
  }

  role = '';
  value = '';

  role_list = [
    {
      'id': 'admin',
      'text': '管理员'
    },
    {
      'id': 'normal',
      'text': '普通用户'
    },
  ];
  test_value = [
    {
        user: 'kylin',
        role: 'admin',
        edit: '修改',
        remove: '删除'
      },
      {
        user: 'shuhm',
        role: 'user',
        edit: '修改',
        remove: '删除'
      },
  ]; //TableData;
  test_label = [
    { title: '用户', name: 'user', sort: '' },
    { title: '角色', name: 'role', sort: '' },
    { title: '操作', name: 'edit', sort: '' },
    { title: '操作', name: 'remove', sort: '' },
  ];

  user_list = [];
  selectedEntry: { [key: string]: any } = {
    value: null,
    description: null
  };
  
  constructor() {
  }
  
  ngOnInit() {
    this.user_list = [
      {
        name: 'kylin',
        role: 'admin'
      },
      {
        name: 'shuhm',
        role: 'user'
      },
    ];
    
    // select the first one
    if(this.user_list) {
      this.onSelectionChange(this.user_list[0]);  
    }
    
  }
  
  onSelectionChange(entry) {
    // clone the object for immutability
    this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
  }

  remove(entry) {
    console.log(entry);
  }
  modify(entry) {
    console.log(entry);
  }

  add(info) {
    console.log(this.user.user, this.user.role, this.user.pass);
  }

  public refreshValueRole(value:any):void {
    this.value = value;
    console.log('refreshValue: ', this.value);
  }

  public selected_role(value:any):void {
    this.role = value;
    this.user.role = value.id;
    console.log('Selected value is: ', value);
  }

}