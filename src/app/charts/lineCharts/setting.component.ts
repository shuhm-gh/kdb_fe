import { Component } from '@angular/core';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AuthenticationService } from '../../_services/index';

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

  current_user = '';

  user = {
    user: '',
    role: '',
    pass: ''
  }

  role = '';
  value = '';

  op = 'l';
  btn_add = true;
  active_role = {
    'id': 'admin',
    'text': '管理员'
  };

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
  data = [
    {
      user: 'kylin',
      role: 'admin',
      pass: '修改',
    },
    {
      user: 'shuhm',
      role: 'user',
      pass: '修改',
    },
  ]; //TableData;

  settings = {
    columns: {
      user: {
        title: '用户'
      },
      role: {
        title: '角色',
        type: 'html',
        editor: {
          type: 'list',
          config: {
            list: [{ title: '管理员', value: 'admin' }, { title: '普通用户', value: 'user' }]
          }
        }
      },
      pass: {
        title: '密码'
      }
    },
    actions: {
      columnTitle: '操作',
    },
    add: {
      addButtonContent: '新建',
      createButtonContent: '创建',
      cancelButtonContent: '取消'
    },
    edit: {
      editButtonContent: '编辑',
      saveButtonContent: '更新',
      cancelButtonContent: '取消'
    },
    delete: {
      deleteButtonContent: '删除',
      confirmDelete: true
    },
  };

  user_list = [];
  selectedEntry: { [key: string]: any } = {
    value: null,
    description: null
  };

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.op = 'a';
    this.active_role = {
      'id': 'admin',
      'text': '管理员'
    };

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
    if (this.user_list) {
      this.onSelectionChange(this.user_list[0]);
    }

    this.current_user = this.authenticationService.get_current_user();
  }

  onDeleteConfirm(event) {
    console.log('delete?');
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
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

  public refreshValueRole(value: any): void {
    this.value = value;
    console.log('refreshValue: ', this.value);
  }

  public selected_role(value: any): void {
    this.role = value;
    this.user.role = value.id;
    console.log('Selected value is: ', value);
  }

}